import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './CvPreview.css';

export const CV_URL = '/cv-rodrigo-puerta.pdf';
export const CV_FILENAME = 'CV-Rodrigo-Puerta.pdf';

const ease = [0.16, 1, 0.3, 1];
const easeIn = [0.7, 0, 0.84, 0];

/* Entrada: el panel entra desde la derecha y los elementos aparecen escalonados */
const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.65, ease, when: 'beforeChildren', staggerChildren: 0.06 } },
  exit: { x: '100%', transition: { duration: 0.45, ease: easeIn } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/** Precarga el PDF al pasar el ratón por el enlace, para que el panel abra con él ya descargado. */
let prefetched = false;
function prefetchCv() {
  if (prefetched) return;
  prefetched = true;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = CV_URL;
  document.head.appendChild(link);
}

/**
 * Panel lateral con la vista previa del CV (PDF en iframe) + descargar / abrir / cerrar.
 * Va en un portal: el footer tiene transform y overflow hidden, que romperían el position: fixed.
 */
function CvPanel({ onClose }) {
  const { t } = useLanguage();
  const closeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeRef.current?.focus({ preventScroll: true });
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <m.div
      className="cv-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.35, delay: 0.1 } }}
      onClick={onClose}
    >
      <m.aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
        className="cv-panel"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cv-toolbar">
          <m.h2 variants={itemVariants} id="cv-title" className="text-mono cv-title">
            CV <span aria-hidden="true">—</span> Rodrigo Puerta
          </m.h2>
          <div className="cv-actions">
            <m.a variants={itemVariants} href={CV_URL} download={CV_FILENAME} className="project-ext-link text-mono">
              {t('download')} ↓
            </m.a>
            <m.a variants={itemVariants} href={CV_URL} target="_blank" rel="noopener noreferrer" className="project-ext-link text-mono">
              {t('openNewTab')} ↗
            </m.a>
            <m.button
              variants={itemVariants}
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="project-ext-link text-mono cv-close"
              aria-label={t('close')}
            >
              {t('close')} ✕
            </m.button>
          </div>
        </header>

        <m.div variants={itemVariants} className="cv-body">
          {!loaded && (
            <div className="cv-loader" aria-hidden="true">
              <span className="text-mono">{t('loadingCv')}</span>
              <span className="cv-loader-bar" />
            </div>
          )}
          <m.iframe
            src={`${CV_URL}#toolbar=0&navpanes=0&view=FitH`}
            title="CV de Rodrigo Puerta"
            className="cv-frame"
            onLoad={() => setLoaded(true)}
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease }}
          />
        </m.div>
      </m.aside>
    </m.div>
  );
}

/** Vista previa con animación de entrada y de salida. */
export function CvPreview({ open, onClose }) {
  return createPortal(
    <AnimatePresence>{open && <CvPanel key="cv" onClose={onClose} />}</AnimatePresence>,
    document.body
  );
}

// La vista previa en iframe solo funciona bien en escritorio; en móvil se abre el visor nativo
const PREVIEW_QUERY = '(min-width: 769px) and (hover: hover)';

/**
 * Enlace "Ver CV": en escritorio abre la vista previa; en móvil (o sin JS) abre el PDF en otra pestaña.
 */
export function CvLink({ className = '', style, children }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const onClick = (e) => {
    if (window.matchMedia(PREVIEW_QUERY).matches) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onMouseEnter={prefetchCv}
        onFocus={prefetchCv}
        aria-haspopup="dialog"
        className={className}
        style={style}
      >
        {children}
      </a>
      <CvPreview open={open} onClose={close} />
    </>
  );
}
