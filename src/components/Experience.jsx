import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    company: 'Aegon Seguros',
    role: 'Desarrollador Frontend',
    type: 'Becario',
    period: '2025 – Actualidad',
    location: 'Madrid, España',
    highlights: [
      'Desarrollo de interfaces en el departamento de Frontend.',
      'Trabajo con Astro para generación de sitios estáticos y optimización de rendimiento.',
      'Uso de Angular para el desarrollo de aplicaciones web empresariales.',
    ],
    tech: ['Astro', 'Angular'],
  },
  {
    company: 'Fractalia',
    role: 'Desarrollador de Aplicaciones',
    type: 'Prácticas',
    period: 'Sep 2023 – Dic 2023',
    location: 'Madrid, España',
    highlights: [
      'Desarrollo y mantenimiento de aplicaciones internas.',
      'Trabajo en equipo con metodologías ágiles.',
      'Mejora y corrección de bugs en sistemas existentes.',
    ],
    tech: ['Java', 'SQL', 'Git'],
  },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-stone-200"
    >
      <div className="space-y-1">
        <p className="text-xs tracking-[0.15em] uppercase text-stone-500 font-medium">{item.period}</p>
        <p className="text-xs text-stone-400">{item.location}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{item.company}</h3>
          <p className="text-sm mt-0.5 text-stone-600">
            {item.role} · <span className="text-stone-400">{item.type}</span>
          </p>
        </div>
        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-lime-600" />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full border border-stone-200 text-stone-500 bg-white">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="experiencia" className="px-10 md:px-16 py-14 border-t border-stone-200">
      <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase block mb-3 text-stone-500 font-medium">
        Trayectoria
      </motion.span>
      <div className="overflow-hidden mb-12">
        <motion.h2 ref={ref} initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tight text-gray-900 leading-none">
          Experiencia
        </motion.h2>
      </div>
      <div className="border-t border-stone-200">
        {experiences.map((exp, i) => <TimelineItem key={i} item={exp} index={i} />)}
      </div>
    </section>
  );
};
