import { createContext, useContext } from 'react';

/** Estado compartido del álbum: lista de páginas, navegación y modo de apilado. */
export const AlbumContext = createContext(null);

export const useAlbum = () => useContext(AlbumContext);

/** 1 → "01" */
export const pad = (n) => String(n).padStart(2, '0');

/**
 * Páginas del índice (las marcadas con `inContents`), repartidas en:
 * las de antes de los proyectos, los proyectos y las de después.
 * Cada entrada conserva `index`, su posición real en el álbum (para goTo).
 * La usan la página "Contenido" y el menú móvil.
 */
export function groupContents(pages) {
  const entries = pages.map((p, i) => ({ ...p, index: i })).filter((p) => p.inContents);
  const projects = entries.filter((p) => p.project);
  const firstProject = projects[0]?.index ?? Infinity;
  return {
    before: entries.filter((p) => !p.project && p.index < firstProject),
    projects,
    after: entries.filter((p) => !p.project && p.index > firstProject),
  };
}
