import { useRef, useEffect, useState } from 'react';
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

export function ProjectViews({ onSlideChange }) {
  const { t } = useLanguage();
  const sectionRefs = useRef([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Intersection Observer to track which project is visible
  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            onSlideChange(index);
            setCurrentProjectIndex(index);
          } else if (entry.intersectionRatio < 0.3) {
            // When leaving the section, reset if it was the active one
            if (currentProjectIndex === index) {
              setCurrentProjectIndex(-1);
            }
          }
        },
        { threshold: [0.3, 0.5] }
      );
      
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [onSlideChange, currentProjectIndex]);

  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.id}
          id={index === 0 ? 'works' : undefined}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className={`h-screen h-dvh w-full flex items-center justify-center relative ${
            project.id === 1 
              ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
              : 'bg-gradient-to-br from-gray-950 via-zinc-900 to-gray-950'
          }`}
          style={{
            backgroundImage: project.id === 1 
              ? 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1544011343-494fe72e6bab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
              : 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center px-8">
            <h1 className="text-giant text-white mb-8">
              {project.title}
            </h1>

            <div className="project-meta">
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
          </div>
        </section>
      ))}
    </>
  );
}
