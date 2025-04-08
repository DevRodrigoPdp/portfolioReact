import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

const experiences = [
  {
    role: "Desarrollador de aplicaciones (Prácticas)",
    company: "Fractalia",
    period: "Septiembre 2023 - Diciembre 2023",
    description: "Análisis de casos de uso y análisis web",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        {/* Título con ícono verde y línea debajo */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <BriefcaseIcon className="w-7 h-7 text-green-500" />
            <h2 className="text-3xl font-bold">Experiencia Laboral</h2>
          </div>
          <div className="h-1 w-16 bg-green-500 mt-2"></div>
        </div>

        {/* Lista de experiencias */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-400">
                  {exp.company} · {exp.period}
                </p>
                <p className="mt-1 text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
