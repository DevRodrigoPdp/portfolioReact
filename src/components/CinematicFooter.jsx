import { useLanguage } from '../context/LanguageContext';
import { CvLink } from './CvPreview';
import { CONTACT } from '../data/contact';

export function CinematicFooter() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="cinematic-footer bg-[#0a0a0a]">
      <h2 className="footer-cta" style={{ whiteSpace: 'pre-line' }}>
        {t('footerCta')}
      </h2>

      {/* Contacto siempre visible (antes solo aparecía tras 0,8 s de hover) */}
      <div className="footer-links">
        <a href={`mailto:${CONTACT.email}`} className="footer-link footer-link-primary">
          {CONTACT.email}
        </a>
        <nav aria-label={t('contactLinks')} className="footer-links-row">
          <a href={CONTACT.linkedin} className="footer-link" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={CONTACT.github} className="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <CvLink className="footer-link">{t('viewCv')} ↗</CvLink>
        </nav>
      </div>
    </footer>
  );
}
