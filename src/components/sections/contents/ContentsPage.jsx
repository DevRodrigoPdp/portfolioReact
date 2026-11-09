import { useLanguage } from '../../../context/LanguageContext';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import { useAlbum, pad } from '../../album/albumContext';
import './contents.css';

/** 02 · Contenido: índice del álbum; cada fila salta a su página. */
export function ContentsPage(props) {
  const { t } = useLanguage();
  const { pages, goTo } = useAlbum();

  return (
    <Page {...props} className="index">
      <div className="split">
        <Lines lines={[t('indexTitle')]} className="display" />

        <ol className="toc">
          {/* se omiten la portada y el propio índice */}
          {pages.map((p, i) => i < 2 ? null : (
            <Fade as="li" key={p.id} delay={0.04 * i}>
              <button type="button" className="toc-row" onClick={() => goTo(i)}>
                <span className="toc-num">{pad(i + 1)}</span>
                <span className="toc-name">{p.label ?? t(p.labelKey)}</span>
                <span className="toc-leader" aria-hidden="true" />
                <span className="toc-kind">{p.project ? `${t('projectWord')} · ${p.project.year}` : ''}</span>
              </button>
            </Fade>
          ))}
        </ol>
      </div>
    </Page>
  );
}
