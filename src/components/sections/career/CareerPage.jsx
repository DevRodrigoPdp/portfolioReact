import { useLanguage } from '../../../context/LanguageContext';
import { JOBS, STUDIES } from '../../../data/career';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import './career.css';

/** 06 · Trayectoria: experiencia y formación. */
export function CareerPage(props) {
  const { t } = useLanguage();

  const jobs = JOBS.map((j) => ({
    years: j.yearsKey ? `${j.years} / ${t(j.yearsKey)}` : j.years,
    // el rol traducido viene como "Rol, año": nos quedamos con el rol
    role: j.role ?? t(j.roleKey).split(',')[0],
    place: t(j.placeKey),
  }));
  const studies = STUDIES.map((s) => ({
    title: `${t(s.titleKey)} — ${s.subtitle}`,
    place: t(s.placeKey),
  }));

  return (
    <Page {...props} className="work">
      <div className="split">
        <Lines lines={[t('workTitle1'), t('workTitle2')]} className="display" />

        <div className="timeline">
          <p className="eyebrow">{t('experiencia')}</p>
          <ul>
            {jobs.map((j, i) => (
              <Fade as="li" key={j.place} delay={0.1 + i * 0.08}>
                <span className="tl-years">{j.years}</span>
                <span><strong>{j.role}</strong><br />{j.place}</span>
              </Fade>
            ))}
          </ul>

          <p className="eyebrow">{t('formacion')}</p>
          <ul>
            {studies.map((s, i) => (
              <Fade as="li" key={s.title} delay={0.3 + i * 0.08}>
                <span className="tl-years">—</span>
                <span><strong>{s.title}</strong><br />{s.place}</span>
              </Fade>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  );
}
