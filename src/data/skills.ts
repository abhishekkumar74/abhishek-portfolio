// ============================================================
// SKILLS DATA — Edit this file to update your technical skills
// Shown in the About section as 3 clickable cards + modal popup
// ============================================================

export interface SkillItem {
  name: string;
  percentage: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  tags?: string[];
  accent?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: SkillItem[];
  additional: string[];
}

export const skillsData: Record<string, SkillCategory> = {
  languages: {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-orange-500 to-red-500',
    skills: [
      { 
        name: 'Java',       
        percentage: 95, 
        level: 'Advanced',     
        description: 'Strong object-oriented architecture, multi-threading, Spring Boot integration, and scalable data structure implementations.',
        tags: ['OOP Architecture', 'Spring Boot', 'Data Structures', 'Enterprise'],
        accent: 'from-red-500 to-amber-500'
      },
      { 
        name: 'JavaScript', 
        percentage: 90, 
        level: 'Advanced',     
        description: 'Proficient in ES6+, asynchronous JavaScript, DOM engines, and modern reactive front-end paradigms.',
        tags: ['ES6+ Syntaxes', 'Async / Await', 'Event-Driven', 'Functional'],
        accent: 'from-amber-400 to-yellow-500'
      },
      { 
        name: 'TypeScript', 
        percentage: 88, 
        level: 'Advanced',     
        description: 'Type-safe scalable application development with generics, union types, and modern compiler configs.',
        tags: ['Type Safety', 'Generics', 'Next.js & React', 'Strict Mode'],
        accent: 'from-blue-500 to-indigo-600'
      },
      { 
        name: 'HTML5 / CSS3',   
        percentage: 92, 
        level: 'Advanced',     
        description: 'Semantic HTML5 structure, modern CSS Grid/Flexbox layouts, responsive design, and accessible styling.',
        tags: ['Semantic HTML', 'CSS Grid & Flex', 'Fluid Layouts', 'A11y'],
        accent: 'from-orange-500 to-rose-500'
      },
      { 
        name: 'SQL',        
        percentage: 88, 
        level: 'Advanced', 
        description: 'Relational database schema modeling, indexing, query optimization, and complex aggregation pipelines.',
        tags: ['PostgreSQL', 'MySQL', 'Schema Design', 'Query Optimization'],
        accent: 'from-blue-500 to-cyan-500'
      },
    ],
    additional: ['Python', 'C++', 'Node.js', 'PHP'],
  },

  tools: {
    title: 'Tools & Technologies',
    icon: '🛠️',
    color: 'from-blue-500 to-purple-500',
    skills: [
      { 
        name: 'VS Code',          
        percentage: 100, 
        level: 'Expert',      
        description: 'Primary daily-driver code editor with deep extension ecosystems, keybindings, and debugging workflows.',
        tags: ['Daily Driver', 'Custom Tooling', 'Extension Ecosystem', 'Fast Debugging'],
        accent: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'IntelliJ IDEA',    
        percentage: 90,  
        level: 'Advanced',    
        description: 'Enterprise IDE for Java applications with advanced profiling, static analysis, and refactoring suites.',
        tags: ['Java Profiling', 'Spring Assistant', 'Refactoring', 'Maven / Gradle'],
        accent: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Postman',          
        percentage: 88,  
        level: 'Advanced',    
        description: 'API testing, automated collection runners, mock server configuration, and REST/WebSocket documentation.',
        tags: ['REST & GraphQL', 'Automated Tests', 'Environment Scopes', 'Mock Servers'],
        accent: 'from-orange-500 to-amber-500'
      },
      { 
        name: 'Git & GitHub',              
        percentage: 90,  
        level: 'Advanced',    
        description: 'Distributed version control, branch management, collaborative pull requests, merge conflict resolution, and CI/CD.',
        tags: ['Git Workflows', 'Branch Strategies', 'Conflict Handling', 'GitHub Actions'],
        accent: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Chrome Dev Tools', 
        percentage: 85,  
        level: 'Advanced',    
        description: 'Performance auditing, DOM inspection, network waterfall inspection, memory leak detection, and mobile emulation.',
        tags: ['Network Waterfall', 'Memory Profiling', 'Lighthouse Audits', 'Responsive Test'],
        accent: 'from-emerald-500 to-teal-500'
      },
    ],
    additional: ['Docker', 'AWS Console', 'MongoDB Compass', 'Vercel CLI', 'Supabase Studio'],
  },

  frameworks: {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { 
        name: 'React.js',   
        percentage: 92, 
        level: 'Advanced',     
        description: 'Custom hooks, state management, component lifecycles, and performant memoization patterns.',
        tags: ['Custom Hooks', 'Context API', 'Performance Optimization', 'Vite / CRA'],
        accent: 'from-cyan-400 to-blue-500'
      },
      { 
        name: 'Next.js',    
        percentage: 88, 
        level: 'Advanced',     
        description: 'Server-side rendering (SSR), App Router architecture, static generation (SSG), and edge route handlers.',
        tags: ['App Router', 'SSR & Static Gen', 'Edge Functions', 'SEO Architecture'],
        accent: 'from-gray-800 to-gray-950 dark:from-gray-700 dark:to-gray-900'
      },
      { 
        name: 'React Native & Expo', 
        percentage: 88, 
        level: 'Advanced',     
        description: 'Cross-platform mobile engineering with native modules, gesture handling, navigation, and offline sync.',
        tags: ['Expo Ecosystem', 'Mobile UI & Gestures', 'Offline First', 'Play Store Deployment'],
        accent: 'from-indigo-500 to-purple-600'
      },
      { 
        name: 'Tailwind CSS',  
        percentage: 95, 
        level: 'Expert',     
        description: 'Utility-first modern styling, responsive layouts, design token customization, and dark mode theming.',
        tags: ['Design Tokens', 'Dark Mode Theme', 'Glassmorphism', 'Responsive Grids'],
        accent: 'from-teal-400 to-cyan-500'
      },
      { 
        name: 'Express.js & Node', 
        percentage: 82, 
        level: 'Advanced', 
        description: 'RESTful API architectures, middleware pipelines, JWT authentication, and secure request handling.',
        tags: ['RESTful Routing', 'JWT Auth', 'Middleware Chaining', 'CORS & Security'],
        accent: 'from-emerald-600 to-green-700'
      },
    ],
    additional: ['Supabase', 'Zustand', 'PostgreSQL', 'Figma', 'Redux Toolkit', 'Bootstrap'],
  },
};
