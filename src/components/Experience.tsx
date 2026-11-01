import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { workExperience, education } from '../data/experience';
import { certificates } from '../data/certificates';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Building2,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/20 to-white dark:from-gray-950 dark:via-gray-900/60 dark:to-gray-950 overflow-hidden"
      ref={ref}
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>

          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14 sm:mb-18">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-800/40 text-orange-600 dark:text-orange-400 mb-4 shadow-2xs">
              <Sparkles size={13} className="text-orange-500" />
              My Journey & Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
              Experience &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500">
                Education
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real-world systems I've engineered, continuous academic growth, and industry certifications.
            </p>
          </motion.div>

          {/* Experience & Education Dual Columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Column 1: Projects & Work */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/20 ring-2 ring-white/60 dark:ring-white/10">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Projects & Experience
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Production platforms & system architecture</p>
                </div>
              </div>

              <div className="space-y-6">
                {workExperience.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-8 pb-8 border-l-2 border-orange-200/70 dark:border-orange-900/50 last:border-l-0 last:pb-0 group"
                    variants={itemVariants}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full ring-4 ring-orange-100 dark:ring-orange-950/60 shadow-xs group-hover:scale-125 transition-transform" />

                    {/* Timeline Card */}
                    <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-orange-300/60 dark:hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-orange-600 dark:text-orange-400 text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/40 px-3 py-1 rounded-full">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/40 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Active Build
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                        {exp.title}
                      </h4>

                      <div className="flex items-center gap-1.5 text-orange-500 font-semibold text-xs sm:text-sm mb-3">
                        <Building2 size={13} />
                        <span>{exp.company}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm font-normal">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md shadow-blue-500/20 ring-2 ring-white/60 dark:ring-white/10">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Academic Background
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Computer Science & analytical foundation</p>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200/70 dark:border-blue-900/50 last:border-l-0 last:pb-0 group"
                    variants={itemVariants}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full ring-4 ring-blue-100 dark:ring-blue-950/60 shadow-xs group-hover:scale-125 transition-transform" />

                    {/* Timeline Card */}
                    <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-300/60 dark:hover:border-blue-500/30 transition-all duration-300">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-800/40 px-3 py-1 rounded-full mb-2.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>

                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                        {exp.title}
                      </h4>

                      <p className="text-blue-500 font-semibold text-xs sm:text-sm mb-3">
                        {exp.company}
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm font-normal">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ======================================================== */}
          {/* Modern Certificates Section */}
          {/* ======================================================== */}
          <motion.div variants={itemVariants} className="mt-16 sm:mt-20 pt-10 border-t border-gray-200/80 dark:border-white/10">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md shadow-purple-500/20 ring-2 ring-white/60 dark:ring-white/10">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Verified Certifications & Simulations
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Industry-recognized programs, coursework, and technical simulations
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 px-3 py-1.5 rounded-full w-fit">
                <CheckCircle2 size={14} />
                <span>6 Industry Credentials</span>
              </div>
            </div>

            {/* Certificate Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {certificates.map((cert) => {
                const hasLink = Boolean(cert.credentialUrl && cert.credentialUrl.trim() !== '');

                // Wrapper is either a clickable anchor (if URL present) or a div (if no URL)
                const CardWrapper = hasLink ? motion.a : motion.div;
                const cardProps = hasLink
                  ? {
                    href: cert.credentialUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: `Open ${cert.title} Certificate`,
                  }
                  : {};

                return (
                  <CardWrapper
                    key={cert.id}
                    {...cardProps}
                    className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden ${hasLink ? 'cursor-pointer hover:-translate-y-1 hover:border-orange-300/80 dark:hover:border-orange-500/40' : ''
                      }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.015 }}
                  >
                    {/* Ambient Glow in Corner */}
                    <div
                      className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cert.accentGlow} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                    />

                    <div>
                      {/* Top Header: Issuer Badge + Action / Status Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs flex items-center gap-1 ${cert.badge}`}>
                          <Award size={12} />
                          {cert.issuer}
                        </span>

                        {hasLink ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-800/40 px-2.5 py-0.5 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <span>Verify</span>
                            <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40 px-2 py-0.5 rounded-full">
                            <ShieldCheck size={11} />
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Certificate Title */}
                      <h4 className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {cert.title}
                      </h4>

                      {/* Category Label */}
                      {cert.category && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                          {cert.category}
                        </p>
                      )}

                      {/* Skills Tags */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                      {hasLink ? (
                        <>
                          <span className="text-orange-600 dark:text-orange-400 font-semibold text-[11px] flex items-center gap-1">
                            Click to open credential
                          </span>
                          <ExternalLink size={13} className="text-orange-500" />
                        </>
                      ) : (
                        <>
                          <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            Completed Credential
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                            {cert.issuer}
                          </span>
                        </>
                      )}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
