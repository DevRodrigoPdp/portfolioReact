import React from "react";
import { FaGraduationCap, FaUniversity, FaReact } from "react-icons/fa";

export const Education = () => {
  const educationData = [
    {
      id: 1,
      title:
        "Grado Superior en DAM (Desarrollo de Aplicaciones Multiplataforma)",
      institution: "IES Tetuan de las Victorias",
      year: "2021 - 2023",
      description:
        "Desarrollo de Aplicaciones Multiplataforma con formación en Java, Android, SQL y desarrollo web.",
      icon: <FaGraduationCap className="text-green-400 text-2xl" />,
      isCurrent: false,
    },
    {
      id: 2,
      title: "Curso de React",
      institution: "Udemy",
      year: "2024 - Actualidad",
      description:
        "Dominio de React, Hooks, Context API, Redux y Next.js con proyectos prácticos.",
      icon: <FaReact className="text-blue-400 text-2xl" />,
      isCurrent: true,
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Título consistente */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-4 mb-2">
            <FaGraduationCap className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Formación & Aprendizaje
            </h1>
          </div>
          <div className="h-1 w-16 bg-green-500"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-8 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center w-full`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full z-10 ${
                  item.isCurrent
                    ? "animate-pulse bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                    : "bg-gray-800 border-2 border-green-500"
                }`}
              >
                {item.icon}
              </div>

              {/* Contenido */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <div
                  className={`p-6 rounded-lg border ${
                    item.isCurrent
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border-blue-400 shadow-lg shadow-blue-400/20"
                      : "bg-gray-800/50 border-gray-700 hover:border-green-400"
                  } transition-all duration-300`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-gray-300 mb-1">
                        <FaUniversity className="mr-2" />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                    {item.isCurrent && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                        En progreso
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mb-3">{item.year}</div>
                  <p className="text-gray-300">{item.description}</p>

                  {item.isCurrent && (
                    <div className="mt-4 pt-4 border-t border-blue-400/30">
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">
                        Actualmente aprendiendo:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        <li>React Avanzado con Redux Toolkit</li>
                        <li>Patrones de diseño en React</li>
                        <li>Integración con Backend</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-800/50 border border-green-400/30 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <FaReact className="text-blue-400 text-2xl mr-3" />
            <h3 className="text-xl font-bold text-white">Enfoque Actual</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Complementando mi formación con un curso intensivo de React en Udemy
            para especializarme en desarrollo frontend moderno.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["React Hooks", "Context API", "Next.js", "Tailwind CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-700 text-green-400 px-3 py-1 rounded-full text-center"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
