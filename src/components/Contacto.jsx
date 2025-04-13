import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactCard = ({ icon, title, subtitle, href }) => (
  <div className="bg-[#111111] rounded-xl p-6 border border-[#292929] hover:border-[#00ffae] transition-all duration-300">
    <div className="flex flex-col items-start text-left gap-3">
      <div className="bg-[#00ffae]/10 rounded-full p-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#00ffae] font-medium flex items-center gap-1 hover:underline mt-2"
      >
        Conectar <span>↗</span>
      </a>
    </div>
  </div>
);

export const Contacto = () => {
  return (
    <section id="contacto" className="min-h-[calc(100vh-100px)] py-20 pb-32">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Contacto</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#00ffae] to-[#63e] mt-1.5" />
          <p className="mt-6 text-gray-400 mb-6">
            Estoy buscando nuevas oportunidades en desarrollo frontend y full stack. Ya sea que tengas una
            pregunta o simplemente quieras saludar, ¡te responderé!
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ContactCard
            icon={<Mail className="text-[#00ffae] w-8 h-8" />}
            title="Email"
            subtitle="rpuertadelpozo@gmail.com"
            href="mailto:rpuertadelpozo@gmail.com"
          />
          <ContactCard
            icon={<Github className="text-[#00ffae] w-8 h-8" />}
            title="GitHub"
            subtitle="DevRodrigoPdp"
            href="https://github.com/DevRodrigoPdp"
          />
          <ContactCard
            icon={<Linkedin className="text-[#00ffae] w-8 h-8" />}
            title="LinkedIn"
            subtitle="Rodrigo Puerta del Pozo"
            href="https://www.linkedin.com/in/rodrigo-puerta-del-pozo-b382142b0/"
          />
        </div>
      </div>
    </section>
  );
};
