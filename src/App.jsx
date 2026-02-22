import './index.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { CustomCursor } from './components/CustomCursor';
import { ParticlesBackground } from './components/ParticlesBackground';
import { SidebarNav }  from './components/SidebarNav';
import { Hero }        from './components/Hero';
import { Projects }    from './components/Projects';
import { Experience }  from './components/Experience';
import { Education }   from './components/Education';
import { About }       from './components/About';
import { Contact }     from './components/Contacto';
import { Footer }      from './components/Footer';

// Background colors per section (Removed to use CSS animated background)
const BG_COLORS = {
  hero:        'transparent',
  projects:    'transparent',
  experiencia: 'transparent',
  formacion:   'transparent',
  about:       'transparent',
  contact:     'transparent',
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionIds = ['hero', 'projects', 'experiencia', 'formacion', 'about', 'contact'];

  // IntersectionObserver for sidebar + active section
  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-15% 0px -15% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div
      className="layout"
      style={{ minHeight: '100vh', backgroundColor: 'transparent' }}
    >
      <ParticlesBackground />
      <CustomCursor />

      {/* Navegación lateral — landmark nav para lectores de pantalla */}
      <nav aria-label="Navegación de secciones">
        <SidebarNav activeSectionId={activeSection} />
      </nav>

      {/* Contenido principal */}
      <main className="main-content" id="main-content" aria-label="Contenido principal">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
