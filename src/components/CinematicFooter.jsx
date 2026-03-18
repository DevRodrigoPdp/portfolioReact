import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function CinematicFooter() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const { t } = useLanguage();

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 800); // 800ms delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  return (
    <footer
      id="contact"
      className="cinematic-footer bg-[#0a0a0a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Giant CTA Text */}
      <div className={`footer-cta ${isHovered ? 'hidden' : ''}`} style={{ whiteSpace: 'pre-line' }}>
        {t('footerCta')}
      </div>

      {/* Revealed Content on Hover */}
      <div className={`footer-reveal ${isHovered ? 'visible' : ''}`}>
        <a
          href="mailto:rpuertadelpozo@gmail.com"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          rpuertadelpozo@gmail.com
        </a>
        <a
          href="https://github.com/DevRodrigoPdp"
          className="footer-link text-white/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/DevRodrigoPdp
        </a>
      </div>

      {/* Always visible contact info (subtle) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-mono text-white/40 text-xs tracking-widest mb-2">
          {t('contact')}
        </div>
        <a
          href="mailto:rpuertadelpozo@gmail.com"
          className="text-white/60 hover:text-white transition-colors text-sm"
        >
          rpuertadelpozo@gmail.com
        </a>
      </div>

      {/* Hover Hint */}
      <div className="footer-hint" style={{ opacity: isHovered ? 0 : 1 }}>
        {t('hoverHint')}
      </div>
    </footer>
  );
}
