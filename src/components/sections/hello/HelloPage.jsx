import { useLanguage } from '../../../context/LanguageContext';
import { CONTACT } from '../../../data/contact';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import './hello.css';

/** 03 · Hola: presentación. Titular a todo el ancho y debajo dos columnas de texto. */
export function HelloPage(props) {
  const { t } = useLanguage();

  return (
    <Page {...props} className="hello">
      <div className="hello-grid">
        <Lines lines={[t('helloTitle1'), t('helloTitle2')]} className="display hello-title" />
        <Fade as="p" className="lead" delay={0.25}>{t('helloLead')}</Fade>
        <Fade as="p" className="body justify" delay={0.35}>{t('aboutText')}</Fade>
      </div>

      <Fade className="contact-row" delay={0.4}>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <span><i className="dot" aria-hidden="true" />{t('available')}</span>
        <span>{t('location')}</span>
      </Fade>
    </Page>
  );
}
