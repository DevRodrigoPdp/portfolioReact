import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero',        label: 'Inicio',      num: '01' },
  { id: 'projects',    label: 'Proyectos',   num: '02' },
  { id: 'experiencia', label: 'Experiencia', num: '03' },
  { id: 'formacion',   label: 'Formación',   num: '04' },
  { id: 'about',       label: 'Sobre mí',    num: '05' },
  { id: 'contact',     label: 'Contacto',    num: '06' },
];

export const SidebarNav = ({ activeSectionId }) => {
  const [hovered, setHovered] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, width: hovered ? 180 : 72 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-0 left-0 h-screen z-100 flex flex-col items-start justify-between py-8 border-r overflow-hidden"
      style={{
        borderColor: 'rgba(255,255,240,0.1)',
        background: 'rgba(2,44,34,0.4)',
        backdropFilter: 'blur(16px)',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 cursor-pointer w-full"
        onClick={() => scrollTo('hero')}
        data-hover
      >
        <span className="text-xs font-black tracking-widest text-[#fffff0] flex-shrink-0"
          style={{ writingMode: hovered ? 'horizontal-tb' : 'vertical-rl', transition: 'writing-mode 0s' }}>
          {hovered ? 'RP' : 'RP'}
        </span>
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] tracking-[0.15em] uppercase text-[#fffff0]/40 whitespace-nowrap"
            >
              Portfolio
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-1 w-full px-3">
        {sections.map(({ id, label, num }) => {
          const isActive = activeSectionId === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-3 w-full px-2 py-2.5 rounded-lg transition-all duration-200 text-left ${
                isActive ? 'bg-black/06' : 'hover:bg-[#fde047]/04'
              }`}
              aria-label={label}
            >
              {/* Dot */}
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: isActive ? '#facc15' : 'rgba(255,255,240,0.3)',
                  boxShadow: isActive ? '0 0 6px rgba(250,204,21,0.5)' : 'none',
                }}
              />
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className={`text-xs whitespace-nowrap transition-colors ${
                      isActive ? 'text-[#fffff0] font-semibold' : 'text-[#fffff0]/40'
                    }`}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Year */}
      <div className="px-5">
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#fffff0]/30"
          style={{ writingMode: hovered ? 'horizontal-tb' : 'vertical-rl' }}>
          2026
        </span>
      </div>
    </motion.aside>
  );
};
