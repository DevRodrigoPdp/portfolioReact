import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { CaseStudy } from '../components/CaseStudy';


const ease = [0.16, 1, 0.3, 1];

function MetaItem({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <span className="text-mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,240,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {label}
      </span>
      <span className="text-mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,240,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {value}
      </span>
    </div>
  );
}

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
        <div className="hero-title-wrapper">
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
          className="project-meta-wrapper"
        >
          <div className="project-meta-bar">
            <MetaItem label="Stack" value={project.technologies.map((t) => t.name).join(' · ')} />
            <MetaItem label="Año"   value={project.year} />
            <MetaItem label="Estado" value={project.status} />
            <MetaItem label="Tipo"  value={project.subtitle} />
          </div>
        </motion.div>
      </section>

      {/* ── CASE STUDY ── */}
      <CaseStudy project={project} />

    </div>
  );
};
