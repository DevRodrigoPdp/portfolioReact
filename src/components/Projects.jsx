import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/data';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiKotlin, SiFirebase, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';

const TECH_ICONS = {
  'React':          <FaReact />,
  'JavaScript':     <SiJavascript />,
  'Kotlin':         <SiKotlin />,
  'Firebase':       <SiFirebase />,
  'Tailwind CSS':   <SiTailwindcss />,
  'Tailwind':       <SiTailwindcss />,
  'Android Studio': <SiAndroidstudio />,
};

const TechBadge = ({ name }) => {
  const icon = TECH_ICONS[name] ?? null;
  return (
    <span className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase text-[#fffff0]/80 font-medium">
      {icon && <span className="text-xs leading-none text-[#fffff0]/60">{icon}</span>}
      {name}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-[#fffff0]/20 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-16 items-start">

        {/* Left: text content */}
        <div className="flex flex-col gap-5">
          {/* Index + subtitle row */}
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#fffff0]/40 font-medium tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px flex-1 max-w-[24px] bg-[#fffff0]/30" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#fffff0]/60 font-semibold">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#fffff0] leading-none drop-shadow-sm">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#fffff0]/80 max-w-md font-medium">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {project.technologies?.map((t, i) => (
              <TechBadge key={i} name={t.name} />
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#fffff0] w-fit"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            data-hover
          >
            Ver proyecto
            <span className="text-base leading-none">↗</span>
          </motion.a>
        </div>

        {/* Right: image */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
          data-hover
        >
          <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#fde047]/5 transition-colors duration-500" />
          </div>
        </a>

      </div>
    </motion.article>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="px-10 md:px-16 py-14 border-t border-[#fffff0]/20">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase block mb-3 text-[#fffff0]/60 font-medium"
      >
        Proyectos seleccionados
      </motion.span>

      <div className="overflow-hidden mb-12">
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tight text-[#fffff0] leading-none drop-shadow-md"
        >
          Trabajo
        </motion.h2>
      </div>

      {/* Project list */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#fffff0]/20 mt-0" />
    </section>
  );
};
