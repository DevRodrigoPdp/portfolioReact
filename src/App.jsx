import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

import { LanguageProvider } from './context/LanguageContext';
import { Album } from './components/album/Album';

import './index.css';

// Solo hay una página: cualquier ruta antigua (p. ej. /projects/x) se normaliza a "/"
if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/' + window.location.hash);
}

function App() {
  return (
    <LanguageProvider>
      {/* LazyMotion + domAnimation: solo el núcleo de animación que usamos (bundle más pequeño).
          `strict` avisa si algún componente usa `motion.*` en vez de `m.*`. */}
      <LazyMotion features={domAnimation} strict>
        {/* Respeta prefers-reduced-motion en todas las animaciones */}
        <MotionConfig reducedMotion="user">
          <Album />
        </MotionConfig>
      </LazyMotion>
    </LanguageProvider>
  );
}

export default App;
