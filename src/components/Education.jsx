import React from "react";

const education = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
    center: "CFGS · España",
    period: "2021 - 2023",
    description:
      "Formación profesional enfocada en programación, bases de datos, interfaces y desarrollo multiplataforma.",
    highlights: [
      "Programación en Java, diseño de bases de datos y gestión de proyectos.",
      "Desarrollo de apps para Android y escritorio.",
      "Prácticas profesionales orientadas al mundo real.",
    ],
    tech: ["Java", "SQL", "Android Studio", "UML"],
  },
  {
    title: "Desarrollo Frontend (Autodidacta)",
    center: "Estudio Personal",
    period: "2024 - Actualidad",
    description:
      "Formación autodidacta centrada en tecnologías web modernas y buenas prácticas de UI/UX.",
    highlights: [
      "React, Tailwind CSS, shadcn/ui.",
      "Consumo de APIs, routing, y gestión de estado.",
      "Enfoque en la accesibilidad y experiencia de usuario.",
    ],
    tech: ["React", "Tailwind", "JavaScript", "Git", "Figma"],
  },
];

export const Education = () => {
  return (
    <section id="formacion" className="py-16 text-[#D4D4D4] scroll-mt-32">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-white">Formación</h2>
          </div>
          <div className="h-[4px] w-16 bg-gradient-to-r from-[#00ffae] to-[#63e]" />
        </div>

        {/* Bloques de formación */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[#00ffae]">
                  {edu.title}
                </h3>
                <p className="text-sm text-[#A3A3A3]">
                  {edu.center} · {edu.period}
                </p>
              </div>

              <p className="text-sm text-[#CFCFCF] leading-relaxed">{edu.description}</p>

              <ul className="list-disc list-inside text-[#A3A3A3] space-y-1">
                {edu.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {edu.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-[#63e]/10 text-[#D4D4D4] border border-[#D4D4D4]/30"
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
