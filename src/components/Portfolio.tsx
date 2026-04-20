import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github, Search, Calendar, Users, Code, Star, X } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const { ref } = useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  const stats = useMemo(() => [
    { label: "Projects Completed", value: projects.length, icon: Code, color: "from-blue-500 to-cyan-500" },
    { label: "Years Experience", value: "2+", icon: Calendar, color: "from-green-500 to-emerald-500" },
    { label: "Technologies Used", value: "15+", icon: Star, color: "from-purple-500 to-pink-500" },
    { label: "Certifications", value: "9+", icon: Users, color: "from-orange-500 to-red-500" }
  ], []);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-15 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <p className="text-orange-500 text-base sm:text-lg font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              My Creative
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my latest work showcasing web development, design, and innovative solutions that bring ideas to life.
            </p>
          </div>

          {/* Enhanced Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Enhanced Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Enhanced Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm shadow-lg hover:shadow-xl ${
                      filter === category
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white transform scale-105'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-orange-500 border border-gray-200 dark:border-gray-600 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 dark:border-gray-700 ${
                  project.featured ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Enhanced Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Enhanced Project Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.completionDate}</span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded border border-orange-200">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Enhanced Project Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      <Users size={12} />
                      {project.teamSize}
                    </span>
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      <Star size={12} />
                      {project.complexity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-8xl mb-6 animate-wobble">
                🔍
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              {selectedProject.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-sm text-gray-500">{selectedProject.completionDate}</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">{selectedProject.description}</p>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-orange-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">Team Size</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{selectedProject.teamSize}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="text-orange-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">Complexity</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{selectedProject.complexity}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-orange-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">Technologies</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{selectedProject.technologies.length} used</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
