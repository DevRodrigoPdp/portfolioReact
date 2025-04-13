import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactCard = ({ icon, title, subtitle, href }) => (
  <div className="bg-[#111111] rounded-xl p-6 border border-[#292929] hover:border-[#a855f7] transition-all duration-300">
    <div className="flex flex-col items-center text-center gap-3">
      <div className="bg-purple-900/20 rounded-full p-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-purple-400 font-medium flex items-center gap-1 hover:underline mt-2"
      >
        Connect <span>↗</span>
      </a>
    </div>
  </div>
);

export const Contacto = () => {
  return (
    <section id="contacto" className="py-20 px-4 text-white bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Título */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-gray-400">
            I'm currently looking for new opportunities in frontend and full stack development.
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ContactCard
            icon={<Mail className="text-purple-500 w-8 h-8" />}
            title="Email"
            subtitle="tu.email@ejemplo.com"
            href="mailto:tu.email@ejemplo.com"
          />
          <ContactCard
            icon={<Github className="text-purple-500 w-8 h-8" />}
            title="GitHub"
            subtitle="github.com/tuusuario"
            href="https://github.com/tuusuario"
          />
          <ContactCard
            icon={<Linkedin className="text-purple-500 w-8 h-8" />}
            title="LinkedIn"
            subtitle="linkedin.com/in/tuusuario"
            href="https://linkedin.com/in/tuusuario"
          />
        </div>

        {/* Footer */}
        <div className="text-gray-400 text-sm">
          Open to freelance projects, full-time positions, and collaborative opportunities.
        </div>

        <a
          href="mailto:tu.email@ejemplo.com"
          className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          <Mail className="w-4 h-4" />
          Send Me An Email
        </a>
      </div>
    </section>
  );
};
