import { m } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { publishedProjects as projects } from '../../../data/data';
import { Page } from '../../album/Page';
import { Lines, Fade, rise, revealOnView } from '../../album/Reveal';
import { useAlbum, pad } from '../../album/albumContext';
import './works.css';

/** 07 · Trabajos (página azul): resumen + una columna por proyecto. */
export function WorksPage(props) {
  const { t } = useLanguage();
  const { goTo } = useAlbum();
  const years = projects.map((p) => Number(p.year));

  return (
    <Page {...props} tone="blue" className="works">
      <div className="works-intro">
        <p className="lead">{t('worksTitle')}</p>
        <Lines lines={[pad(projects.length)]} className="works-count" />
        <hr />
        <p className="works-row">
          <span>{Math.min(...years)} — {Math.max(...years)}</span>
          <span>{projects.length} {t('projectsWord')}</span>
        </p>
        <Fade as="p" className="body" delay={0.2}>{t('worksText')}</Fade>
      </div>

      <m.ul className="strips" {...revealOnView(0.2)}>
        {projects.map((p, i) => (
          <m.li key={p.slug} variants={rise} custom={0.1 + i * 0.1}>
            <button type="button" className="strip" onClick={() => goTo(p.slug)}>
              <span className="strip-name">{p.title}</span>
              {p.cover && <img className="strip-img" src={p.cover} alt="" loading="lazy" />}
              <span className="sr-only">{t('goTo')} {p.title}</span>
            </button>
          </m.li>
        ))}
      </m.ul>
    </Page>
  );
}
