import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { workExperience, education } from '../data/experience';
import { certificates } from '../data/certificates';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <p className="text-orange-500 text-base sm:text-lg font-medium mb-4">My Journey</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Experience &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Education
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              What I've built and where I'm learning
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Projects & Work */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Projects & Work</h3>
              </div>
              <div className="space-y-6">
                {workExperience.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-8 pb-8 border-l-2 border-orange-200 dark:border-orange-900 last:border-l-0 last:pb-0"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full ring-4 ring-orange-100 dark:ring-orange-900/40"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                      <span className="inline-block text-orange-500 text-xs font-semibold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full mb-3">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-orange-500 font-medium text-sm mb-3">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 last:border-l-0 last:pb-0"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-100 dark:ring-blue-900/40"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                      <span className="inline-block text-blue-500 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mb-3">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-500 font-medium text-sm mb-3">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certificates */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Certificates</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${cert.color}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${cert.badge}`}>
                    LinkedIn
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{cert.title}</p>
                    <p className="text-xs opacity-75 mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
