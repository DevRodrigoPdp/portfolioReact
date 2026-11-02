import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CvLink } from './CvPreview';

const NAV_ITEMS = [
  { key: 'works',   label: 'selectedWorks' },
  { key: 'about',   label: 'about' },
  { key: 'contact', label: 'contact' },
];

const ease = [0.16, 1, 0.3, 1];

export function GlobalNav({ activeSection, onNavigate }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const navigate = (section) => {
    onNavigate(section);
    setOpen(false);
  };

  return (
    <>
      {/* Degradado bajo la cabecera fija para que no se monte sobre el contenido */}
      <div className="nav-top-fade" aria-hidden="true" />

      {/* ── Desktop ── */}
      <div className="nav-corner nav-corner-tl nav-desktop">
        <button
          type="button"
          onClick={() => onNavigate('intro')}
          className="text-mono nav-name"
          style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.15em' }}
        >
          {t('name')}
        </button>
      </div>

      <div className="nav-corner nav-corner-tr nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {NAV_ITEMS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className="nav-link text-mono"
            aria-current={activeSection === key ? 'true' : undefined}
            style={{ color: activeSection === key ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: activeSection === key ? 700 : 400 }}
          >
            {t(label)}
          </button>
        ))}
        <CvLink className="nav-link text-mono nav-cv">CV ↗</CvLink>
        <button onClick={toggleLanguage} className="nav-link text-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ color: language === 'es' ? '#fff' : 'rgba(255,255,255,0.4)' }}>ES</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 0.3rem' }}>/</span>
          <span style={{ color: language === 'en' ? '#fff' : 'rgba(255,255,255,0.4)' }}>EN</span>
        </button>
      </div>

      <div className="nav-corner nav-corner-bl nav-desktop">
        <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('location')}</span>
      </div>

      <div className="nav-corner nav-corner-br nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('available')}</span>
      </div>

      {/* ── Header mobile ── */}
      <div className="nav-mobile-header">
        <button
          className="text-mono"
          onClick={() => setOpen(!open)}
          style={{ color: '#fff', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.7rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
        >
          {open ? t('close') : t('menu')}
        </button>
        <span className="text-mono" style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.7rem' }}>
          {t('name')}
        </span>
      </div>

      {/* ── Overlay mobile ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: '#0a0a0a',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '3rem',
            }}
          >
            {NAV_ITEMS.map(({ key, label }, i) => ({ key, label: t(label), delay: 0.05 + i * 0.07 })).map(({ key, label, delay }) => (
              <motion.button
                key={key}
                onClick={() => navigate(key)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay }}
                style={{
                  fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                  fontWeight: 900, letterSpacing: '-0.02em',
                  color: activeSection === key ? '#fff' : 'rgba(255,255,255,0.35)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textTransform: 'uppercase', lineHeight: 1,
                }}
              >
                {label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.26 }}
            >
              <CvLink
                className="nav-cv"
                style={{
                  fontSize: 'clamp(2rem, 10vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em',
                  color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', lineHeight: 1, textDecoration: 'none',
                }}
              >
                CV ↗
              </CvLink>
            </motion.div>

            <motion.button
              onClick={toggleLanguage}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.32 }}
              className="text-mono"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.2em' }}
            >
              <span style={{ color: language === 'es' ? '#fff' : 'rgba(255,255,255,0.3)' }}>ES</span>
              {' / '}
              <span style={{ color: language === 'en' ? '#fff' : 'rgba(255,255,255,0.3)' }}>EN</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
