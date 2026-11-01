import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Zap, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/personal';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const RESUME_URL = personal.resumeUrl;

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'My Journey', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#portfolio', id: 'portfolio' },
    { name: 'Get In Touch', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Main Floating Glass Capsule (Fully Rounded Pill) */}
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10 ${
            isScrolled
              ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-white/70 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
              : 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          }`}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-sm shadow-orange-500/30 ring-2 ring-white/50 dark:ring-white/10">
              <Zap className="text-white" size={15} />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Abhi<span className="text-orange-500">shek</span>
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/60 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-orange-100/75 dark:bg-orange-950/50 rounded-full border border-orange-200/60 dark:border-orange-500/25 -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions: Dark Mode & Resume */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>

            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm flex items-center gap-1.5 shadow-sm shadow-orange-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={13} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Right Controls: Dark Mode + Hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown with Round Glass Pill Aesthetic */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-2.5 p-3.5 rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-white/70 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left py-2.5 px-4 rounded-full font-medium text-sm transition-colors duration-150 ${
                        isActive
                          ? 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50/80 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

