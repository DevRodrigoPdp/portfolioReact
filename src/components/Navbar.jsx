import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = ["about", "experiencia", "formacion", "projects", "skills"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);

      const scrollPosition = window.scrollY + 150;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition-colors duration-300 ${
      activeSection === id
        ? "text-[#F5F5F5]"
        : "text-[#A3A3A3] hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-4 z-30 py-2 transition-all duration-300 rounded-3xl
        ${scrolled ? "backdrop-blur-md bg-transparent" : "bg-transparent"}
        mx-auto left-2.5 right-2.5`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#about"
          className="title-font font-medium text-white text-base sm:text-xl"
        >
          Rodrigo Puerta
        </a>

        <nav className="flex flex-wrap items-center text-sm sm:text-base justify-center gap-3 sm:gap-5">
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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rpuertadelpozo@gmail.com&su=Interesado%20en%20tu%20trabajo&body=Hola%20Rodrigo%2C%20me%20gustaría%20contactarte..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] hover:text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};
