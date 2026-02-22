import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagLink = ({ href, children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="inline-block text-xs tracking-[0.2em] uppercase py-3 px-6 rounded-full transition-all duration-300 border border-black/15 text-black/40 hover:border-lime-600 hover:text-lime-700"
      data-hover
    >
      {children}
    </motion.a>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="px-10 md:px-16 py-16 border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
      <motion.span
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase block mb-12 text-black/30"
      >
        Contacto
      </motion.span>

      <div className="overflow-hidden mb-4">
        <motion.h2
          initial={{ y: '100%' }} whileInView={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase tracking-tight leading-none text-gray-900"
        >
          Trabajemos
        </motion.h2>
      </div>
      <div className="overflow-hidden mb-14">
        <motion.h2
          initial={{ y: '100%' }} whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase tracking-tight leading-none text-black/12"
        >
          juntos.
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xs text-sm leading-relaxed text-black/40"
        >
          Abierto a nuevas oportunidades, proyectos freelance y colaboraciones creativas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          <MagLink href="mailto:rpuertadelpozo@gmail.com">Email ↗</MagLink>
          <MagLink href="https://github.com/DevRodrigoPdp">GitHub ↗</MagLink>
          <MagLink href="https://www.linkedin.com/in/rodrigo-puerta-del-pozo-b382142b0/">LinkedIn ↗</MagLink>
        </motion.div>
      </div>
    </section>
  );
};
