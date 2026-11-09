import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const translations = {
  es: {
    // Navigation
    name: 'RODRIGO PUERTA',
    selectedWorks: 'TRABAJOS SELECCIONADOS',
    about: 'SOBRE MÍ',
    location: 'MADRID, ES',
    available: 'DISPONIBLE PARA FREELANCE',
    
    // Projects metadata labels
    media: 'STACK',
    typology: 'TIPO',
    devStatus: 'ESTADO',
    year: 'AÑO',
    viewDemo: 'VER DEMO',
    viewRepo: 'VER REPOSITORIO',
    repo: 'REPOSITORIO',
    newTab: 'se abre en una pestaña nueva',
    
    // Project statuses
    enDesarrollo: 'EN DESARROLLO',
    completado: 'COMPLETADO',
    appAndroid: 'APP ANDROID',
    eCommerce: 'E-COMMERCE',
    catalogoWeb: 'CATÁLOGO WEB',
    plataformaWeb: 'PLATAFORMA WEB',
    
    // About section
    aboutText: 'Desarrollador Frontend especializado en interfaces limpias, rápidas y experiencias digitales de alto impacto. Me apasiona transformar diseños en experiencias funcionales y optimizadas.',
    experiencia: 'Experiencia',
    formacion: 'Formación',
    stack: 'Stack',
    
    // Experience
    aegon: 'Aegon Seguros',
    aegonRole: 'Frontend, 2026-Actualmente',
    fractalia: 'Fractalia Systems',
    fractaliaRole: 'Soporte y Mantenimiento, 2023',
    
    // Education
    daw: 'DAW',
    dawSchool: 'IES Francisco de Goya',
    dam: 'DAM',
    damSchool: 'IES Tetuán de las Victorias',
    
    // Footer
    footerCta: "¿CONSTRUIMOS\nALGO JUNTOS?",
    viewCv: 'Ver CV',
    contact: 'CONTACTO',
    contactLinks: 'Enlaces de contacto',
    viewProjects: 'VER PROYECTOS',
    // BORRADOR — pendiente de revisión de Rodrigo
    introRole: 'Frontend · Angular & React · IA',
    download: 'Descargar',
    openNewTab: 'Abrir en pestaña nueva',
    close: 'Cerrar',
    loadingCv: 'Cargando CV',
    menu: 'MENÚ',
    
    // Scroll indicator
    scroll: 'SCROLL',

    // ── Álbum ── (BORRADOR — textos pendientes de revisión de Rodrigo)
    pCover: 'Portada',
    pIndex: 'Contenido',
    pHello: 'Hola',
    pDo: 'Lo que hago',
    pStack: 'Herramientas',
    pWork: 'Trayectoria',
    pWorks: 'Trabajos',
    pContact: 'Contacto',
    edition: 'Edición 2026',
    coverTitle: 'Portfolio de desarrollo frontend',
    presentedBy: 'Por',
    indexTitle: 'Contenido.',
    projectWord: 'Proyecto',
    projectsTitle: 'Proyectos',
    helloTitle1: '¡Hola!',
    helloTitle2: 'Soy Rodrigo Puerta',
    helloLead: 'Desarrollador frontend en Madrid, a medio camino entre el diseño y el código.',
    doTitle1: 'Lo que hago.',
    doTitle2: '(y disfruto haciendo)',
    doText: 'Construyo interfaces que se sienten rápidas y claras: de la maqueta al último detalle, con componentes cuidados, accesibles y fáciles de mantener.',
    skills: ['Interfaces web', 'Maquetación', 'Accesibilidad', 'Rendimiento', 'Animación', 'Componentes', 'Apps Android', 'Integración IA'],
    stackTitle1: 'Herramientas',
    stackTitle2: 'que domino.',
    stackText: 'en el día a día, además de Git, Vite y Supabase para llevar cada proyecto de la idea a producción.',
    workTitle1: 'Dónde',
    workTitle2: 'he trabajado.',
    present: 'Actualidad',
    worksTitle: 'Trabajos seleccionados',
    worksText: 'Webs, e-commerce y una app Android. Pulsa cualquier proyecto para pasar a su página.',
    projectsWord: 'proyectos',
    contactTitle1: '¿Construimos',
    contactTitle2: 'algo juntos?',
    thanks: 'Gracias.',
    goTo: 'Ir a',
    skipToContent: 'Saltar al contenido',
  },
  en: {
    // Navigation
    name: 'RODRIGO PUERTA',
    selectedWorks: 'Selected Works',
    about: 'About',
    location: 'MADRID, ES',
    available: 'AVAILABLE FOR FREELANCE',
    
    // Projects metadata labels
    media: 'STACK',
    typology: 'TYPE',
    devStatus: 'STATUS',
    year: 'YEAR',
    viewDemo: 'VIEW DEMO',
    viewRepo: 'VIEW REPOSITORY',
    repo: 'REPOSITORY',
    newTab: 'opens in a new tab',
    
    // Project statuses
    enDesarrollo: 'IN DEVELOPMENT',
    completado: 'COMPLETED',
    appAndroid: 'ANDROID APP',
    eCommerce: 'E-COMMERCE',
    catalogoWeb: 'WEB CATALOG',
    plataformaWeb: 'WEB PLATFORM',
    
    // About section
    aboutText: 'Frontend Developer specialized in clean interfaces, fast performance, and high-impact digital experiences. I am passionate about transforming designs into functional and optimized experiences.',
    experiencia: 'Experience',
    formacion: 'Education',
    stack: 'Stack',
    
    // Experience
    aegon: 'Aegon Insurance',
    aegonRole: 'Frontend, 2026-Present',
    fractalia: 'Fractalia Systems',
    fractaliaRole: 'Support & Maintenance, 2023',
    
    // Education
    daw: 'DAW',
    dawSchool: 'IES Francisco de Goya',
    dam: 'DAM',
    damSchool: 'IES Tetuán de las Victorias',
    
    // Footer
    footerCta: "LET'S CRAFT\nSOMETHING?",
    viewCv: 'View CV',
    contact: 'CONTACT',
    contactLinks: 'Contact links',
    viewProjects: 'VIEW PROJECTS',
    // DRAFT — pending Rodrigo's review
    introRole: 'Frontend · Angular & React · AI',
    download: 'Download',
    openNewTab: 'Open in new tab',
    close: 'Close',
    loadingCv: 'Loading CV',
    menu: 'MENU',
    
    // Scroll indicator
    scroll: 'SCROLL',

    // ── Album ── (DRAFT — pending Rodrigo's review)
    pCover: 'Cover',
    pIndex: 'Contents',
    pHello: 'Hello',
    pDo: 'What I do',
    pStack: 'Tools',
    pWork: 'Experience',
    pWorks: 'Works',
    pContact: 'Contact',
    edition: '2026 Edition',
    coverTitle: 'Frontend development portfolio',
    presentedBy: 'By',
    indexTitle: 'Contents.',
    projectWord: 'Project',
    projectsTitle: 'Projects',
    helloTitle1: 'Hello!',
    helloTitle2: "I'm Rodrigo Puerta",
    helloLead: 'Frontend developer based in Madrid, halfway between design and code.',
    doTitle1: 'What I do.',
    doTitle2: '(and enjoy doing)',
    doText: 'I build interfaces that feel fast and clear: from the mockup to the last detail, with careful, accessible and maintainable components.',
    skills: ['Web interfaces', 'Layout', 'Accessibility', 'Performance', 'Motion', 'Components', 'Android apps', 'AI integration'],
    stackTitle1: 'Tools',
    stackTitle2: "I'm fluent in.",
    stackText: 'every day, plus Git, Vite and Supabase to take each project from idea to production.',
    workTitle1: 'Where',
    workTitle2: "I've worked.",
    present: 'Present',
    worksTitle: 'Selected works',
    worksText: 'Websites, e-commerce and an Android app. Tap any project to jump to its page.',
    projectsWord: 'projects',
    contactTitle1: 'Shall we build',
    contactTitle2: 'something together?',
    thanks: 'Thank you.',
    goTo: 'Go to',
    skipToContent: 'Skip to content',
  },
};

const LanguageContext = createContext({
  language: 'es',
  setLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  // Lectores de pantalla y traductores necesitan el idioma real del documento
  useEffect(() => { document.documentElement.lang = language; }, [language]);

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
