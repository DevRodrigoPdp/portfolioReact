import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

/* ── Lightbox ── */
function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '2rem', cursor: 'zoom-out',
        }}
      >
        <motion.img
          src={img.src}
          alt={img.caption}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw', maxHeight: '85vh',
            objectFit: 'contain', cursor: 'default',
          }}
        />
        {img.caption && (
          <p className="text-mono" style={{
            marginTop: '1.25rem', fontSize: '0.6rem',
            color: 'rgba(255,255,240,0.35)', letterSpacing: '0.1em',
          }}>
            {img.caption}
          </p>
        )}
        <button
          onClick={onClose}
          className="text-mono"
          style={{
            position: 'absolute', top: '1.5rem', right: '2rem',
            fontSize: '0.6rem', color: 'rgba(255,255,240,0.4)',
            letterSpacing: '0.15em', background: 'none',
            border: 'none', cursor: 'pointer',
          }}
        >
          ESC / CERRAR
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── ImageFigure ── */
function ImageFigure({ img }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div
          onClick={() => setOpen(true)}
          style={{ overflow: 'hidden', background: '#0f0f0f', cursor: 'zoom-in' }}
        >
          <motion.img
            src={img.src}
            alt={img.caption}
            style={{ width: '100%', objectFit: 'cover', display: 'block' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease }}
          />
        </div>
        {img.caption && (
          <figcaption className="text-mono" style={{ fontSize: '0.58rem', color: 'rgba(255,255,240,0.25)', letterSpacing: '0.1em' }}>
            {img.caption}
          </figcaption>
        )}
      </figure>

      {open && <Lightbox img={img} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ── Helpers ── */
function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span className="text-mono" style={{ fontSize: '0.55rem', color: 'rgba(255,255,240,0.2)', fontVariantNumeric: 'tabular-nums' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,240,0.1)' }} />
      <span className="text-mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,240,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        {title}
      </span>
    </div>
  );
}

/* ── Tipos de sección ── */
function SectionSingle({ section, index }) {
  return (
    <Reveal>
      <div className="case-study-section">
        <SectionLabel index={index} title={section.title} />
        <div className="cs-grid-single">
          <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,240,0.82)', fontWeight: 300 }}>
            {section.body}
          </p>
          <ImageFigure img={section.images[0]} />
        </div>
      </div>
    </Reveal>
  );
}

function SectionDouble({ section, index }) {
  return (
    <Reveal>
      <div className="case-study-section">
        <SectionLabel index={index} title={section.title} />
        <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,240,0.82)', fontWeight: 300, marginBottom: '2.5rem' }}>
          {section.body}
        </p>
        <div className="cs-grid-double">
          {section.images.map((img, i) => <ImageFigure key={i} img={img} />)}
        </div>
      </div>
    </Reveal>
  );
}

function SectionText({ section, index }) {
  return (
    <Reveal>
      <div className="case-study-section">
        <SectionLabel index={index} title={section.title} />
        <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,240,0.82)', fontWeight: 300 }}>
          {section.body}
        </p>
      </div>
    </Reveal>
  );
}

function SectionFicha({ section, index }) {
  return (
    <Reveal>
      <div className="case-study-section">
        <SectionLabel index={index} title={section.title} />
        <dl className="cs-grid-ficha">
          {section.ficha.map((item) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,240,0.08)', padding: '1rem 0' }}>
              <dt className="text-mono" style={{ fontSize: '0.58rem', color: 'rgba(255,255,240,0.25)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                {item.label}
              </dt>
              <dd className="text-mono" style={{ fontSize: '0.68rem', color: 'rgba(255,255,240,0.55)', letterSpacing: '0.05em' }}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

function Section({ section, index }) {
  if (section.ficha)                return <SectionFicha  section={section} index={index} />;
  if (section.images?.length >= 2)  return <SectionDouble section={section} index={index} />;
  if (section.images?.length === 1) return <SectionSingle section={section} index={index} />;
  return                                   <SectionText   section={section} index={index} />;
}

/* ── Componente principal ── */
export const CaseStudy = ({ project }) => (
  <div className="case-study-container">
    {project.sections?.map((section, i) => (
      <Section key={i} section={section} index={i} />
    ))}

    {project.link && (
      <Reveal>
        <div style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,240,0.1)' }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mono"
            style={{ fontSize: '0.63rem', color: 'rgba(255,255,240,0.35)', letterSpacing: '0.15em', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,240,0.8)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,240,0.35)'}
          >
            VER REPOSITORIO →
          </a>
        </div>
      </Reveal>
    )}
  </div>
);
