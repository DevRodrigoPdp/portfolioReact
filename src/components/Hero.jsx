import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const tags = ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'JavaScript'];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yTitle = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 80, damping: 20 });
  const yDesc  = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), { stiffness: 80, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative flex flex-col justify-center min-h-screen px-10 md:px-16 overflow-hidden">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30vw] font-black leading-none text-gray-900 select-none pointer-events-none"
        aria-hidden
      >
        R
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-12"
      >
        
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium">Disponible para proyectos</span>
        <span className="w-px h-3 bg-stone-300" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Madrid · 2025</span>
      </motion.div>

      <motion.div style={{ y: yTitle, opacity }}>
        <div className="overflow-hidden">
          <motion.h1
            className="parallax-title text-gray-900 block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Rodrigo
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="parallax-title block text-stone-300"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            Puerta
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-stone-200 my-10 origin-left"
      />

      <motion.div style={{ y: yDesc, opacity }} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="text-sm md:text-base max-w-sm leading-relaxed text-stone-600 mb-6">
            Desarrollador Frontend especializado en interfaces limpias, rápidas y experiencias digitales de alto impacto.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.07, duration: 0.4 }}
                className="text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full border border-stone-200 text-stone-500 bg-white"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-start md:items-end gap-3"
        >
          <a
            href="#projects"
            data-hover
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group flex items-center gap-3 text-sm font-medium tracking-wide border border-stone-300 px-7 py-3.5 rounded-full hover:border-lime-600 hover:text-lime-700 text-stone-600 transition-all duration-300 bg-white shadow-sm"
          >
            Ver proyectos
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </a>
          <a
            href="#contact"
            data-hover
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-xs tracking-[0.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            Contactar ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-12 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 1, height: 50, background: 'rgba(0,0,0,0.15)' }}
        />
      </motion.div>
    </section>
  );
};
