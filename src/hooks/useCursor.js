import { useState, useEffect } from 'react';

export function useCursor() {
  const [pos, setPos]     = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e) => {
      if (e.target.closest('button, a, .cursor-hover')) setHover(true);
    };

    const onOut = (e) => {
      if (e.target.closest('button, a, .cursor-hover')) setHover(false);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return { pos, hover };
}
