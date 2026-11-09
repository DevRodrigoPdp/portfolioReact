import { m } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { CONTACT } from '../../../data/contact';
import { Page } from '../../album/Page';
import { FitText, RegMark, ease } from '../../album/Reveal';
import './cover.css';

const NAME = 'Rodrigo Puerta';

/** 01 · Portada: tu nombre a todo el ancho, letra a letra. */
export function CoverPage(props) {
  const { t } = useLanguage();
  // Espacio duro: dentro de un inline-block un espacio normal se colapsa
  const chars = NAME.replace(' ', String.fromCharCode(160)).split('');

  return (
    <Page {...props} className="cover">
      <div className="cover-top">
        <RegMark />
        <p className="small">{t('edition')}</p>
        <p className="cover-title">{t('coverTitle')}</p>
      </div>

      <div className="cover-bottom">
        <div className="cover-meta">
          <p className="slash-list">
            <span>Frontend Developer</span><span>Angular &amp; React</span><span>IA</span>
          </p>
          <p className="inline-contact">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>{t('location')}</span>
          </p>
        </div>

        <h1 className="cover-word">
          {/* 7.15 = ancho de "Rodrigo Puerta" en em con Inter Tight 800 */}
          <FitText ratio={7.15}>
            {chars.map((ch, i) => (
              <span className="char" key={i} aria-hidden="true">
                <m.span
                  className="char-in"
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: i * 0.025 }}
                >
                  {ch}
                </m.span>
              </span>
            ))}
          </FitText>
          <span className="sr-only">{NAME}</span>
        </h1>
      </div>
    </Page>
  );
}
