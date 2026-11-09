import { useEffect, useRef } from 'react';
import { m, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useAlbum, pad } from './albumContext';

/**
 * Una hoja del álbum.
 * En escritorio las hojas son sticky: cada una se desliza por encima de la anterior y se
 * "asienta" (pasa de girada a recta) mientras entra, como al ir pasando páginas.
 * En móvil son bloques normales que crecen con su contenido.
 */
export function Page({ index, page, tone = 'paper', className = '', children }) {
  const { t } = useLanguage();
  const { register, total, stacked, reduce } = useAlbum();
  const ref = useRef(null);

  // 0 = la hoja asoma por abajo, 1 = ya cubre la pantalla
  const enter = useMotionValue(1);
  const animated = stacked && !reduce && index > 0;

  const measure = () => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    enter.set(Math.min(1, Math.max(0, 1 - top / window.innerHeight)));
  };

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', () => { if (animated) measure(); });
  useEffect(() => {
    if (animated) measure();
    else enter.set(1);
    // measure solo lee el DOM; basta con re-medir al cambiar de modo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  // Gira con el pivote arriba a la izquierda: la esquina derecha va rezagada y nunca asoma
  // antes de tiempo. La sombra solo existe mientras la hoja está entrando.
  const rotate = useTransform(enter, [0, 1], [3, 0]);
  const boxShadow = useTransform(
    enter,
    [0, 0.06, 1],
    ['0 -30px 70px -30px rgb(0 0 0 / 0)', '0 -30px 70px -30px rgb(0 0 0 / 0.45)', '0 -30px 70px -30px rgb(0 0 0 / 0.45)']
  );
  const label = page.label ?? t(page.labelKey);

  return (
    <m.section
      id={page.id}
      ref={(el) => { ref.current = el; register(index, el); }}
      tabIndex={-1}
      aria-label={label}
      className={`page page--${tone} ${className}`}
      style={{ zIndex: index + 1, ...(animated ? { rotate, boxShadow } : null) }}
    >
      <div className="page-body">{children}</div>

      <footer className="page-foot" aria-hidden="true">
        <span>{label}</span>
        <span className="page-foot-mid">Rodrigo Puerta — Portfolio 2026</span>
        <span>{pad(index + 1)} / {pad(total)}</span>
      </footer>
    </m.section>
  );
}
