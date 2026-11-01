import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github, ArrowRight, Sparkles, MapPin } from 'lucide-react';
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
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2200);
    }
    return () => clearTimeout(timeout);
  }, [displayText, currentTitle, currentIndex, titles.length]);

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) {
      const offset = 85;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 85;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Subtle levitation for floating badges
  const floatVariant = {
    animate: {
      y: [-4, 4, -4],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const floatVariantReverse = {
    animate: {
      y: [4, -4, 4],
      transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const techStack = [
    'Java',
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'React Native',
    'MongoDB',
    'Supabase',
    'Tailwind CSS',
    'PostgreSQL',
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-orange-50/25 via-white to-gray-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 sm:pt-32 pb-12 sm:pb-20">
      {/* Soft Pristine Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[900px] h-[340px] sm:h-[450px] bg-gradient-to-tr from-orange-400/12 via-amber-300/10 to-transparent dark:from-orange-500/10 dark:via-purple-500/5 dark:to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-orange-300/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-amber-300/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Aesthetic Dot Matrix Pattern Grid */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-center w-full max-w-full min-w-0">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 text-center md:text-left order-2 md:order-1 w-full max-w-full min-w-0"
          >
            {/* Unified Status Pill: Available for Work + Location in one clean badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-orange-200/50 dark:border-gray-800 shadow-2xs mb-5 text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Work</span>
              <span className="text-gray-300 dark:text-gray-700 font-light">•</span>
              <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <MapPin size={11} className="text-orange-500 shrink-0" />
                {personal.location}
              </span>
            </motion.div>

            {/* Name Heading with Clean Aesthetic Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.14] mb-4">
              Hello, I'm{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 font-black">
                {personal.name}
              </span>
            </h1>

            {/* Dynamic Animated Subtitle Chip - Clean tech style without underline */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 min-h-[2.2rem] flex-wrap">
              <span className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                Specialized in
              </span>
              <span className="inline-flex items-center text-xs sm:text-sm font-semibold font-mono px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200/70 dark:border-orange-800/50 shadow-2xs">
                <span>{displayText}</span>
                <span className="animate-pulse ml-0.5 text-orange-500 font-bold">|</span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 font-normal">
              {personal.bio}
            </p>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8">
              <motion.button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Connect</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-orange-500 text-gray-800 dark:text-gray-200 hover:text-orange-500 font-semibold transition-all text-sm sm:text-base bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xs cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
              </motion.button>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                {[
                  { icon: Github, href: personal.social.github, label: 'GitHub' },
                  { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
                  { icon: Instagram, href: personal.social.instagram, label: 'Instagram' },
                  { icon: Twitter, href: personal.social.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all border border-gray-200 dark:border-gray-700 shadow-2xs"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sleek Tech Stack Infinite Moving Marquee */}
            <div className="pt-2 flex items-center overflow-hidden w-full max-w-full min-w-0">
              {/* Infinite Moving Marquee Track */}
              <div className="relative overflow-hidden w-full min-w-0">
                {/* Subtle edge fades for seamless appearance */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 dark:from-gray-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee-ltr flex items-center gap-2">
                  {[...techStack, ...techStack].map((tech, idx) => (
                    <span
                      key={`${tech}-${idx}`}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/80 hover:border-orange-500/50 hover:text-orange-500 transition-colors shadow-2xs whitespace-nowrap shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean, Unobstructed Profile Photo with Balanced Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex justify-center order-1 md:order-2 w-full max-w-full min-w-0"
          >
            <div className="relative">
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400/20 via-amber-400/15 to-transparent rounded-full blur-2xl opacity-75 dark:opacity-40"></div>

              {/* Elegant Outer Ring Frame */}
              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-b from-white via-orange-50/40 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-[0_20px_50px_rgba(249,115,22,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200/60 dark:border-gray-800">
                {/* Profile Image Container */}
                <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-84 xl:h-84 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/Hero.png"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Instagram Badge at Bottom-Left Corner */}
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-lg shadow-black/5 border border-gray-100 dark:border-gray-800 flex items-center gap-2 sm:gap-2.5 z-20"
                variants={floatVariant}
                animate="animate"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                  <Instagram size={14} className="sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                    {personal.instagramFollowers}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium leading-none">Followers</div>
                </div>
              </motion.div>

              {/* Experience Companion Badge at Top-Right Corner */}
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-lg shadow-black/5 border border-gray-100 dark:border-gray-800 flex items-center gap-2 z-20"
                variants={floatVariantReverse}
                animate="animate"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                  <Sparkles size={14} className="sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                    {personal.stats.experience} Experience
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium leading-none">Production Ready</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
