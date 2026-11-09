import { useLanguage } from '../../../context/LanguageContext';
import { STACK } from '../../../data/stack';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import './tools.css';

/** 05 · Herramientas: stack en texto + fila de iconos. */
export function ToolsPage(props) {
  const { t } = useLanguage();
  const names = STACK.map((s) => s.name);

  return (
    <Page {...props} className="stack">
      <Lines lines={[t('stackTitle1'), t('stackTitle2')]} className="display" />
      <Fade as="p" className="body measure" delay={0.2}>
        <strong>{names.join(', ')}</strong> {t('stackText')}
      </Fade>

      <ul className="tool-row">
        {STACK.map(({ icon: Icon, name }, i) => (
          <Fade as="li" key={name} delay={0.3 + i * 0.04}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </Fade>
        ))}
      </ul>
    </Page>
  );
}
