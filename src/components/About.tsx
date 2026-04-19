import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';
import { personal } from '../data/personal';
import { skillsData } from '../data/skills';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const closeModal = () => setSelectedSkill(null);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-15 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
            <p className="text-orange-500 text-base sm:text-lg font-medium mb-4">About Me</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Full Stack Developer | 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">React • Node • Java</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Software Developer who loves creating innovative solutions and bringing creative visions to life through code.
            </p>
          </motion.div>

          {/* Image + Bio */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Image */}
            <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/Hero1.png"
                    alt={personal.name}
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating stat — Experience */}
                <motion.div
                  className="absolute -left-6 -bottom-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-2xl font-bold text-orange-500">{personal.stats.experience}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>

                {/* Floating stat — Projects */}
                <motion.div
                  className="absolute -right-6 -top-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-2xl font-bold text-purple-500">{personal.stats.projects}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  I'm a Software Engineer passionate about building amazing digital experiences
                </h3>
                {personal.about.map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                    {para}
                  </p>
                ))}
                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                My Technical Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                I continuously enhance my skills to stay updated with the latest technologies and best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((key, cardIndex) => {
                const category = skillsData[key];
                const labelColors = ['text-orange-500', 'text-blue-500', 'text-green-500'];
                return (
                  <motion.div
                    key={key}
                    className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer group ${cardIndex === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedSkill(key)}
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{category.icon}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Click to see details</p>
                    </div>
                    <div className="space-y-3">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className={`text-sm font-semibold ${labelColors[cardIndex]}`}>{skill.level}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Skills Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${skillsData[selectedSkill as keyof typeof skillsData].color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xl">{skillsData[selectedSkill as keyof typeof skillsData].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillsData[selectedSkill as keyof typeof skillsData].title}
                  </h3>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Skill bars */}
              <div className="space-y-6">
                {skillsData[selectedSkill as keyof typeof skillsData].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}</span>
                        <span className="text-lg font-bold text-orange-500">{skill.percentage}%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional tags */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Additional Skills & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {skillsData[selectedSkill as keyof typeof skillsData].additional.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
