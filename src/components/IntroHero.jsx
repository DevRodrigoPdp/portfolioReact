import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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
        <h1 className="text-giant intro-name">
          <span className="intro-name-line">
            <motion.span {...rise(0)} style={{ display: 'block' }}>RODRIGO</motion.span>
          </span>
          <span className="intro-name-line">
            <motion.span {...rise(0.08)} style={{ display: 'block' }}>PUERTA</motion.span>
          </span>
        </h1>

        <motion.p {...rise(0.25)} className="text-mono intro-role">
          {t('introRole')}
        </motion.p>

        <motion.button
          {...rise(0.35)}
          type="button"
          className="intro-btn intro-btn-primary text-mono"
          onClick={() => onNavigate('works')}
        >
          {t('viewProjects')} <span aria-hidden="true">↓</span>
        </motion.button>
      </div>
    </section>
  );
}
