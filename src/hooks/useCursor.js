import { useState, useEffect, useRef } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/**
 * Cursor personalizado.
 * - Solo se activa con ratón (no en táctil) y sin prefers-reduced-motion.
 * - Permanece oculto hasta el primer mousemove (no se queda clavado en 0,0).
 * - Mueve el elemento con transform vía ref, sin re-render por cada movimiento.
 */
export function useCursor() {
  const hasFinePointer = useMediaQuery(FINE_POINTER);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);
  const enabled = hasFinePointer && !reducedMotion;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const onOver = (e) => {
      if (e.target.closest?.('button, a, .cursor-hover')) setHover(true);
    };
    const onOut = (e) => {
      if (e.target.closest?.('button, a, .cursor-hover')) setHover(false);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [enabled]);

  return { ref, enabled, visible, hover };
}
