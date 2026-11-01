// ============================================================
// CERTIFICATES — Edit this file to add/update your certificates
// Shown at the bottom of the Experience & Journey section
// ============================================================

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  // Optional: Add URL to open certificate in a new tab. If omitted, card displays as verified badge without dead link.
  credentialUrl?: string;
  category?: string;
  skills?: string[];
  // Tailwind theme accent classes for glowing background and badges
  color: string;
  badge: string;
  accentGlow: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Data Science Foundations - Level 1',
    issuer: 'IBM',
    category: 'Data Science & AI',
    skills: ['Data Science', 'Methodology', 'Analysis'],
    // credentialUrl: 'https://...', // Paste your certificate link here if available
    color: 'border-blue-200/80 dark:border-blue-500/20 bg-blue-50/40 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
    accentGlow: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 2,
    title: 'Walmart USA - Advanced Software Engineering Job Simulation',
    issuer: 'Forage',
    category: 'Software Engineering',
    skills: ['Architecture', 'Java', 'Data Structures'],
    // credentialUrl: 'https://...',
    color: 'border-emerald-200/80 dark:border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
    accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 3,
    title: 'AWS APAC - Solutions Architecture Job Simulation',
    issuer: 'Forage',
    category: 'Cloud Architecture',
    skills: ['AWS Services', 'Scalability', 'System Design'],
    // credentialUrl: 'https://...',
    color: 'border-amber-200/80 dark:border-amber-500/20 bg-amber-50/40 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-700/50',
    accentGlow: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 4,
    title: 'MongoDB Essential Training',
    issuer: 'LinkedIn Learning',
    category: 'Database & Backend',
    skills: ['NoSQL', 'MongoDB', 'Aggregation', 'Querying'],
    // credentialUrl: 'https://...',
    color: 'border-green-200/80 dark:border-green-500/20 bg-green-50/40 dark:bg-green-950/20 text-green-700 dark:text-green-300',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-700/50',
    accentGlow: 'from-green-500/20 via-emerald-500/10 to-transparent',
  },
  {
    id: 5,
    title: 'Git Essential Training',
    issuer: 'LinkedIn Learning',
    category: 'DevOps & Tooling',
    skills: ['Git', 'Version Control', 'Branching', 'Collaboration'],
    // credentialUrl: 'https://...',
    color: 'border-orange-200/80 dark:border-orange-500/20 bg-orange-50/40 dark:bg-orange-950/20 text-orange-700 dark:text-orange-300',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border-orange-200 dark:border-orange-700/50',
    accentGlow: 'from-orange-500/20 via-red-500/10 to-transparent',
  },
  {
    id: 6,
    title: 'Electronic Arts - Software Engineering Job Simulation',
    issuer: 'Forage',
    category: 'Software Engineering',
    skills: ['C++', 'Class Design', 'Simulation Logic'],
    // credentialUrl: 'https://...',
    color: 'border-purple-200/80 dark:border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border-purple-200 dark:border-purple-700/50',
    accentGlow: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
];
