import { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CvLink } from '../CvPreview';
import { useAlbum, pad } from './albumContext';
import { AlbumMenu } from './AlbumMenu';
import './album-header.css';

/**
 * Cabecera fija tipo "running head" de imprenta.
 * mix-blend-mode: difference → se lee igual sobre papel, sobre la página azul y sobre la tinta.
 * En móvil las acciones se recogen en un menú a pantalla completa (fuera de la cabecera,
 * para que no herede el mix-blend-mode).
 */
export function AlbumHeader({ current }) {
  const { t, language, toggleLanguage } = useLanguage();
  const { pages, total, goTo } = useAlbum();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const pendingRef = useRef(null);
  const page = pages[current];

  const langButton = (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className={language === 'es' ? 'is-on' : ''}>ES</span>
      <span aria-hidden="true"> / </span>
      <span className={language === 'en' ? 'is-on' : ''}>EN</span>
    </button>
  );

  return (
    <>
      <header className="album-header">
        <button type="button" className="ah-name" onClick={() => goTo(0)}>
          Rodrigo Puerta
        </button>

        <p className="ah-count" aria-hidden="true">
          <span className="ah-num">{pad(current + 1)}</span>
          <span className="ah-total">/{pad(total)}</span>
          <span className="ah-label">{page.label ?? t(page.labelKey)}</span>
        </p>

        <nav className="ah-actions" aria-label="Portfolio">
          <button type="button" onClick={() => goTo('index')}>{t('pIndex')}</button>
          <button type="button" onClick={() => goTo('contact')}>{t('pContact')}</button>
          <CvLink>CV ↗</CvLink>
          {langButton}
        </nav>

        <button
          type="button"
          className="ah-menu-btn"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          {t('menu')}
        </button>
      </header>

      <AnimatePresence
        onExitComplete={() => {
          // saltamos cuando el menú ya se ha cerrado y ha devuelto el scroll y el foco
          // (rAF: el desmontaje del menú devuelve el foco al botón justo después de este callback)
          const i = pendingRef.current;
          pendingRef.current = null;
          if (i !== null) requestAnimationFrame(() => goTo(i));
        }}
      >
        {menuOpen && (
          <AlbumMenu
            current={current}
            langButton={langButton}
            onClose={closeMenu}
            onNavigate={(i) => { pendingRef.current = i; closeMenu(); }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
