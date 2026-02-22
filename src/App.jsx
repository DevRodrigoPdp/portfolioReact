import './index.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { CustomCursor } from './components/CustomCursor';
import { SidebarNav }  from './components/SidebarNav';
import { Hero }        from './components/Hero';
import { Projects }    from './components/Projects';
import { Experience }  from './components/Experience';
import { Education }   from './components/Education';
import { About }       from './components/About';
import { Contact }     from './components/Contacto';
import { Footer }      from './components/Footer';

// Background colors per section
const BG_COLORS = {
  hero:        '#f5f5f0',
  projects:    '#efefea',
  experiencia: '#f2f2ed',
  formacion:   '#eeeee9',
  about:       '#ebebE6',
  contact:     '#f0f0eb',
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [bgColor, setBgColor] = useState(BG_COLORS.hero);
  const sectionIds = ['hero', 'projects', 'experiencia', 'formacion', 'about', 'contact'];

  // IntersectionObserver for sidebar + bg color
  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            setBgColor(BG_COLORS[id] || '#0a0a0a');
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
    <motion.div
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="layout"
      style={{ minHeight: '100vh' }}
    >
      <CustomCursor />
      <SidebarNav activeSectionId={activeSection} />

      <div className="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
