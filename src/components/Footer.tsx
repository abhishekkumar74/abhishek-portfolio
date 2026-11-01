import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  ArrowUp,
  ArrowUpRight,
  Copy,
  Check,
  Zap,
  Heart,
  Sparkles,
  Clock,
  Download,
} from 'lucide-react';
import { personal } from '../data/personal';

const RESUME_URL = personal.resumeUrl;

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#experience' },
    { name: 'Featured Projects', href: '#portfolio' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: personal.social.github,
      icon: Github,
      handle: '@abhishekkumar74',
    },
    {
      name: 'LinkedIn',
      href: personal.social.linkedin,
      icon: Linkedin,
      handle: 'Abhishek Kumar',
    },
    {
      name: 'Instagram',
      href: personal.social.instagram,
      icon: Instagram,
      handle: '@abhishekr.74',
      badge: '51K+',
    },
    {
      name: 'X (Twitter)',
      href: personal.social.twitter,
      icon: Twitter,
      handle: '@Abhishek87098',
    },
    {
      name: 'YouTube',
      href: personal.social.youtube,
      icon: Youtube,
      handle: '@Abhishek-world',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900/90 dark:to-gray-950 text-gray-800 dark:text-gray-200 border-t border-gray-200/80 dark:border-white/10 pt-10 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-5 w-80 sm:w-96 h-80 sm:h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Modern Call to Action / Collaboration Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 mb-10 sm:mb-16 overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent dark:from-orange-500/15 dark:via-red-500/10 dark:to-transparent border border-orange-200/60 dark:border-orange-500/20 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(249,115,22,0.12)]"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -right-24 -top-24 w-72 sm:w-80 h-72 sm:h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl space-y-2.5 sm:space-y-3">
              {/* Responsive Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="hidden sm:inline">Open for Opportunities · Full-time & Freelance</span>
                <span className="sm:hidden">Available for Opportunities</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Let's Build Something <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Extraordinary</span> Together
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Have a new venture in mind, need scalable full-stack or mobile architecture, or just want to discuss innovative ideas? My inbox is always open.
              </p>
            </div>

            {/* Mobile Stacked Buttons / Desktop Inline Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={15} />
              </motion.button>

              <motion.button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-gray-500 dark:text-gray-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>

              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm border border-gray-200 dark:border-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                title="View Resume"
              >
                <Download size={14} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-8 lg:gap-8 pb-10 sm:pb-12">
          {/* Brand Identity & Summary (5 cols on lg, full on mobile, 2 cols on tablet) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-3.5">
            <motion.div
              className="flex items-center gap-2.5 cursor-pointer w-fit"
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-md shadow-orange-500/25 ring-2 ring-white/60 dark:ring-white/10">
                <Zap className="text-white" size={16} />
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Abhi<span className="text-orange-500">shek</span>
                </span>
              </div>
            </motion.div>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Full Stack & Mobile Engineer dedicated to building polished, high-performance web systems and mobile experiences with clean architecture.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-white/10">
                <MapPin size={11} className="text-orange-500" />
                Gurugram, Haryana, India
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-white/10">
                <Clock size={11} className="text-orange-500" />
                IST (UTC+5:30)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <Sparkles size={11} />
                51K+ Dev Community
              </span>
            </div>
          </div>

          {/* Quick Navigation Links: 2-column grid on mobile! */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover:bg-orange-500 group-hover:scale-125 transition-all" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="col-span-1 lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">
              Connect & Follow
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 bg-gray-50/70 sm:bg-transparent dark:bg-white/[0.02] sm:dark:bg-transparent hover:bg-orange-50/60 dark:hover:bg-white/5 border border-gray-100 sm:border-transparent dark:border-white/5 hover:border-orange-200/50 dark:hover:border-white/10 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-orange-500">
                        <Icon size={13} />
                      </div>
                      <span>{social.name}</span>
                    </div>

                    {social.badge ? (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xs">
                        {social.badge}
                      </span>
                    ) : (
                      <ArrowUpRight size={13} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Direct Reach & Response Time */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">
              Direct Contact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="block p-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 hover:border-orange-500/40 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-all group"
              >
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 mb-1">
                  <Mail size={12} className="text-orange-500" />
                  <span>Send an Email</span>
                </div>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 break-all group-hover:text-orange-500 transition-colors">
                  {personal.email}
                </span>
              </a>

              <div className="p-3 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs">Fast Turnaround</span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                  Typical response within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar: flex-col-reverse on mobile for effortless Back to Top access */}
        <div className="pt-6 sm:pt-8 mt-2 sm:mt-4 border-t border-gray-200/80 dark:border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left space-y-1">
            <p>
              © {currentYear} Abhishek Kumar. All rights reserved.
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-1 text-[11px]">
              Crafted with <Heart size={12} className="text-red-500 fill-red-500 inline" /> using React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Interactive Back to Top Pill Button */}
          <motion.button
            onClick={scrollToTop}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-full text-xs font-semibold bg-white dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-orange-500 dark:hover:bg-orange-500 border border-gray-200 dark:border-white/10 shadow-sm transition-all duration-300"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <ArrowUp size={11} className="transition-transform group-hover:-translate-y-0.5" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;