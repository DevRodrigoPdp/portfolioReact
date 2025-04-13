import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiVite
} from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400 text-3xl" /> },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 text-[#F5F5F5] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Habilidades y tecnologías</h1>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-[#00ffae] to-[#63e]" />
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 bg-[#1c1c1c] border border-transparent hover:border-[#00ffae] rounded-xl p-4 shadow-sm hover:shadow-[0_0_10px_#00ffae55] transition-all duration-300"
            >
              {skill.icon}
              <span className="text-sm mt-1 text-gray-200 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
