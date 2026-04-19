// ============================================================
// SKILLS DATA — Edit this file to update your technical skills
// Shown in the About section as 3 clickable cards + modal popup
// ============================================================

export const skillsData = {
  languages: {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-orange-500 to-red-500',
    // First 3 shown on card preview, all 5 shown in modal
    skills: [
      { name: 'Java',       percentage: 95, level: 'Advanced',     description: 'Strong object-oriented programming skills with experience in Spring Boot and enterprise applications.' },
      { name: 'JavaScript', percentage: 90, level: 'Advanced',     description: 'Proficient in ES6+, DOM manipulation, and modern JavaScript frameworks.' },
      { name: 'HTML/CSS',   percentage: 85, level: 'Advanced',     description: 'Expert in semantic HTML, responsive design, and modern CSS techniques.' },
      { name: 'Node.js',    percentage: 80, level: 'Intermediate', description: 'Experience in building server-side applications and RESTful APIs.' },
      { name: 'SQL',        percentage: 75, level: 'Intermediate', description: 'Database design, complex queries, and data manipulation skills.' },
    ],
    // Tag pills shown at the bottom of the modal
    additional: ['TypeScript', 'Python', 'C++', 'PHP'],
  },

  tools: {
    title: 'Developer Tools',
    icon: '🛠️',
    color: 'from-blue-500 to-purple-500',
    skills: [
      { name: 'VS Code',          percentage: 100, level: 'Expert',      description: 'Primary code editor with extensive customization and plugin usage.' },
      { name: 'IntelliJ IDEA',    percentage: 90,  level: 'Advanced',    description: 'Powerful IDE for Java development with advanced debugging features.' },
      { name: 'Postman',          percentage: 85,  level: 'Advanced',    description: 'API testing and documentation with automated testing workflows.' },
      { name: 'Chrome Dev Tools', percentage: 80,  level: 'Advanced',    description: 'Frontend debugging, performance analysis, and responsive design testing.' },
      { name: 'Git',              percentage: 85,  level: 'Advanced',    description: 'Version control with branching strategies and collaborative development.' },
    ],
    additional: ['Docker', 'AWS Console', 'MongoDB Compass'],
  },

  frameworks: {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'React.js',   percentage: 88, level: 'Advanced',     description: 'Building interactive UIs with hooks, context, and modern React patterns.' },
      { name: 'Bootstrap',  percentage: 85, level: 'Advanced',     description: 'Rapid UI development with responsive grid system and components.' },
      { name: 'Express.js', percentage: 80, level: 'Intermediate', description: 'Node.js web framework for building APIs and server applications.' },
      { name: 'Figma',      percentage: 75, level: 'Intermediate', description: 'UI/UX design and prototyping with collaborative design workflows.' },
      { name: 'WordPress',  percentage: 70, level: 'Intermediate', description: 'CMS development and theme customization.' },
    ],
    additional: ['Next.js', 'Tailwind CSS', 'Material-UI', 'Redux'],
  },
};
