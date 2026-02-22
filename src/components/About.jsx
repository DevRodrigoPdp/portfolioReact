import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
  { name: 'HTML5',      icon: <FaHtml5 className="text-orange-500" />,    level: 90 },
  { name: 'CSS3',       icon: <FaCss3Alt className="text-blue-500" />,     level: 85 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />,        level: 80 },
  { name: 'React',      icon: <FaReact className="text-blue-400" />,       level: 85 },
  { name: 'Next.js',    icon: <SiNextdotjs className="text-[#fffff0]" />,   level: 65 },
  { name: 'Tailwind',   icon: <SiTailwindcss className="text-cyan-500" />, level: 88 },
  { name: 'Git',        icon: <FaGitAlt className="text-orange-600" />,    level: 75 },
  { name: 'Vite',       icon: <SiVite className="text-purple-500" />,      level: 80 },
];

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22,1,0.36,1] }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#fffff0]">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-sm font-semibold">{skill.name}</span>
        </div>
        <span className="text-xs text-[#fffff0]/60 font-medium">{skill.level}%</span>
      </div>
      <div className="h-px w-full relative bg-[#fffff0]/20">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#facc15]"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: skill.level / 100 } : {}}
          transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: [0.22,1,0.36,1] }}
          style={{ transformOrigin: 'left', originX: 0 }}
        />
      </div>
    </motion.div>
  );
};

const infoRows = [
  { label: 'Stack',          value: 'React · Next.js · Tailwind · Java' },
  { label: 'Idiomas',        value: 'ES (nativo) · EN (B2)' },
  { label: 'Disponibilidad', value: 'Inmediata' },
  { label: 'Modalidad',      value: 'Remoto / Híbrido' },
  { label: 'Ubicación',      value: 'Madrid, España' },
];

export const About = () => {
  return (
    <section id="about" className="px-10 md:px-16 py-14 flex flex-col justify-center border-t border-[#fffff0]/20">
      <div className="mb-12">
        <span className="text-[10px] tracking-[0.3em] uppercase block mb-3 text-[#fffff0]/60 font-medium">Sobre mí</span>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-[#fffff0] leading-none drop-shadow-md">Info</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            className="text-lg md:text-xl leading-relaxed text-[#fffff0]/80 font-medium"
          >
            Desarrollador de Aplicaciones con formación en DAW y DAM. Me obsesiona que cada detalle de la interfaz cuente. Actualmente construyendo experiencias frontend que van más allá de lo funcional.
          </motion.p>

          <div className="space-y-0">
            {infoRows.map(({ label, value }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-between py-4 border-b border-[#fffff0]/20"
              >
                <span className="text-xs tracking-[0.15em] uppercase text-[#fffff0]/60 font-medium">{label}</span>
                <span className="text-sm text-[#fffff0] font-medium">{value}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }} className="pt-4">
            <span className="text-[10px] tracking-[0.25em] uppercase block mb-4 text-[#fffff0]/60 font-medium">Experiencia</span>
            <div className="space-y-1 text-[#fffff0]">
              <div className="flex items-center justify-between">
                <span className="font-bold">Aegon Seguros</span>
                <span className="text-xs text-[#fffff0]/40">2025 – Actualidad</span>
              </div>
              <p className="text-xs text-[#fffff0]/60 mb-3">Desarrollador Frontend · Becario</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">Fractalia</span>
                <span className="text-xs text-[#fffff0]/40">Sep – Dic 2023</span>
              </div>
              <p className="text-xs text-[#fffff0]/60">Desarrollador de Aplicaciones · Prácticas</p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-5">
          <span className="text-[10px] tracking-[0.25em] uppercase block mb-6 text-[#fffff0]/60 font-medium">Tecnologías</span>
          {skills.map((s, i) => <SkillBar key={i} skill={s} index={i} />)}
        </div>
      </div>
    </section>
  );
};
