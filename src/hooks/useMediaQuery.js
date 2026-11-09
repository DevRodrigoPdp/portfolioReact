import { useSyncExternalStore } from 'react';

/** true mientras la media query se cumpla; se actualiza al cambiar el tamaño o las preferencias. */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
