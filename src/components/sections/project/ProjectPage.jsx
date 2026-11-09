import { m } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { publishedProjects as projects } from '../../../data/data';
import { Page } from '../../album/Page';
import { Lines, Fade, ease } from '../../album/Reveal';
import { pad } from '../../album/albumContext';
import './project.css';

/** Página de un proyecto: título, foto con esquineros y ficha técnica. Los pares van en espejo. */
export function ProjectPage(props) {
  const { t } = useLanguage();
  const p = props.page.project;
  const n = projects.indexOf(p) + 1;
  const flip = n % 2 === 0;
  const href = p.demo ?? p.repo;
  const cta = p.demo ? t('viewDemo') : t('viewRepo');
  const tilt = flip ? 1.4 : -1.4;

  const spec = [
    [t('media'), p.stackLabel],
    [t('typology'), t(p.typeKey)],
    [t('devStatus'), t(p.statusKey)],
    [t('year'), p.year],
  ];

  return (
    <Page {...props} className={`project ${flip ? 'is-flip' : ''}`}>
      <header className="project-head">
        <p className="eyebrow">Nº {pad(n)} — {t(p.typeKey)}</p>
        <Lines lines={[p.title]} className="display project-title" />
      </header>

      {/* la foto "cae" girada sobre la hoja y se asienta */}
      <m.figure
        className="photo"
        initial={{ opacity: 0, y: 60, rotate: tilt * 4, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease, delay: 0.15 }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="photo-frame">
          {p.cover && <img src={p.cover} alt="" loading="lazy" decoding="async" />}
          <span className="sr-only">{cta} {p.title} ({t('newTab')})</span>
          <i className="corner corner-tl" aria-hidden="true" />
          <i className="corner corner-tr" aria-hidden="true" />
          <i className="corner corner-bl" aria-hidden="true" />
          <i className="corner corner-br" aria-hidden="true" />
        </a>
      </m.figure>

      <div className="project-info">
        <dl className="spec">
          {spec.map(([k, v], i) => (
            <Fade key={k} className="spec-row" delay={0.25 + i * 0.06}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </Fade>
          ))}
        </dl>

        <Fade className="project-links" delay={0.5}>
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
      </div>
    </Page>
  );
}
