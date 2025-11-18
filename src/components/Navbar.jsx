import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    "about",
    "experiencia",
    "formacion",
    "projects",
    "skills",
    "contacto",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
      className={`fixed top-0 z-30 py-4 transition-all duration-300 rounded-3xl ${
        scrolled ? "backdrop-blur-md bg-transparent" : "bg-transparent"
      } mx-auto left-2.5 right-2.5`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <a
            href="#hero"
            className="title-font font-medium text-[#00ffae] text-base sm:text-xl"
          >
            Rodrigo Puerta
          </a>

          {/* Botón hamburguesa */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00ffae] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`
            flex-col transition-[max-height] duration-500 ease-in-out w-full overflow-hidden
            ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}
            lg:mt-0 lg:max-h-none lg:flex-row lg:flex lg:w-auto
            flex items-center justify-center
            space-y-3 lg:space-y-0 lg:gap-x-5
          `}
        >
          {sections.slice(1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={linkClass(id)}
              onClick={() => setIsMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
