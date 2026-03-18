import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import { useActiveSection } from './hooks/useActiveSection';

import { GlobalNav }        from './components/GlobalNav';
import { ProjectViews }     from './components/ProjectViews';
import { AboutPage }        from './components/AboutPage';
import { CinematicFooter }  from './components/CinematicFooter';
import { Cursor }           from './components/Cursor';
import { ScrollIndicator }  from './components/ScrollIndicator';
import { PageIndicator }    from './components/PageIndicator';
import { ProjectPage }      from './pages/ProjectPage';

import './index.css';

const SECTIONS = ['works', 'about', 'contact'];

function Home() {
  const [currentSlide, setCurrentSlide]       = useState(0);
  const [activeSection, setActiveSection]     = useActiveSection(SECTIONS);
  const handleNavigate = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Cursor />
      <GlobalNav activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <ProjectViews onSlideChange={setCurrentSlide} />
        <AboutPage />
        <CinematicFooter />
      </main>
      {activeSection === 'works' && currentSlide === 0 && <ScrollIndicator />}
      <PageIndicator sections={SECTIONS} activeSection={activeSection} onNavigate={handleNavigate} />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/projects/:slug"  element={<ProjectPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
