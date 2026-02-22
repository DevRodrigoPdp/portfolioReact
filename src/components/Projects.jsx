import { CodeIcon } from "@heroicons/react/solid";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/data';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiKotlin, SiFirebase, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';

const TECH_ICONS = {
  'React':          <FaReact className="text-gray-900" />,
  'JavaScript':     <SiJavascript className="text-gray-900" />,
  'Kotlin':         <SiKotlin className="text-gray-900" />,
  'Firebase':       <SiFirebase className="text-gray-900" />,
  'Tailwind CSS':   <SiTailwindcss className="text-gray-900" />,
  'Tailwind':       <SiTailwindcss className="text-gray-900" />,
  'Android Studio': <SiAndroidstudio className="text-gray-900" />,
};

const TechBadge = ({ name }) => {
  const icon = TECH_ICONS[name] ?? <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />;
  return (
    <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-black/12 bg-white text-gray-700 font-medium shadow-sm">
      <span className="text-sm leading-none">{icon}</span>
      {name}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl overflow-hidden border border-black/08 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden h-48 group">
        <a href={project.link} target="_blank" rel="noopener noreferrer" data-hover>
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[9px] tracking-[0.2em] uppercase text-black/25">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded border border-lime-600/25 text-lime-700 bg-lime-50">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>

        <p className="text-sm leading-relaxed text-black/45 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies?.map((t, i) => (
            <TechBadge key={i} name={t.name} />
          ))}
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-lime-700 font-medium mt-auto pt-2"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          data-hover
        >
          Ver proyecto ↗
        </motion.a>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="px-10 md:px-16 py-14 border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase block mb-3 text-black/30"
      >
        Proyectos seleccionados
      </motion.span>

      <div className="overflow-hidden mb-10">
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tight text-gray-900 leading-none"
        >
          Trabajo
        </motion.h2>
      </div>

      {/* Horizontal card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

    </section>
  );
};
