import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CvLink } from './CvPreview';
import { CONTACT } from '../data/contact';

const ease = [0.16, 1, 0.3, 1];

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

/** Primera pantalla: quién eres, qué haces y cómo contactarte, antes de los proyectos. */
export function IntroHero({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <section id="intro" className="fullscreen-section intro-section">
      <div className="intro-content">
        <motion.p {...rise(0.1)} className="text-mono intro-eyebrow">
          {t('introRole')}
        </motion.p>

        <h1 className="text-giant intro-name">
          <span className="intro-name-line">
            <motion.span {...rise(0)} style={{ display: 'block' }}>RODRIGO</motion.span>
          </span>
          <span className="intro-name-line">
            <motion.span {...rise(0.08)} style={{ display: 'block' }}>PUERTA</motion.span>
          </span>
        </h1>

        <motion.p {...rise(0.25)} className="intro-tagline">
          {t('introTagline')}
        </motion.p>

        <motion.div {...rise(0.35)} className="intro-actions">
          <button type="button" className="intro-btn intro-btn-primary text-mono" onClick={() => onNavigate('works')}>
            {t('viewProjects')} <span aria-hidden="true">↓</span>
          </button>
          <CvLink className="intro-btn text-mono">
            {t('viewCv')} <span aria-hidden="true">↗</span>
          </CvLink>
        </motion.div>

        <motion.nav {...rise(0.45)} aria-label={t('contactLinks')} className="intro-links text-mono">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span aria-hidden="true">·</span>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${CONTACT.email}`}>Email</a>
        </motion.nav>
      </div>
    </section>
  );
}
