import { Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import { LanguageProvider } from './context/LanguageContext';
import { useActiveSection } from './hooks/useActiveSection';

import { GlobalNav }        from './components/GlobalNav';
import { IntroHero }        from './components/IntroHero';
import { ProjectViews }     from './components/ProjectViews';
import { AboutPage }        from './components/AboutPage';
import { CinematicFooter }  from './components/CinematicFooter';
import { Cursor }           from './components/Cursor';
import { ScrollIndicator }  from './components/ScrollIndicator';
import { PageIndicator }    from './components/PageIndicator';

import './index.css';

const SECTIONS = ['intro', 'works', 'about', 'contact'];

function Home() {
  const [activeSection, setActiveSection] = useActiveSection(SECTIONS);
  const handleNavigate = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Cursor />
      <GlobalNav activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <IntroHero onNavigate={handleNavigate} />
        <ProjectViews />
        <AboutPage />
        <CinematicFooter />
      </main>
      {activeSection === 'intro' && <ScrollIndicator />}
      <PageIndicator sections={SECTIONS} activeSection={activeSection} onNavigate={handleNavigate} />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      {/* Respeta prefers-reduced-motion en todas las animaciones de Framer Motion */}
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route path="/"                element={<Home />} />
          {/* Ya no hay páginas de proyecto: cualquier otra ruta (p. ej. /projects/x antiguas) vuelve a la home */}
          <Route path="*"                element={<Navigate to="/" replace />} />
        </Routes>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
