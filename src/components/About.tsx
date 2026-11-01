import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  X,
  Download,
  MapPin,
  Sparkles,
  Rocket,
  Users,
  ArrowRight,
  Send,
  Layers,
  Terminal,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Star,
  Activity,
  Code2
} from 'lucide-react';
import { personal } from '../data/personal';
import { skillsData } from '../data/skills';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Close modal on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSkill(null);
      }
    };
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSkill]);

  const closeModal = () => setSelectedSkill(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreStackChips = [
    { name: 'Java', color: 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200/70 dark:border-orange-500/30' },
    { name: 'React Native', color: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200/70 dark:border-cyan-500/30' },
    { name: 'Next.js', color: 'bg-gray-500/10 text-gray-800 dark:text-gray-200 border-gray-300/70 dark:border-gray-700/60' },
    { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200/70 dark:border-blue-500/30' },
    { name: 'Supabase', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-500/30' },
    { name: 'Node.js', color: 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-200/70 dark:border-green-500/30' },
    { name: 'Tailwind CSS', color: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-500/30' },
    { name: 'PostgreSQL', color: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-500/30' },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-orange-400/15 via-red-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-purple-400/15 via-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Aesthetic Dot Matrix Pattern Grid */}
      <div className="absolute inset-0 dot-matrix-bg opacity-[0.22] dark:opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <Sparkles size={14} className="text-orange-500 animate-pulse" />
              <span>Get to Know Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">
                Scalable Digital Reality
              </span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              Full Stack & Mobile Engineer passionate about building high-performance web applications, fluid mobile experiences, and dependable backend architectures.
            </p>
          </motion.div>

          {/* Main Profile Grid: Photo + Story Bento */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
            
            {/* Left Column: Modern Photo Frame (5 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 via-red-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden">
                
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-inner">
                  <img
                    src="/abhishek-about.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Status Badge in Photo */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for Projects</span>
                  </div>

                  {/* Glassmorphic Name Tag on Photo Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                    <p className="font-bold text-base sm:text-lg leading-snug">{personal.name}</p>
                    <p className="text-xs text-orange-200 font-medium">Software Developer • Full Stack & Mobile</p>
                  </div>
                </div>

                {/* Modern Experience & Projects Capsule Bar below image */}
                <div className="mt-3 sm:mt-4 p-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/60 dark:border-white/10 shadow-sm flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                      {personal.stats.experience} Years Experience
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-300 dark:text-gray-600">•</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400">
                    <span>{personal.stats.projects} Production Projects</span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Bio + Modern Bento Spec Dashboard + CTAs (7 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
                  Architecting resilient web platforms, fluid mobile apps, and scalable digital solutions.
                </h3>
                
                {/* Elevated bio paragraph with sleek accent line */}
                <div className="border-l-2 border-orange-500/60 dark:border-orange-500/40 pl-4 sm:pl-5 space-y-3.5 my-5">
                  {personal.about.map((para, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modern Bento Highlights Dashboard (Replaces the generic separate white boxes) */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-white/80 via-white/40 to-white/20 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-900/30 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-lg shadow-black/[0.02] space-y-4">
                
                {/* 1. Core Stack Pill Tray with branded live chips */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <Terminal size={14} className="text-orange-500" />
                      Core Engineering Stack
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/40 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production Stack
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {coreStackChips.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold border ${tech.color} backdrop-blur-sm transition-transform hover:scale-105 cursor-default shadow-xs`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Key Metrics & Working Base Stream */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  
                  {/* Metric: Shipped Projects */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-500/20 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-1">
                    <div className="flex items-center gap-1.5">
                      <Rocket size={15} className="text-orange-500 shrink-0" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Shipped</span>
                    </div>
                    <div className="text-right sm:text-left">
                      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">
                        {personal.stats.projects}
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 -mt-0.5">Production Systems</p>
                    </div>
                  </div>

                  {/* Metric: Developer Community */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-500/20 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-1">
                    <div className="flex items-center gap-1.5">
                      <Users size={15} className="text-purple-500 shrink-0" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Audience</span>
                    </div>
                    <div className="text-right sm:text-left">
                      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                        {personal.instagramFollowers}
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 -mt-0.5">Tech Network</p>
                    </div>
                  </div>

                  {/* Metric: Working Base */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-500/20 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-blue-500 shrink-0" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Based In</span>
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                        Gurugram, Haryana
                      </p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center sm:justify-start justify-end gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Open to Relocate
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={16} />
                  <span>Let's Connect</span>
                </motion.a>
              </div>

            </motion.div>
          </div>

          {/* Technical Skills Showcase */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-3">
                <Layers size={13} />
                <span>Expertise & Tooling</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                Technical Skills & Frameworks
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Click any category card to inspect in-depth proficiencies, experience levels, and tools.
              </p>
            </div>

            {/* 3 Categories Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((key) => {
                const category = skillsData[key];
                return (
                  <motion.div
                    key={key}
                    className="relative bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-7 border border-gray-100 dark:border-gray-700/80 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedSkill(key)}
                  >
                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Header with Icon and Title */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            <span>{category.icon}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                              {category.title}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {category.skills.length} core competencies
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Top 3 Skills preview with live bars */}
                      <div className="space-y-4 mb-6">
                        {category.skills.slice(0, 3).map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm">
                              <span className="font-semibold text-gray-700 dark:text-gray-200">
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                  {skill.level}
                                </span>
                                <span className="text-xs font-bold text-orange-500 dark:text-orange-400">
                                  {skill.percentage}%
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-700"
                                style={{ width: `${skill.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Additional skill pills preview */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {category.additional.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-orange-500">
                      <span>View Full Breakdown</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Redesigned Modern Skills Modal (Mobile + Desktop Optimized) */}
      <AnimatePresence>
        {selectedSkill && skillsData[selectedSkill] && (
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-5 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden relative"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header Bar */}
              <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-20 px-5 sm:px-8 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0 space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 bg-gradient-to-br ${skillsData[selectedSkill].color} rounded-2xl flex items-center justify-center text-white text-xl shadow-md shrink-0`}
                    >
                      <span>{skillsData[selectedSkill].icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {skillsData[selectedSkill].title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Proficiency metrics & production workflow breakdown
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block text-[11px] font-mono font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                      ESC
                    </span>
                    <button
                      onClick={closeModal}
                      aria-label="Close modal"
                      className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Interactive Category Switcher Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
                  {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((key) => {
                    const cat = skillsData[key];
                    const isActive = selectedSkill === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedSkill(key)}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1 overscroll-contain p-5 sm:p-7 md:p-8 space-y-6">
                {/* 2-Column Responsive Bento Grid of Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsData[selectedSkill].skills.map((skill, index) => {
                    const isExpert = skill.level === 'Expert';
                    const isAdvanced = skill.level === 'Advanced';
                    return (
                      <motion.div
                        key={skill.name}
                        className="group relative bg-gradient-to-br from-white to-gray-50/70 dark:from-gray-800/80 dark:to-gray-800/40 rounded-2xl p-4 sm:p-5 border border-gray-200/80 dark:border-gray-700/70 hover:border-orange-500/40 dark:hover:border-orange-500/40 shadow-xs hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div>
                          {/* Top Card Header */}
                          <div className="flex items-start justify-between gap-2 mb-2.5">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                                  {skill.name}
                                </h4>
                                <span
                                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                                    isExpert
                                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                                      : isAdvanced
                                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
                                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
                                  }`}
                                >
                                  {skill.level}
                                </span>
                              </div>
                            </div>

                            {/* Percentage Badge */}
                            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 font-mono text-xs sm:text-sm font-extrabold shrink-0 shadow-2xs">
                              <Sparkles size={11} className="text-orange-500" />
                              <span>{skill.percentage}%</span>
                            </div>
                          </div>

                          {/* Skill Description */}
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3.5 font-normal">
                            {skill.description}
                          </p>

                          {/* Capability Micro-Tags */}
                          {skill.tags && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {skill.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] sm:text-[11px] font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-md border border-gray-200/60 dark:border-gray-600/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Modern Segmented Gauge Track */}
                        <div>
                          <div className="flex justify-between items-center text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                            <span>Proficiency Track</span>
                            <span>{skill.level} Mastery</span>
                          </div>

                          <div className="w-full bg-gray-200/80 dark:bg-gray-700/70 h-2 rounded-full overflow-hidden p-[1px] relative">
                            {/* Segment indicators at 25%, 50%, 75% */}
                            <div className="absolute inset-0 flex justify-between px-1 pointer-events-none z-10">
                              <div className="w-px h-full bg-white/40 dark:bg-black/40" />
                              <div className="w-px h-full bg-white/40 dark:bg-black/40" />
                              <div className="w-px h-full bg-white/40 dark:bg-black/40" />
                            </div>

                            <motion.div
                              className="bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 h-full rounded-full shadow-xs"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 0.8, delay: 0.15 + index * 0.04 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional Ecosystem & Frameworks */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-3.5">
                    <Layers size={16} className="text-orange-500" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Adjacent Tools, Frameworks & Tooling Ecosystem
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData[selectedSkill].additional.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-medium shadow-2xs hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.03 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Modal Bottom Footer */}
              <div className="sticky bottom-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-3.5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium">
                    {skillsData[selectedSkill].skills.length} Core Proficiencies Active in Production
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  className="px-4 py-1.5 rounded-xl font-bold text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
