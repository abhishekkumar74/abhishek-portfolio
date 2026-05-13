// ============================================================
// PROJECTS DATA — Edit this file to add/update/remove projects
// Shown in the Portfolio section as cards
// ============================================================

export interface Project {
  id: number;
  title: string;
  category: string;        // Used for filter buttons — keep consistent
  image: string;           // URL or local path e.g. "/project1.png"
  description: string;
  technologies: string[];
  liveUrl?: string;        // "#" means no live link yet
  githubUrl?: string;      // "#" means no GitHub link yet
  featured?: boolean;      // Shows "⭐ Featured" badge
  completionDate?: string;
  teamSize?: string;
  complexity?: string;     // "Beginner" | "Intermediate" | "Advanced"
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Unniverse',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A platform for college students to connect, share notes, build resumes, and share interview experiences — built with the MERN stack.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    liveUrl: 'https://unniverse.framer.ai/',
    githubUrl: '#',
    featured: true,
    completionDate: '2025',
    teamSize: 'Two',
    complexity: 'Advanced',
  },

  {
    id: 2,
    title: 'MedQueue - Smart Hospital Queue Management System',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Real-time hospital queue management system with token tracking, patient management, and role-based dashboards.',
    technologies: [
    'React',
    'TypeScript',
    'Supabase',
    'Tailwind CSS',
    'PostgreSQL',
    'Realtime Database',
    'Vercel'
  ],
    liveUrl: 'https://med-queue-chi.vercel.app/',
    githubUrl: 'https://github.com/abhishekkumar74/MedQueue',
    featured: true,
    completionDate: 'Dec 2023',
    teamSize: 'Solo',
    complexity: 'Advanced',
  },

{
    id: 3,
    title: 'KrishiMitra AI - Smart Agriculture Management Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'AI-powered agriculture platform for crop management, fertilizer distribution, farmer support, and smart notifications.',
    technologies: [
    'React',
    'TypeScript',
    'Supabase',
    'Tailwind CSS',
    'PostgreSQL',
    'AI Integration',
    'Realtime Notifications',
    'Vercel'
  ],
    liveUrl: 'https://krishimitra-ai-client.vercel.app/',
    githubUrl: '#',
    featured: true,
    completionDate: 'April 2026',
    teamSize: 'Solo',
    complexity: 'Advanced',
  },
  
  {
    id: 4,
    title: 'TechiSpot Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Social platform for photo sharing, commenting, news feeds, and tech memes with user authentication.',
    technologies: ['React.js', 'Bootstrap', 'HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/abhishekkumar74/TechiSpot',
    featured: false,
    completionDate: 'Feb 2024',
    teamSize: '25 Member',
    complexity: 'Advanced',
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features dark mode, scroll animations, contact form with Google Sheets integration, and fully responsive design.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://abhishek-portfolio-livid-zeta.vercel.app/',
    githubUrl: 'https://github.com/abhishekkumar74/abhishek-portfolio',
    featured: true,
    completionDate: '2025',
    teamSize: 'Solo',
    complexity: 'Intermediate',
  },
  {
    id: 6,
    title: 'Portfolio Landing Page',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Interactive and engaging portfolio landing page with SEO optimization and performance improvements.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://abhishek-portfolioe.netlify.app/',
    githubUrl: 'https://github.com/abhishekkumar74/Portfolio-2.0',
    featured: false,
    completionDate: 'Mar 2024',
    teamSize: 'Solo',
    complexity: 'Intermediate',
  },
  {
    id: 7,
    title: 'Student Database Management',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comprehensive Student Database Management System with records management and appointment scheduling.',
    technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
    liveUrl: '#',
    githubUrl: 'https://github.com/abhishekkumar74/StudentDatabase',
    featured: false,
    completionDate: 'Dec 2023',
    teamSize: 'Solo',
    complexity: 'Advanced',
  },
];
