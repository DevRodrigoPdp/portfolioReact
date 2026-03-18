import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* ── Desktop ── */}
      <div className="nav-corner nav-corner-tl nav-desktop">
        <span className="text-mono" style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.15em' }}>
          {t('name')}
        </span>
      </div>

      <div className="nav-corner nav-corner-tr nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {['works', 'about'].map((s) => (
          <button
            key={s}
            onClick={() => onNavigate(s)}
            className="nav-link text-mono"
            style={{ color: activeSection === s ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: activeSection === s ? 700 : 400 }}
          >
            {t(s === 'works' ? 'selectedWorks' : 'about')}
          </button>
        ))}
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

      {/* ── Botón mobile ── */}
      <button
        className="nav-mobile-btn text-mono"
        onClick={() => setOpen(!open)}
        style={{ color: '#fff', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.7rem' }}
      >
        {open ? 'CLOSE' : 'MENU'}
      </button>

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
            {[
              { key: 'works',  label: t('selectedWorks'), delay: 0.05 },
              { key: 'about',  label: t('about'),         delay: 0.12 },
            ].map(({ key, label, delay }) => (
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

            <motion.button
              onClick={toggleLanguage}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
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
