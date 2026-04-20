// ============================================================
// CERTIFICATES — Edit this file to add/update your certificates
// Shown at the bottom of the Experience section
// ============================================================

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  // Tailwind classes for card background/border/text color
  color: string;
  // Tailwind classes for the issuer badge
  badge: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Data Science Foundations - Level 1',
    issuer: 'IBM',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Walmart USA - Advanced Software Engineering Job Simulation',
    issuer: 'Forage',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400',
    badge: 'bg-green-100 text-green-600',
  },
  {
    id: 3,
    title: 'AWS APAC - Solutions Architecture Job Simulation',
    issuer: 'Forage',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400',
    badge: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 4,
    title: 'MongoDB Essential Training',
    issuer: 'LinkedIn Learning',
    color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
    badge: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 5,
    title: 'Git Essential Training',
    issuer: 'LinkedIn Learning',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400',
    badge: 'bg-orange-100 text-orange-600',
  },
  {
    id: 6,
    title: 'Electronic Arts - Software Engineering Job Simulation',
    issuer: 'Forage',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400',
    badge: 'bg-purple-100 text-purple-600',
  },
];
