import { useLanguage } from '../../../context/LanguageContext';
import { Page } from '../../album/Page';
import { Lines, Fade } from '../../album/Reveal';
import { useAlbum, groupContents } from '../../album/albumContext';
import './contents.css';

/**
 * 02 · Contenido: índice del álbum; cada fila salta a su página.
 * Solo salen las páginas marcadas con `inContents` en Album.jsx; los proyectos
 * se agrupan bajo un subtítulo "Proyectos".
 */
export function ContentsPage(props) {
  const { t } = useLanguage();
  const { pages, goTo } = useAlbum();

  const { before, projects, after } = groupContents(pages);

  let n = 0; // para escalonar la animación de entrada
  const row = (p, kind) => (
    <Fade as="li" key={p.id} delay={0.05 * n++}>
      <button type="button" className="toc-row" onClick={() => goTo(p.index)}>
        <span className="toc-name">{p.label ?? t(p.labelKey)}</span>
        <span className="toc-leader" aria-hidden="true" />
        {kind && <span className="toc-kind">{kind}</span>}
      </button>
    </Fade>
  );

  return (
    <Page {...props} className="index">
      <div className="split">
        <Lines lines={[t('indexTitle')]} className="display" />

        <ol className="toc">
          {before.map((p) => row(p))}

          {projects.length > 0 && (
            <li className="toc-group">
              <Fade as="p" className="toc-group-title" delay={0.05 * n++}>
                {t('projectsTitle')} <span>({projects.length})</span>
              </Fade>
              <ol>
                {projects.map((p) => row(p, `${t(p.project.typeKey)} · ${p.project.year}`))}
              </ol>
            </li>
          )}

          {after.map((p) => row(p))}
        </ol>
      </div>
    </Page>
  );
}
