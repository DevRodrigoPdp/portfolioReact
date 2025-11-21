import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/data";


export const Projects = () => {
  return (
    <section id="projects" className="text-[#D4D4D4] py-16">
      <div className="container mx-auto px-5">
<<<<<<< HEAD
=======
        
>>>>>>> f3fc8db55080b5efbb069aca0b71aea07dccf413
        {/* Título */}
        <div className="w-full mb-10">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-3xl font-bold text-white">Proyectos</h1>
          </div>
          <div className="h-[4px] w-16 bg-gradient-to-r from-[#00ffae] to-[#63e]" />
        </div>

        {/* Proyecto en curso */}
        <div className="mb-12 p-4 border border-[#00ffae] bg-[#1a1a1a] rounded-lg shadow-md flex items-center gap-4">
          <CodeIcon className="w-6 h-6 text-[#00ffae] animate-pulse" />
          <div>
            <p className="text-sm text-[#00ffae] font-semibold uppercase tracking-wide">
              Proyecto en curso
            </p>
            <p className="text-sm text-gray-300">
              Actualmente estoy desarrollando una landing page para un proyecto
              sobre <strong>Baby Sign</strong>, un método de comunicación
              gestual para bebés. Es un proyecto que combina diseño accesible
              con tecnología moderna, ¡muy pronto disponible!
            </p>
          </div>
        </div>

        {/* Proyectos */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10">
<<<<<<< HEAD
=======

>>>>>>> f3fc8db55080b5efbb069aca0b71aea07dccf413
              {/* Imagen */}
              <div className="w-full lg:w-2/5 group overflow-hidden rounded-md shadow-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-3/5 flex flex-col gap-4">
                <span className="text-sm text-[#00ffae] font-medium tracking-wide">
                  {project.subtitle}
                </span>

                <h2 className="text-2xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="text-[#A3A3A3] leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-xs text-gray-300"
                    >
<<<<<<< HEAD
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
=======
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
>>>>>>> f3fc8db55080b5efbb069aca0b71aea07dccf413
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Botón */}
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00ffae] text-sm font-medium hover:underline transition"
                  >
                    Ver Proyecto
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
<<<<<<< HEAD
=======

>>>>>>> f3fc8db55080b5efbb069aca0b71aea07dccf413
              </div>
            </div>
          ))}
        </div>

        
      

      </div>
    </section>
  );
};
