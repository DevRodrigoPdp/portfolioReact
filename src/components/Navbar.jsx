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
      className={`fixed top-4 z-30  py-2 transition-all duration-300 rounded-3xl shadow-md max-w-[70rem] ${
        scrolled
          ? "bg-gray-800 bg-opacity-80 backdrop-blur-md"
          : "bg-transparent"
      } mx-auto left-2.5 right-2.5`}
    >
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 items-center justify-center w-full max-w-screen-md mx-auto px-3">
        <a
          href="#about"
          className="title-font font-medium text-white text-base sm:text-xl"
        >
          Rodrigo Puerta
        </a>

        <nav className="flex flex-wrap items-center text-sm sm:text-base justify-center gap-3 sm:gap-5">
          <a href="#experiencia" className="hover:text-white">
            Experiencia
          </a>
          <a href="#projects" className="hover:text-white">
            Trabajos anteriores
          </a>
          <a href="#skills" className="hover:text-white">
            Habilidades
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rpuertadelpozo@gmail.com&su=Interesado%20en%20tu%20trabajo&body=Hola%20Rodrigo%2C%20me%20gustaría%20contactarte..."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};
