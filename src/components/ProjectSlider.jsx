import { useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'SYNAPSES',
    mediaKey: 'REACT',
    typologyKey: 'eCommerce',
    statusKey: 'enDesarrollo',
    year: '2025',
  },
  {
    id: 2,
    title: 'COURTVISION',
    mediaKey: 'KOTLIN & FIREBASE',
    typologyKey: 'appAndroid',
    statusKey: 'completado',
    year: '2024',
  },
];

export function ProjectSlider({ currentSlide, onSlideChange }) {
  const { t } = useLanguage();
  const sectionRefs = useRef([]);
  const isManualScroll = useRef(false);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < projects.length) {
      onSlideChange(index);
      isManualScroll.current = true;
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isManualScroll.current = false;
      }, 600);
    }
  }, [onSlideChange]);

  // Intersection Observer to track which slide is visible
  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5 && !isManualScroll.current) {
            onSlideChange(index);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [onSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentSlide < projects.length - 1) {
          goToSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, goToSlide]);

  return (
    <div className="w-full">
      {projects.map((project, index) => (
        <section
          key={project.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className="fullscreen-section"
          style={{
            opacity: currentSlide === index ? 1 : 0.5,
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="project-view">
            <div className="project-content">
              <h1
                className="text-giant text-white mb-8"
                style={{
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
                }}
              >
                {project.title}
              </h1>

              <div
                className="project-meta"
                style={{
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'transform 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s 0.2s ease',
                }}
              >
                <div className="meta-item">
                  <span className="meta-label">{t('media')}</span>
                  <span className="meta-value">{project.mediaKey}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">{t('typology')}</span>
                  <span className="meta-value">{t(project.typologyKey)}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">{t('devStatus')}</span>
                  <span className="meta-value">{t(project.statusKey)}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">{t('year')}</span>
                  <span className="meta-value">{project.year}</span>
                </div>
              </div>

              {/* Show hint when at last slide */}
              {index === projects.length - 1 && (
                <div
                  className="mt-12 text-mono text-white/30 text-xs tracking-widest animate-pulse"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                  }}
                >
                  {t('scroll')} ↓ {t('about')}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Slide Counter */}
      <div
        className="fixed bottom-8 right-8 z-50 text-mono text-white/50"
        style={{ mixBlendMode: 'difference' }}
      >
        <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(projects.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
