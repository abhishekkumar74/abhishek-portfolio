// ============================================================
// EXPERIENCE & EDUCATION — Edit this file to update your
// work history and education shown in the Experience section
// ============================================================

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

// ── Work / Projects ──────────────────────────────────────────
export const workExperience: ExperienceItem[] = [
  {
    id: 1,
    title: 'Full Stack Developer (Personal Project)',
    company: 'Unniverse Platform',
    period: '2025 - Present',
    description: 'Built Unniverse — a MERN stack platform for college students to connect, share notes, build resumes, and share interview experiences. Gained hands-on understanding of how frontend and backend work together in a real-world application.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    company: 'Self Project',
    period: '2026 - Present',
    description: 'Designed and developed this portfolio from scratch using React, TypeScript, Tailwind CSS, and Framer Motion. Includes dark mode, scroll animations, Google Sheets contact form, and fully responsive layout. Replace this entry once a new project is ready.',
    type: 'work',
  },
];

// ── Education ────────────────────────────────────────────────
export const education: ExperienceItem[] = [
  {
    id: 3,
    title: 'B.Tech — Computer Science & Engineering',
    company: 'Polaris School of Technology',
    period: 'Aug 2023 – Aug 2027',
    description: 'Currently pursuing B.Tech in CSE. Actively building projects, learning full-stack development, and participating in college tech communities.',
    type: 'education',
  },
  {
    id: 4,
    title: 'Senior Secondary (Class XII) — Science (PCM)',
    company: 'St. Paul Sec. School, Birsinghpur, Samastipur',
    period: '2020 – 2022',
    description: 'Completed Class XII with Physics, Chemistry, and Mathematics. Built a strong analytical foundation that sparked my interest in computer science.',
    type: 'education',
  },
  {
    id: 5,
    title: 'Secondary (Class X)',
    company: 'St. Paul Sec. School, Birsinghpur, Samastipur',
    period: '2018 – 2020',
    description: 'Completed Class X with a strong academic record. Developed early interest in technology and problem-solving.',
    type: 'education',
  },
];
