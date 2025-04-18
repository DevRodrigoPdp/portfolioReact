import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // iconos

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["about", "experiencia", "formacion", "projects", "skills", "contacto"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.2 }
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
      activeSection === id ? "text-[#00ffae]" : "text-[#A3A3A3] hover:text-white"
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-4 z-30 py-2 transition-all duration-300 rounded-3xl
        ${scrolled ? "backdrop-blur-md bg-transparent" : "bg-transparent"}
        mx-auto left-2.5 right-2.5`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="title-font font-medium text-[#00ffae] text-base sm:text-xl">
          Rodrigo Puerta
        </a>

        {/* Botón hamburguesa solo visible en móvil */}
        <button
          className="sm:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú */}
        <nav
          className={`
            ${menuOpen ? "flex" : "hidden"} 
            sm:flex flex-col sm:flex-row absolute sm:static top-14 left-0 w-full sm:w-auto bg-black sm:bg-transparent 
            text-sm sm:text-base justify-center items-center gap-3 sm:gap-5 py-4 sm:py-0 z-20
          `}
        >
          <a href="#experiencia" className={linkClass("experiencia")} onClick={() => setMenuOpen(false)}>
            Experiencia
          </a>
          <a href="#formacion" className={linkClass("formacion")} onClick={() => setMenuOpen(false)}>
            Formación
          </a>
          <a href="#projects" className={linkClass("projects")} onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#skills" className={linkClass("skills")} onClick={() => setMenuOpen(false)}>
            Habilidades
          </a>
          <a href="#contacto" className={linkClass("contacto")} onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};
