import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [state, setState] = useState('idle'); // idle | hover | click
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tx = useSpring(useMotionValue(-100), { stiffness: 100, damping: 20, mass: 0.5 });
  const ty = useSpring(useMotionValue(-100), { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      tx.set(e.clientX);
      ty.set(e.clientY);
    };
    const onOver = (e) => {
      if (e.target.closest('a,button,[data-hover]')) setState('hover');
    };
    const onOut = (e) => {
      if (e.target.closest('a,button,[data-hover]')) setState('idle');
    };
    const onDown = () => setState('click');
    const onUp = () => setState(s => s === 'click' ? 'idle' : s);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className={`cursor ${state}`}
        style={{ left: x, top: y }}
      />
      {/* Trailing ring */}
      <motion.div
        className="cursor-trailer"
        style={{ left: tx, top: ty }}
      />
    </>
  );
};
