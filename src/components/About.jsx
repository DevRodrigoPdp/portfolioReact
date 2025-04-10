import React from "react";
import envelopeIcon from "../Icons/icons8-correo-24.png";
import linkedinIcon from "../Icons/icon-linkedin.svg";
import iconoCara from "../images/icono-cara.JPG";

export const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-16 flex flex-col content-left mt-10">
        <div className="mb-8 w-20 h-20 rounded-full overflow-hidden border-3 border-green-500">
          <img
            className="w-full h-full object-cover"
            alt="Rodri"
            src={iconoCara}
          />
        </div>

        {/* Contenido centrado */}
        <div className="text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hola, soy Rodri
          </h1>

          <p className="mb-8 text-lg leading-relaxed">
            Desarrollador de Aplicaciones Multiplataforma (DAM), además a día de
            hoy estoy estudiando de forma autodidacta el desarrollo frontend.
          </p>

          {/* Botones con iconos */}
          <div className="flex content-left gap-4">
            {/* Botón de Contacto */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rpuertadelpozo@gmail.com&su=Interesado%20en%20tu%20trabajo&body=Hola%20Rodrigo%2C%20me%20gustaría%20contactarte..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors"
            >
              <img
                src={envelopeIcon}
                alt="Icono de correo"
                className="w-5 h-5 mr-2"
              />
              Contáctame
            </a>

            {/* Botón de LinkedIn */}
            <a
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              alt="Icono Linkedin"
              className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors"
            >
              <img
                src={linkedinIcon}
                alt="Icono de LinkedIn"
                className="w-5 h-5 mr-2"
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
