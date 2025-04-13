import React from "react";

const experiences = [
  {
    role: "Desarrollador de Aplicaciones (Prácticas)",
    company: "Fractalia",
    period: "Septiembre 2023 - Diciembre 2023",
    description:
      "Durante mis prácticas en Fractalia, trabajé como desarrollador de aplicaciones dentro del equipo técnico, participando en el análisis y desarrollo de soluciones software orientadas a clientes.",
    tasks: [
      "Análisis y documentación de casos de uso.",
      "Desarrollo y mantenimiento de aplicaciones multiplataforma.",
      "Soporte en tareas de integración web y testing.",
      "Colaboración con otros departamentos en la entrega de soluciones eficientes.",
    ],
    tech: ["Java", "SQL", "Git", "HTML/CSS", "Scrum"],
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-16 scroll-mt-20 text-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold">Experiencia Laboral</h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-[#00ffae] to-[#63e]"></div>
        </div>

        {/* Experiencia */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#292929] rounded-xl p-6 hover:border-[#00ffae] transition-all duration-300 shadow-md shadow-[#63e]/10"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#00ffae]">{exp.role}</h3>
                  <p className="text-sm text-[#A3A3A3]">
                    {exp.company} · {exp.period}
                  </p>
                </div>
              </div>
              <p className="text-[#D4D4D4] mb-4">{exp.description}</p>

              <ul className="list-disc list-inside text-[#A3A3A3] space-y-1 mb-4">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-[#63e]/10 text-[#D4D4D4] border border-[#D4D4D4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
