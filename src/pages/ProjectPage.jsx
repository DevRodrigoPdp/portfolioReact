import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/data';


const ease = [0.16, 1, 0.3, 1];

export const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-6">
        <p className="text-mono text-[#fffff0]/40">Proyecto no encontrado</p>
        <Link to="/" className="text-mono text-[#fffff0] hover:opacity-60 transition-opacity">
          ← Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-[#fffff0]">

      {/* Back */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="nav-corner nav-corner-tl z-[200]"
      >
        <Link to="/" className="nav-link text-mono text-[0.65rem] flex items-center gap-2">
          ← Back
        </Link>
      </motion.div>

      {/* ── HERO ── */}
      <section className="fullscreen-section">
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-mono text-[0.65rem] text-[#fffff0]/40 block mb-6"
          >
            {project.subtitle}
          </motion.span>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-giant"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>

        {/* Meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="absolute bottom-10 left-0 right-0 px-8 md:px-16"
        >
          <div className="project-meta justify-center gap-16 border-t border-[#fffff0]/10 pt-6">
            <div className="meta-item">
              <span className="meta-label">Stack</span>
              <span className="meta-value">{project.technologies.map((t) => t.name).join(' · ')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Año</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Estado</span>
              <span className="meta-value">{project.status}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CASE STUDY ── */}
      <CaseStudy project={project} />

    </div>
  );
};
