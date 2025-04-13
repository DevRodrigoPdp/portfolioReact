import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaSass, FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiVite
} from 'react-icons/si';

const skillsByCategory = {
  "Fundamentos Web": [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl"/> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl"/> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl"/> }
  ],
  "Frameworks": [
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl"/> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-3xl"/> }
  ],
  "Diseño CSS": [
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-3xl"/> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-3xl"/> }
  ],
  "Herramientas": [
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl"/> },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-3xl"/> }
  ]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 text-white scroll-mt-2">
      <div className="container mx-auto px-4">
        <div className="w-full mb-12">
          <div className="flex items-center gap-4 mb-2">
            <FaLaptopCode className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Habilidades y tecnologías
            </h1>
          </div>
          <div className="h-1 w-16 bg-green-500"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div 
              key={category} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[250px] bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-400 text-center line-clamp-1">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center p-3 w-[calc(50%-12px)] min-w-[80px] hover:bg-gray-700/30 rounded-lg transition-colors"
                  >
                    {skill.icon}
                    <span className="text-xs md:text-sm mt-2 text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};