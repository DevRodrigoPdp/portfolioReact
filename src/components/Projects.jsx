import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/data";

export const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Encabezado */}
        <div className="w-full mb-8">
          <div className="flex items-center gap-4 mb-4">
            <CodeIcon className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Proyectos
            </h1>
          </div>
          <div className="h-1 w-16 bg-green-500"></div>
        </div>
        {/* Lista de proyectos */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.image} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Imagen - tamaño mediano */}
              <div className="lg:w-2/5 w-full flex-shrink-0">
                <img
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover rounded-lg shadow-lg"
                  src={project.image}
                />
              </div>
              <div className="lg:w-3/5 w-full">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-green-400 bg-gray-800 rounded">
                    {project.subtitle}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tecnologías */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((technology) => (
                      <div
                        key={technology.name}
                        className="flex items-center bg-gray-800 px-2 py-1 rounded text-xs"
                      >
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="w-4 h-4 mr-1"
                        />
                        <span className="text-gray-200">{technology.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Botón */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-gray-900 text-sm font-medium rounded transition-colors"
                >
                  Ver Proyecto
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};