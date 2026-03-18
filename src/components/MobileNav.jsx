import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Inicio', num: '01' },
  { id: 'projects', label: 'Proyectos', num: '02' },
  { id: 'experiencia', label: 'Experiencia', num: '03' },
  { id: 'formacion', label: 'Formación', num: '04' },
  { id: 'about', label: 'Sobre mí', num: '05' },
  { id: 'contact', label: 'Contacto', num: '06' },
];

export const MobileNav = ({ activeSectionId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-[#022c22]/80 backdrop-blur-md border border-[#fffff0]/20 md:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-[#fffff0] block origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="w-5 h-0.5 bg-[#fffff0] block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-[#fffff0] block origin-center"
          />
        </div>
      </button>

      {/* Menú overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] bg-[#022c22]/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {sections.map(({ id, label, num }, index) => {
                const isActive = activeSectionId === id;
                return (
                  <motion.button
                    key={id}
                    onClick={() => scrollTo(id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-4 px-6 py-3"
                  >
                    <span className={`text-xs font-mono ${isActive ? 'text-[#facc15]' : 'text-[#fffff0]/40'}`}>
                      {num}
                    </span>
                    <span className={`text-2xl font-bold tracking-wide ${isActive ? 'text-[#fffff0]' : 'text-[#fffff0]/70'}`}>
                      {label}
                    </span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
