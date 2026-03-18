import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { GlobalNav } from './components/GlobalNav';
import { ProjectViews } from './components/ProjectViews';
import { AboutPage } from './components/AboutPage';
import { CinematicFooter } from './components/CinematicFooter';
import './index.css';

const SECTIONS = ['works', 'about', 'contact'];

function AppContent() {
  const [activeSection, setActiveSection] = useState('works');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const { t } = useLanguage();

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-hover')) {
        setCursorHover(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-hover')) {
        setCursorHover(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Handle navigation
  const handleNavigate = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for section detection
  useEffect(() => {
    const observers = [];
    
    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Custom Cursor */}
      <div
        className={`cursor ${cursorHover ? 'hover' : ''}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Global Navigation */}
      <GlobalNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content - All sections as siblings for natural scroll */}
      <main>
        {/* Projects - rendered as flat sections */}
        <ProjectViews onSlideChange={setCurrentSlide} />

        {/* About Section */}
        <section id="about" className="h-screen h-dvh">
          <AboutPage />
        </section>

        {/* Footer / Contact Section */}
        <section id="contact" className="h-screen h-dvh">
          <CinematicFooter />
        </section>
      </main>

      {/* Scroll Indicator */}
      {activeSection === 'works' && currentSlide === 0 && (
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* Page Indicator */}
      <div className="page-indicator">
        {SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => handleNavigate(section)}
            className={`indicator-dot ${activeSection === section ? 'active' : ''}`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
