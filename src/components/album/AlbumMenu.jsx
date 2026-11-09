import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT } from '../../data/contact';
import { CvLink } from '../CvPreview';
import { useAlbum, pad } from './albumContext';
import { ease } from './Reveal';

const sheet = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  shown: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.6, ease, staggerChildren: 0.035, delayChildren: 0.15 } },
  exit: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.45, ease } },
};
const row = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/**
 * Índice a pantalla completa para móvil (se abre desde AlbumHeader).
 * Bloquea el scroll de fondo, cierra con Escape y devuelve el foco al cerrarse.
 */
export function AlbumMenu({ current, langButton, onClose, onNavigate }) {
  const { t } = useLanguage();
  const { pages } = useAlbum();
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus({ preventScroll: true });
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <m.div
      className="album-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t('menu')}
      variants={sheet}
      initial="hidden"
      animate="shown"
      exit="exit"
    >
      <div className="am-top">
        <span className="am-name">Rodrigo Puerta</span>
        <button ref={closeRef} type="button" onClick={onClose}>{t('close')}</button>
      </div>

      <ol className="am-list">
        {pages.map((p, i) => (
          <m.li key={p.id} variants={row}>
            <button
              type="button"
              className="am-row"
              aria-current={i === current ? 'page' : undefined}
              onClick={() => onNavigate(i)}
            >
              <span className="am-num">{pad(i + 1)}</span>
              <span className="am-label">{p.label ?? t(p.labelKey)}</span>
            </button>
          </m.li>
        ))}
      </ol>

      <m.div className="am-foot" variants={row}>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <div className="am-foot-row">
          <CvLink>CV ↗</CvLink>
          {langButton}
        </div>
      </m.div>
    </m.div>
  );
}
