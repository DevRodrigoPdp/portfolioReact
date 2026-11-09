import { createContext, useContext } from 'react';

/** Estado compartido del álbum: lista de páginas, navegación y modo de apilado. */
export const AlbumContext = createContext(null);

export const useAlbum = () => useContext(AlbumContext);

/** 1 → "01" */
export const pad = (n) => String(n).padStart(2, '0');
