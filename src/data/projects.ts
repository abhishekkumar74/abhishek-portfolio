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
  role?: string;           // e.g. "Full Stack Developer", "Lead Mobile Engineer"
  highlights?: string[];   // Key feature bullets shown in modal
  platform?: string;       // e.g. "Android & iOS", "Web Platform", "Cross-Platform"
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'LifeTrack Pro — Personal Life OS',
    category: 'Mobile App',
    image: '/lifetrackpro-mobile.png',
    description: 'A comprehensive personal Life OS & habit tracking mobile app built with React Native and Expo. Features smart Pomodoro focus timers with ambient audio, streak freeze shields, JEE/NEET/UPSC syllabus planners, and GitHub-style discipline heatmaps.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'Zustand',
      'PostHog',
      'Sentry'
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.lifetrackpro.app',
    githubUrl: 'https://github.com/abhishekkumar74/LifeTrackPro',
    featured: true,
    completionDate: '2026',
    teamSize: 'Solo',
    complexity: 'Advanced',
    role: 'Lead Mobile Engineer',
    platform: 'Android & iOS (Play Store)',
    highlights: [
      'Smart Pomodoro focus timer with ambient audio (Lo-Fi, Rain, White Noise)',
      'GitHub-style discipline heatmaps with streak freeze shields & habit protection',
      'Comprehensive syllabus progress trackers for JEE, NEET, and UPSC aspirants',
      'Offline-first state synchronized seamlessly with Supabase cloud backend',
    ],
  },

  {
    id: 2,
    title: 'LifeTrack Pro — Web Platform',
    category: 'Full Stack',
    image: '/lifetrackpro-web.png',
    description: 'Official web platform for LifeTrack Pro built with Next.js 16 and Supabase. Features interactive study calculators, documentation, syllabus tracking, real-time auth, and cross-platform productivity telemetry.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Vercel'
    ],
    liveUrl: 'https://lifetrackpro.in',
    githubUrl: 'https://github.com/abhishekkumar74/lifetrackpro-web',
    featured: true,
    completionDate: '2026',
    teamSize: 'Solo',
    complexity: 'Advanced',
    role: 'Full Stack Engineer',
    platform: 'Web Application (lifetrackpro.in)',
    highlights: [
      'Next.js 16 App Router architecture with SSR and edge-cached landing pages',
      'Interactive study habit calculators and smart syllabus milestone tracker',
      'Real-time user authentication and cross-platform telemetry sync',
      'Lighthouse 95+ performance with fully responsive modern UI design',
    ],
  },

  {
    id: 3,
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
    role: 'Full Stack Developer',
    platform: 'Web Platform',
    highlights: [
      'Peer-to-peer student networking hub for academic collaboration & notes exchange',
      'Interactive resume builder and curated technical interview preparation archive',
      'Scalable Node.js & MongoDB backend with verified student authentication',
    ],
  },

  {
    id: 4,
    title: 'MedQueue - Smart Hospital Queue Management System',
    category: 'Full Stack',
    image: 'https://i.pinimg.com/736x/b2/3d/42/b23d421931a9d43b05703bf1f4840111.jpg',
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
    role: 'Full Stack Developer',
    platform: 'Web Application',
    highlights: [
      'Real-time digital token generation & outpatient queue tracker',
      'Dedicated doctor and administration portals with dynamic triage priorities',
      'Instant queue updates powered by Supabase Realtime WebSocket subscriptions',
    ],
  },

  {
    id: 5,
    title: 'KrishiMitra AI - Smart Agriculture Management Platform',
    category: 'Full Stack',
    image: 'https://i.pinimg.com/1200x/8a/64/1e/8a641e68121de8e2f4b6da31bb4e3aca.jpg',
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
    role: 'Full Stack & AI Developer',
    platform: 'Web Application',
    highlights: [
      'AI-assisted crop health analysis and customized fertilizer recommendations',
      'Real-time weather insights with timely farmer advisory notifications',
      'Accessible multi-lingual design tailored for agricultural users',
    ],
  },
  
  {
    id: 6,
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
    role: 'Frontend Developer',
    platform: 'Web Application',
    highlights: [
      'Community feed for photo sharing, developer discussions, and tech news',
      'Interactive user engagement with comments, upvotes, and profile boards',
    ],
  },
  {
    id: 7,
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
    role: 'Frontend Architect',
    platform: 'Responsive Web',
    highlights: [
      'Bento-style engineering showcase with rich micro-animations',
      'Integrated contact dispatch system and responsive multi-device layouts',
    ],
  },
  {
    id: 8,
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
    role: 'Frontend Developer',
    platform: 'Landing Page',
    highlights: [
      'High-performance lightweight vanilla web architecture',
      'Clean accessibility and cross-browser compatibility',
    ],
  },
  {
    id: 9,
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
    role: 'Backend & Desktop Developer',
    platform: 'Java Desktop App',
    highlights: [
      'Robust relational schema design with JDBC connection pooling',
      'Automated student records processing and secure credential handling',
    ],
  },
];
