import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 z-30 px-4 py-2 transition-all duration-300 rounded-3xl shadow-md ${
        scrolled
          ? "bg-gray-800 bg-opacity-80 backdrop-blur-md"
          : "bg-transparent"
      } mx-auto`}
    >
      <div className="flex items-center gap-6 ">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
        >
          Rodrigo Puerta
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#experiencia" className="mr-5 hover:text-white">
            Experiencia
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Trabajos anteriores
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rpuertadelpozo@gmail.com&su=Interesado%20en%20tu%20trabajo&body=Hola%20Rodrigo%2C%20me%20gustaría%20contactarte..."
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};
