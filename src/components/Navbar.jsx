import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const sections = ["about", "experiencia", "formacion", "projects", "skills", "contacto"];

  useEffect(() => {
    // Cambia el fondo al hacer scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Intersection Observer para detectar la sección activa
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const linkClass = (id) =>
    `transition-colors duration-300 ${
      activeSection === id
        ? "text-[#00ffae]"
        : "text-[#A3A3A3] hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-4 z-30 py-2 transition-all duration-300 rounded-3xl ${
        scrolled ? "backdrop-blur-md bg-transparent" : "bg-transparent"
      } mx-auto left-2.5 right-2.5`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          className="title-font font-medium text-[#00ffae] text-base sm:text-xl"
        >
          Rodrigo Puerta
        </a>

        {/* Menú de hamburguesa en móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#00ffae] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú en desktop */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-wrap items-center text-sm sm:text-base justify-center gap-3 sm:gap-5`}
        >
          <a href="#experiencia" className={linkClass("experiencia")}>
            Experiencia
          </a>
          <a href="#formacion" className={linkClass("formacion")}>
            Formación
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Proyectos
          </a>
          <a href="#skills" className={linkClass("skills")}>
            Habilidades
          </a>
          <a href="#contacto" className={linkClass("contacto")}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};
