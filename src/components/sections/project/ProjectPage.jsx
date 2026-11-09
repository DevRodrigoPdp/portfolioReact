import { m } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { publishedProjects as projects } from '../../../data/data';
import { Page } from '../../album/Page';
import { Lines, Fade, ease, revealOnView } from '../../album/Reveal';
import { pad } from '../../album/albumContext';
import './project.css';

/**
 * Página de un proyecto, igual para todos:
 * cabecera (número, título y enlaces) · foto a todo el ancho · ficha en cuatro columnas.
 */
export function ProjectPage(props) {
  const { t } = useLanguage();
  const p = props.page.project;
  const n = projects.indexOf(p) + 1;
  const href = p.demo ?? p.repo;
  const cta = p.demo ? t('viewDemo') : t('viewRepo');

  const spec = [
    [t('media'), p.stackLabel],
    [t('typology'), t(p.typeKey)],
    [t('devStatus'), t(p.statusKey)],
    [t('year'), p.year],
  ];

  return (
    <Page {...props} className="project">
      <header className="project-head">
        <div>
          <p className="eyebrow">{pad(n)} / {pad(projects.length)} — {t(p.typeKey)}</p>
          <Lines lines={[p.title]} className="display project-title" />
        </div>

        <Fade className="project-links" delay={0.3}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn">
            {cta} <span aria-hidden="true">↗</span>
            <span className="sr-only"> {p.title} ({t('newTab')})</span>
          </a>
          {p.demo && p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-link">
              {t('repo')} ↗<span className="sr-only"> {p.title} ({t('newTab')})</span>
            </a>
          )}
        </Fade>
      </header>

      {/* La foto se descubre de abajo arriba. Quien detecta la entrada es el contenedor:
          un elemento recortado al 100% no "intersecta" y la animación nunca arrancaría. */}
      <m.div className="project-photo" {...revealOnView(0.25)}>
        <m.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-photo-link"
          variants={{
            hidden: { clipPath: 'inset(100% 0 0 0)' },
            shown: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 1.2, ease, delay: 0.1 } },
          }}
        >
          {p.cover && <img src={p.cover} alt="" loading="lazy" decoding="async" />}
          <span className="sr-only">{cta} {p.title} ({t('newTab')})</span>
        </m.a>
      </m.div>

      <dl className="spec">
        {spec.map(([k, v], i) => (
          <Fade key={k} className="spec-item" delay={0.2 + i * 0.06}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </Fade>
        ))}
      </dl>
    </Page>
  );
}
