import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  es: {
    // Navigation
    name: 'RODRIGO PUERTA',
    selectedWorks: 'TRABAJOS SELECCIONADOS',
    about: 'SOBRE MÍ',
    location: 'MADRID, ES',
    available: 'DISPONIBLE PARA FREELANCE',
    
    // Projects metadata labels
    media: 'MEDIA',
    typology: 'TYPOLOGY',
    devStatus: 'DEV STATUS',
    year: 'YEAR',
    
    // Project statuses
    enDesarrollo: 'EN DESARROLLO',
    completado: 'COMPLETADO',
    appAndroid: 'APP ANDROID',
    eCommerce: 'E-COMMERCE',
    
    // About section
    aboutText: 'Desarrollador Frontend especializado en interfaces limpias, rápidas y experiencias digitales de alto impacto. Me apasiona transformar diseños en experiencias funcionales y optimizadas.',
    experiencia: 'Experiencia',
    formacion: 'Formación',
    stack: 'Stack',
    
    // Experience
    aegon: 'Aegon Seguros',
    aegonRole: 'Frontend, 2025-Actualmente',
    fractalia: 'Fractalia Systems',
    fractaliaRole: 'Soporte y Mantenimiento, 2023',
    
    // Education
    daw: 'DAW',
    dawSchool: 'IES Francisco de Goya',
    dam: 'DAM',
    damSchool: 'IES Tetuán de las Victorias',
    
    // Footer
    footerCta: "¿CONSTRUIMOS\nALGO JUNTOS?",
    hoverHint: 'Pasa el cursor para revelar contacto',
    
    // Scroll indicator
    scroll: 'SCROLL',
  },
  en: {
    // Navigation
    name: 'RODRIGO PUERTA',
    selectedWorks: 'Selected Works',
    about: 'About',
    location: 'MADRID, ES',
    available: 'AVAILABLE FOR FREELANCE',
    
    // Projects metadata labels
    media: 'MEDIA',
    typology: 'TYPOLOGY',
    devStatus: 'DEV STATUS',
    year: 'YEAR',
    
    // Project statuses
    enDesarrollo: 'IN DEVELOPMENT',
    completado: 'COMPLETED',
    appAndroid: 'ANDROID APP',
    eCommerce: 'E-COMMERCE',
    
    // About section
    aboutText: 'Frontend Developer specialized in clean interfaces, fast performance, and high-impact digital experiences. I am passionate about transforming designs into functional and optimized experiences.',
    experiencia: 'Experience',
    formacion: 'Education',
    stack: 'Stack',
    
    // Experience
    aegon: 'Aegon Insurance',
    aegonRole: 'Frontend, 2025-Present',
    fractalia: 'Fractalia Systems',
    fractaliaRole: 'Support & Maintenance, 2023',
    
    // Education
    daw: 'DAW',
    dawSchool: 'IES Francisco de Goya',
    dam: 'DAM',
    damSchool: 'IES Tetuán de las Victorias',
    
    // Footer
    footerCta: "LET'S CRAFT\nSOMETHING?",
    hoverHint: 'Hover to reveal contact',
    
    // Scroll indicator
    scroll: 'SCROLL',
  },
};

const LanguageContext = createContext({
  language: 'es',
  setLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  const t = useCallback((key) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
