import { m } from 'framer-motion';
import './reveal.css';

export const ease = [0.16, 1, 0.3, 1];

const inView = { once: true, amount: 0.5 };

/**
 * Variante "sube desde detrás de la máscara". El delay llega por `custom`.
 * Importante: quien observa la entrada en pantalla es el CONTENEDOR (visible);
 * el hijo enmascarado nunca intersecta y no dispararía nada por sí mismo.
 */
export const rise = {
  hidden: { y: '110%' },
  shown: (delay = 0) => ({ y: '0%', transition: { duration: 1, ease, delay } }),
};

/** Props para el contenedor que dispara las variantes de sus hijos. */
export const revealOnView = (amount = 0.5) => ({
  initial: 'hidden',
  whileInView: 'shown',
  viewport: { once: true, amount },
});

/**
 * Titular por líneas: cada línea sube desde detrás de una máscara, escalonada.
 * MotionConfig reducedMotion="user" (App) anula el desplazamiento si el usuario lo pide.
 */
export function Lines({ lines, as = 'h2', className = '', delay = 0 }) {
  const Tag = m[as];
  return (
    <Tag className={className} {...revealOnView(0.3)}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <m.span className="line-in" variants={rise} custom={delay + i * 0.09}>
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}

/** Aparición suave (opacidad + leve subida). */
export function Fade({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Texto que ocupa exactamente el ancho de su contenedor, solo con CSS (sin medir en JS,
 * así no fuerza un reflow al arrancar). El contenedor debe tener `container-type: inline-size`.
 *
 * `ratio` = ancho del texto en em (ancho a 100px / 100) con la fuente final.
 * Si cambia el texto o la fuente hay que volver a medirlo:
 *   el.style.fontSize = '100px'; el.scrollWidth / 100
 */
export function FitText({ ratio, className = '', children }) {
  return (
    <span className={`fit-text ${className}`} style={{ '--fit-ratio': ratio }}>
      {children}
    </span>
  );
}

/** Marca de registro de imprenta: guiño gráfico en la portada. */
export function RegMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="17" cy="17" r="9" />
      <circle cx="17" cy="17" r="4" fill="currentColor" stroke="none" />
      <path d="M17 1v32M1 17h32" />
    </svg>
  );
}
