import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { publishedProjects as projects } from '../../data/data';
import { useLanguage } from '../../context/LanguageContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AlbumContext } from './albumContext';
import { AlbumHeader } from './AlbumHeader';
// album.css antes que las secciones: sus reglas de sección deben ganar en caso de empate
import './album.css';
import {
  CoverPage, ContentsPage, HelloPage, WhatIDoPage, ToolsPage,
  CareerPage, WorksPage, ProjectPage, ContactPage,
} from '../sections';

/** Hojas apiladas solo si caben enteras en pantalla; si no, scroll normal. */
const STACK_QUERY = '(min-width: 1025px) and (min-height: 680px)';
const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

/** Pausa tras cada hoja, en altos de pantalla (= .page-dwell en album.css). */
const DWELL = 0.7;

/**
 * Orden del álbum. Cada proyecto publicado ocupa su propia página.
 *  inContents → aparece en la página "Contenido" (solo lo importante)
 */
const PAGES = [
  { id: 'cover', labelKey: 'pCover', Component: CoverPage },
  { id: 'index', labelKey: 'pIndex', Component: ContentsPage },
  { id: 'hello', labelKey: 'pHello', Component: HelloPage },
  { id: 'do', labelKey: 'pDo', Component: WhatIDoPage },
  { id: 'stack', labelKey: 'pStack', Component: ToolsPage },
  { id: 'work', labelKey: 'pWork', Component: CareerPage, inContents: true },
  { id: 'works', labelKey: 'pWorks', Component: WorksPage },
  ...projects.map((p) => ({ id: p.slug, label: p.title, project: p, Component: ProjectPage, inContents: true })),
  { id: 'contact', labelKey: 'pContact', Component: ContactPage, inContents: true },
];

export function Album() {
  const { t } = useLanguage();
  const stacked = useMediaQuery(STACK_QUERY);
  const reduce = useMediaQuery(REDUCE_QUERY);
  const refs = useRef([]);
  const [current, setCurrent] = useState(0);

  // Página actual = la última cuyo borde superior ya pasó la mitad de la pantalla
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let cur = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= mid) cur = i;
      });
      setCurrent(cur);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const goTo = useCallback((target) => {
    const i = typeof target === 'number' ? target : PAGES.findIndex((p) => p.id === target);
    const el = refs.current[i];
    if (!el) return;
    const behavior = reduce ? 'auto' : 'smooth';
    // Las hojas sticky no tienen posición propia: la página i empieza en i × (pantalla + pausa)
    if (stacked) window.scrollTo({ top: i * window.innerHeight * (1 + DWELL), behavior });
    else el.scrollIntoView({ behavior });
    el.focus({ preventScroll: true });
  }, [stacked, reduce]);

  const register = useCallback((i, el) => { refs.current[i] = el; }, []);

  const value = useMemo(
    () => ({ pages: PAGES, total: PAGES.length, goTo, register, stacked, reduce }),
    [goTo, register, stacked, reduce]
  );

  return (
    <AlbumContext.Provider value={value}>
      <a href="#hello" className="skip-link">{t('skipToContent')}</a>
      <AlbumHeader current={current} />
      <main className={`album ${stacked ? 'is-stacked' : ''}`}>
        {PAGES.map(({ Component, ...page }, i) => (
          <Fragment key={page.id}>
            <Component index={i} page={page} />
            {stacked && i < PAGES.length - 1 && <div className="page-dwell" aria-hidden="true" />}
          </Fragment>
        ))}
      </main>
    </AlbumContext.Provider>
  );
}
