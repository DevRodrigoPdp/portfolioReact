import { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publishedProjects as projects } from '../data/data';

export function ProjectViews({ onSlideChange }) {
  const { t } = useLanguage();
  const sectionRefs = useRef([]);
  // Ref para no recrear los observers si cambia la identidad del callback
  const onSlideChangeRef = useRef(onSlideChange);
  useEffect(() => { onSlideChangeRef.current = onSlideChange; }, [onSlideChange]);

  // Un único IntersectionObserver para todas las secciones, creado una sola vez
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) onSlideChangeRef.current?.(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {projects.map((project, index) => {
        // Destino principal: la demo si existe; si no, el repositorio
        const href = project.demo ?? project.repo;
        const ctaLabel = project.demo ? t('viewDemo') : t('viewRepo');
        return (
        <section
          key={project.slug}
          id={index === 0 ? 'works' : undefined}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className="fullscreen-section project-slide"
        >
          {project.cover && (
            <img
              src={project.cover}
              alt=""
              aria-hidden="true"
              className="project-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          )}
          <div className="project-scrim" aria-hidden="true" />

          <div className="project-slide-content text-center px-8">
            <h2 className="text-giant text-white mb-8">
              <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.title}
                <span className="sr-only">, {ctaLabel} ({t('newTab')})</span>
              </a>
            </h2>

            <dl className="project-meta">
              <div className="meta-item">
                <dt className="meta-label">{t('media')}</dt>
                <dd className="meta-value">{project.stackLabel}</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">{t('typology')}</dt>
                <dd className="meta-value">{t(project.typeKey)}</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">{t('devStatus')}</dt>
                <dd className="meta-value">{t(project.statusKey)}</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">{t('year')}</dt>
                <dd className="meta-value">{project.year}</dd>
              </div>
            </dl>

            <div className="project-actions">
              <span className="project-cta text-mono" aria-hidden="true">
                {ctaLabel} <span className="project-cta-arrow">↗</span>
              </span>
              {project.demo && project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-repo-link text-mono"
                >
                  {t('repo')} ↗<span className="sr-only"> {project.title} ({t('newTab')})</span>
                </a>
              )}
            </div>
          </div>
        </section>
        );
      })}
    </>
  );
}
