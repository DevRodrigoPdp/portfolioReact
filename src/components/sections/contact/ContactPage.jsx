import { useLanguage } from '../../../context/LanguageContext';
import { CONTACT } from '../../../data/contact';
import { CvLink } from '../../CvPreview';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import './contact.css';

/** Contraportada (negra): llamada a la acción, email y enlaces. */
export function ContactPage(props) {
  const { t } = useLanguage();

  return (
    <Page {...props} tone="ink" className="contact">
      <Lines lines={[t('contactTitle1'), t('contactTitle2')]} className="display contact-title" />

      <Fade className="contact-main" delay={0.3}>
        <a className="contact-mail" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <nav className="contact-links" aria-label={t('contactLinks')}>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <CvLink>{t('viewCv')} ↗</CvLink>
        </nav>
      </Fade>

      <p className="contact-thanks" aria-hidden="true">{t('thanks')}</p>
    </Page>
  );
}
