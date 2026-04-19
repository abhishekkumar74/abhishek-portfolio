import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { personal } from '../data/personal';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = personal.titles;
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    let timeout: number;
    if (displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, currentTitle, currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingVariants = {
    animate: { y: [0, -20, 0], rotate: [0, 5, -5, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
  };
  const floatingVariants2 = {
    animate: { y: [0, -15, 0], rotate: [0, -3, 3, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }
  };
  const floatingVariants3 = {
    animate: { y: [0, -25, 0], rotate: [0, 8, -8, 0], transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 } }
  };
  const floatingVariants4 = {
    animate: { y: [0, -25, 0], rotate: [0, 8, -8, 0], transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20">
      {/* Gradient Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-2xl"></div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 right-4 sm:right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants} animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Ai</span>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-8 sm:right-1/6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants2} animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Ps</span>
      </motion.div>
      <motion.div
        className="absolute top-1/5 left-6 sm:left-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-black rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants4} animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Git</span>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-6 sm:right-1/5 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
        variants={floatingVariants3} animate="animate"
      >
        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm"></div>
        </div>
      </motion.div>
      <motion.div
        className="hidden sm:block absolute top-1/2 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-md"
        animate={{ y: [0, -10, 0], x: [0, 5, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
      ></motion.div>
      <motion.div
        className="hidden sm:block absolute bottom-1/4 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-md"
        animate={{ y: [0, -15, 0], x: [0, -8, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 } }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              className="text-orange-500 text-base sm:text-lg font-medium mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              {personal.name}
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 min-h-[2rem] sm:min-h-[2.5rem]"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            >
              A <span className="text-green-500 font-semibold">{displayText}</span>
              <span className="animate-pulse">| From <span className="text-purple-500 font-semibold">{personal.location}</span></span>
            </motion.div>

            <motion.p
              className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              {personal.bio}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToAbout}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                <motion.a href={personal.social.github} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a href={personal.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a href={personal.social.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a href={personal.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-purple-200 rounded-full opacity-20"></div>
                <img src="/Hero.png" alt="Profile" className="relative w-full h-full object-cover rounded-full shadow-2xl border-2 sm:border-4 border-white dark:border-gray-700" />
              </div>
              {/* Instagram 50K badge */}
              <motion.div
                className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2 border border-pink-100 dark:border-pink-900/40"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white leading-none">{personal.instagramFollowers}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], transition: { duration: 2, repeat: Infinity } }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"
                animate={{ rotate: [0, 360], transition: { duration: 8, repeat: Infinity, ease: 'linear' } }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
        animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
