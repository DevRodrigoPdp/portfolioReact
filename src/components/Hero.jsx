import React from "react";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00ffae] bg-[#00ffae]/10 text-[#00ffae] text-sm font-medium">
            Desarrollador de Apps
            <svg
              className="w-3 h-3 mx-1"
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
            Desarrollador Full Stack
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hola, soy <span className="text-[#00ffae]">Rodrigo</span>
          </h1>

          <h2 className="font-medium text-gray-300">
            Desarrollador de Aplicaciones, actualmente estudiando desarrollo frontend.
            Me encanta crear experiencias digitales limpias, rápidas y funcionales.
          </h2>

          <div className="flex justify-center gap-3 flex-wrap">
            <a href="#projects">
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Ver mi trabajo</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </a>

            <a href="#contacto">
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Contactar</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
