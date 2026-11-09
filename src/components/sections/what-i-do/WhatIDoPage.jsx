import { useLanguage } from '../../../context/LanguageContext';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import './what-i-do.css';

/** 04 · Lo que hago: titular, texto y lista de habilidades. */
export function WhatIDoPage(props) {
  const { t } = useLanguage();
  const skills = t('skills');

  return (
    <Page {...props} className="do">
      <Lines lines={[t('doTitle1'), t('doTitle2')]} className="display" />
      <Fade as="p" className="body measure" delay={0.2}>{t('doText')}</Fade>

      <ul className="skills">
        {skills.map((s, i) => (
          <Fade as="li" key={s} delay={0.3 + i * 0.05}>{s}</Fade>
        ))}
      </ul>
    </Page>
  );
}
