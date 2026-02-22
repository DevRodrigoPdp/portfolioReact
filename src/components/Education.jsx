import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
    center: 'IES Francisco de Goya',
    location: 'Madrid, España',
    period: 'FEB 2026 – Actualidad',
    description: 'Formación en desarrollo web full-stack: aplicaciones modernas, bases de datos y despliegue.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'PostgreSQL', 'Apache'],
  },
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    center: 'IES Tetuan de las Victorias',
    location: 'Madrid, España',
    period: '2021 – 2023',
    description: 'Programación, bases de datos, interfaces y apps Android y escritorio.',
    tech: ['Java', 'SQL', 'Android Studio'],
  },
];

const EduItem = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-white/20"
    >
      <div className="space-y-1">
        <p className="text-xs tracking-[0.15em] uppercase text-[#fffff0]/60 font-medium">{item.period}</p>
        {item.location && <p className="text-xs text-[#fffff0]/40">{item.location}</p>}
        <p className="text-xs font-semibold mt-1 text-[#fffff0]/80">{item.center}</p>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-bold text-[#fffff0] leading-snug group-hover:text-gray-700 transition-colors duration-300 drop-shadow-sm">{item.title}</h3>
        <p className="text-sm leading-relaxed text-[#fffff0]/80 font-medium">{item.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#fffff0]/20 text-[#fffff0]/80 bg-[#fffff0]/10 backdrop-blur-sm shadow-sm">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="formacion" className="px-10 md:px-16 py-14 border-t border-[#fffff0]/20">
      <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase block mb-3 text-[#fffff0]/60 font-medium">
        Formación
      </motion.span>
      <div className="overflow-hidden mb-12">
        <motion.h2 ref={ref} initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tight text-[#fffff0] leading-none drop-shadow-md">
          Educación
        </motion.h2>
      </div>
      <div className="border-t border-[#fffff0]/20">
        {education.map((edu, i) => <EduItem key={i} item={edu} index={i} />)}
      </div>
    </section>
  );
};