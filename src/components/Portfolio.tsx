import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  ExternalLink,
  Github,
  Search,
  Calendar,
  Users,
  Code,
  Star,
  X,
  Sparkles,
  CheckCircle2,
  Smartphone,
  Globe,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  RotateCcw,
  Award
} from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { personal } from '../data/personal';

const Portfolio: React.FC = () => {
  const { ref } = useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filterBarRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile App':
        return Smartphone;
      case 'Full Stack':
        return Layers;
      case 'Web Development':
        return Globe;
      default:
        return Sparkles;
    }
  };

  const handleFilterChange = (category: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (filter === category) return;

    if (event?.currentTarget) {
      event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }

    const bar = filterBarRef.current;
    const initialTop = bar ? bar.getBoundingClientRect().top : null;

    setFilter(category);

    if (initialTop !== null && bar) {
      const stabilize = () => {
        const currentTop = bar.getBoundingClientRect().top;
        const delta = currentTop - initialTop;
        if (Math.abs(delta) > 1) {
          window.scrollBy({ top: delta, behavior: 'instant' as ScrollBehavior });
        }
      };
      requestAnimationFrame(stabilize);
      setTimeout(stabilize, 30);
      setTimeout(stabilize, 80);
      setTimeout(stabilize, 180);
    }
  };

  const handleReset = () => {
    const bar = filterBarRef.current;
    const initialTop = bar ? bar.getBoundingClientRect().top : null;

    setFilter('All');
    setSearchTerm('');

    if (initialTop !== null && bar) {
      const stabilize = () => {
        const currentTop = bar.getBoundingClientRect().top;
        const delta = currentTop - initialTop;
        if (Math.abs(delta) > 1) {
          window.scrollBy({ top: delta, behavior: 'instant' as ScrollBehavior });
        }
      };
      requestAnimationFrame(stabilize);
      setTimeout(stabilize, 30);
      setTimeout(stabilize, 80);
    }
  };

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return projects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch = !term ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term)) ||
        (project.role && project.role.toLowerCase().includes(term)) ||
        (project.platform && project.platform.toLowerCase().includes(term));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  const stats = useMemo(() => [
    {
      label: "Projects Completed",
      value: `${projects.length}`,
      icon: Code,
      accent: "text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-200/80 dark:border-orange-800/40",
    },
    {
      label: "Years Experience",
      value: personal.stats.experience,
      icon: Calendar,
      accent: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/40",
    },
    {
      label: "Tech Ecosystem",
      value: "15+",
      icon: Cpu,
      accent: "text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200/80 dark:border-blue-800/40",
    },
    {
      label: "Certifications",
      value: "10+",
      icon: Award,
      accent: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200/80 dark:border-amber-800/40",
    }
  ], []);

  return (
    <section id="portfolio" className="scroll-mt-24 pt-20 sm:pt-28 pb-14 sm:pb-20 bg-gradient-to-b from-white via-orange-50/15 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden" ref={ref}>
      {/* Soft Pristine Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[900px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-orange-400/10 via-amber-300/10 to-transparent dark:from-orange-500/10 dark:via-purple-500/5 dark:to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-800/40 text-orange-600 dark:text-orange-400 inline-block mb-3.5 shadow-2xs">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3 leading-tight font-heading">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                Projects
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
              Explore my latest work showcasing web systems, scalable backends, and full-stack software solutions.
            </p>
          </div>

          {/* Modern Bento Stat Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-orange-500/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border ${stat.accent} transition-transform group-hover:scale-105 duration-300`}>
                  <stat.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white leading-tight font-heading">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Search and Filter Section */}
          <div ref={filterBarRef} className="scroll-mt-28 mb-10 sm:mb-12 space-y-4">
            <div className="flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between">

              {/* Category Filter Pills - Ultra-Aesthetic Glass Capsule Bar */}
              <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                {/* Edge fade masks for mobile scroll indication */}
                <div className="pointer-events-none absolute left-4 sm:left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-50/90 dark:from-gray-950/90 to-transparent z-10 md:hidden" />
                <div className="pointer-events-none absolute right-4 sm:right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-50/90 dark:from-gray-950/90 to-transparent z-10 md:hidden" />

                <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/80 shadow-xs overflow-x-auto no-scrollbar scroll-smooth">
                  {categories.map((category) => {
                    const isActive = filter === category;
                    const count = categoryCounts[category] || 0;
                    const CategoryIcon = getCategoryIcon(category);

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={(e) => handleFilterChange(category, e)}
                        className={`relative px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${isActive
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-700/50'
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeFilterPill"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-md shadow-orange-500/30 z-0"
                            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                          />
                        )}
                        <CategoryIcon
                          size={14}
                          className={`relative z-10 transition-colors ${isActive
                              ? 'text-white'
                              : 'text-orange-500/80 dark:text-orange-400/80'
                            }`}
                        />
                        <span className="relative z-10">{category}</span>
                        <span
                          className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold transition-colors ${isActive
                              ? 'bg-white/25 text-white'
                              : 'bg-gray-200/70 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400'
                            }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search Bar with Clear Button */}
              <div className="relative w-full md:w-80 lg:w-96 shrink-0 group">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={17} />
                <input
                  type="text"
                  placeholder="Search projects or tech (e.g. React)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-white/90 dark:bg-gray-800/90 dark:text-white rounded-2xl border border-gray-200/80 dark:border-gray-700/80 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all text-xs sm:text-sm shadow-xs placeholder:text-gray-400"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

            </div>

            {/* Filter Status & Reset Strip */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1 pt-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span>Showing</span>
                <span className="font-bold text-gray-900 dark:text-white px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60">
                  {filteredProjects.length}
                </span>
                <span>{filteredProjects.length === 1 ? 'project' : 'projects'}</span>
                {filter !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-semibold border border-orange-200/60 dark:border-orange-800/40">
                    {filter}
                  </span>
                )}
                {searchTerm && (
                  <span className="text-gray-600 dark:text-gray-300">
                    matching "<strong className="text-orange-600 dark:text-orange-400 font-bold">{searchTerm}</strong>"
                  </span>
                )}
              </div>

              {(filter !== 'All' || searchTerm) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 hover:bg-orange-100 dark:hover:bg-orange-900/40 border border-orange-200/70 dark:border-orange-800/50 transition-all cursor-pointer shadow-2xs group shrink-0"
                >
                  <RotateCcw size={12} className="group-hover:-rotate-90 transition-transform duration-300" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Enhanced Projects Grid with Layout Animation & Height Stabilization (Prevents Page Jumping) */}
          {filteredProjects.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[480px] sm:min-h-[550px] relative"
              style={{ overflowAnchor: 'none' }}
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout="position"
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className={`bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700/80 flex flex-col ${project.featured ? 'ring-2 ring-orange-500/60 ring-offset-2 dark:ring-offset-gray-900' : ''
                      }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image Thumbnail */}
                    <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.featured && (
                        <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-md">
                          ⭐ Featured
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                        <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center gap-1 shadow-sm">
                          <span>View Details</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-0.5 rounded-full border border-orange-200/60 dark:border-orange-900/40">
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{project.completionDate}</span>
                        </div>

                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-orange-500 transition-colors duration-200 line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3.5 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                          {project.technologies.slice(0, 3).map((tech: string) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 rounded-md border border-gray-200/60 dark:border-gray-600/60"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-[11px] font-semibold bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-md border border-orange-200/50 dark:border-orange-800/40">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                          <span className="flex items-center gap-1.5">
                            <Users size={13} className="text-gray-400" />
                            <span>{project.teamSize || 'Solo'}</span>
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform">
                            <span>Explore Details</span>
                            <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 min-h-[420px] flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-800/30 rounded-3xl border border-gray-100 dark:border-gray-800"
            >
              <div className="text-gray-400 text-6xl mb-4">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto mb-5">
                No matching projects for "{searchTerm}". Try clearing your search or switching categories.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/25 hover:bg-orange-600 transition-colors cursor-pointer"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-5 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header */}
              <div className="sticky top-0 z-30 px-5 sm:px-7 py-3.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200/70 dark:border-orange-500/30">
                    {selectedProject.category === 'Mobile App' ? (
                      <Smartphone size={13} className="text-orange-500" />
                    ) : (
                      <Globe size={13} className="text-orange-500" />
                    )}
                    <span>{selectedProject.category}</span>
                  </span>

                  {selectedProject.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white shadow-xs">
                      <Star size={11} className="fill-white" />
                      <span>Featured Project</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[11px] font-mono font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    ESC
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1 overscroll-contain">
                {/* Visual Showcase Frame */}
                <div className="relative w-full bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-gray-800">
                  {/* Ambient Blurred Background Aura */}
                  <img
                    src={selectedProject.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-125 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Showcase Mockup Window */}
                  <div className="relative z-10 w-full max-w-2xl bg-gray-900/90 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Mockup Titlebar */}
                    <div className="px-4 py-2 bg-gray-900/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-full bg-black/40 border border-white/5 text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                        <Globe size={11} className="text-gray-500" />
                        <span className="truncate max-w-[180px] sm:max-w-xs">
                          {selectedProject.liveUrl && selectedProject.liveUrl !== '#'
                            ? selectedProject.liveUrl.replace(/^https?:\/\//, '')
                            : `${selectedProject.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app`}
                        </span>
                      </div>
                      <div className="w-8" />
                    </div>

                    {/* Contained Screenshot Image */}
                    <div className="relative max-h-60 sm:max-h-72 md:max-h-80 w-full flex items-center justify-center p-3 bg-black/30">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="max-h-56 sm:max-h-64 md:max-h-72 w-auto object-contain rounded-lg drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 md:p-10 space-y-7">
                  {/* Header & Title Area */}
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-3 text-xs font-semibold">
                      {selectedProject.platform && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60">
                          <Layers size={13} className="text-orange-500" />
                          <span>{selectedProject.platform}</span>
                        </span>
                      )}
                      {selectedProject.role && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border border-orange-200/60 dark:border-orange-900/30">
                          <ShieldCheck size={13} />
                          <span>{selectedProject.role}</span>
                        </span>
                      )}
                      {selectedProject.completionDate && (
                        <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 ml-auto font-medium">
                          <Calendar size={13} className="text-orange-500" />
                          <span>{selectedProject.completionDate}</span>
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                      {selectedProject.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Modern Spec Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 sm:p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3 p-2">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
                        <Users size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                          Team Model
                        </span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {selectedProject.teamSize ? `${selectedProject.teamSize} Developer` : 'Solo Engineer'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-gray-200/60 dark:border-gray-700/60">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                        <Cpu size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                          Architecture
                        </span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {selectedProject.complexity || 'Advanced'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-gray-200/60 dark:border-gray-700/60">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                        <Code size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                          Stack Scope
                        </span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {selectedProject.technologies.length} Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights & Engineering Feats */}
                  {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <Sparkles size={15} className="text-orange-500" />
                        <span>Key Highlights & Engineering Solutions</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProject.highlights.map((hl, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gray-50/70 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/80 hover:border-orange-500/30 transition-colors"
                          >
                            <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-snug">
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies & Architecture Pills */}
                  <div className="space-y-3">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <Layers size={15} className="text-orange-500" />
                      <span>Technologies & Libraries</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-2xs hover:border-orange-500/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Action Footer */}
              <div className="sticky bottom-0 z-30 px-6 sm:px-8 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Ready</span>
                </div>

                <div className="flex items-center gap-3 ml-auto flex-wrap w-full sm:w-auto justify-end">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all flex-1 sm:flex-initial"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={15} />
                      <span>
                        {selectedProject.category === 'Mobile App' ? 'Open in Play Store' : 'Explore Live App'}
                      </span>
                      <ArrowUpRight size={14} className="opacity-70" />
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700">
                      Internal Demo
                    </span>
                  )}

                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' ? (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md border border-gray-700/60 transition-all flex-1 sm:flex-initial"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={15} />
                      <span>View Code</span>
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700">
                      Private Code
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;