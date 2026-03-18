import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export function GlobalNav({ activeSection, onNavigate }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Component mounted
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      {/* Top Left - Logo */}
      <div
        className="nav-corner nav-corner-tl animate-fade-in-down hidden lg:block"
        style={{ animationDelay: '0ms' }}
      >
        <span className="text-mono text-white font-semibold tracking-widest">
          {t('name')}
        </span>
      </div>

      {/* Top Right - Desktop Navigation */}
      <div
        className="nav-corner nav-corner-tr hidden lg:flex items-center gap-8"
        style={{ animationDelay: '100ms' }}
      >
        <button
          onClick={() => onNavigate('works')}
          className={`text-mono nav-link animate-fade-in-down relative px-2 py-1 transition-all ${
            activeSection === 'works'
              ? 'text-white font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
              : 'text-white/60 hover:text-white'
          }`}
          style={{ animationDelay: '100ms' }}
        >
          {t('selectedWorks')}
        </button>
        
        <button
          onClick={() => onNavigate('about')}
          className={`text-mono nav-link animate-fade-in-down relative px-2 py-1 transition-all ${
            activeSection === 'about'
              ? 'text-white font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
              : 'text-white/60 hover:text-white'
          }`}
          style={{ animationDelay: '150ms' }}
        >
          {t('about')}
        </button>
        
        <button
          onClick={toggleLanguage}
          className="text-mono nav-link animate-fade-in-down flex items-center gap-1"
          style={{ animationDelay: '200ms' }}
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <span className={language === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
          <span className="text-white/30">/</span>
          <span className={language === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
        </button>
      </div>

      {/* Bottom corners - Desktop only */}
      <div
        className="nav-corner nav-corner-bl hidden lg:block animate-fade-in-up"
        style={{ animationDelay: '200ms' }}
      >
        <span className="text-mono text-white/50">
          {t('location')}
        </span>
      </div>

      <div
        className="nav-corner nav-corner-br hidden lg:block animate-fade-in-up"
        style={{ animationDelay: '300ms' }}
      >
        <span className="text-mono text-white/50 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {t('available')}
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-6 right-6 z-50 text-mono text-white font-bold tracking-widest text-sm hover:text-white/80 transition-colors"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Premium Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 lg:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-12 text-center">
                <motion.button
                  onClick={() => handleNavigate('works')}
                  className={`text-white font-black tracking-tight leading-none transition-all ${
                    activeSection === 'works'
                      ? 'opacity-100'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)' }}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  {t('selectedWorks')}
                </motion.button>

                <motion.button
                  onClick={() => handleNavigate('about')}
                  className={`text-white font-black tracking-tight leading-none transition-all ${
                    activeSection === 'about'
                      ? 'opacity-100'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)' }}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  {t('about')}
                </motion.button>

                <motion.button
                  onClick={toggleLanguage}
                  className="text-white font-bold tracking-widest transition-all opacity-60 hover:opacity-100"
                  style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <span className={language === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
                  <span className="mx-2 text-white/30">/</span>
                  <span className={language === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
