import {
  Code2,
  Database,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' as const },
  { label: 'Email', href: 'mailto:sivaprakash@example.com', icon: 'email' as const },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    items: ['C', 'C++', 'Java', 'Python'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
];

export type SkillBar = { name: string; level: number };

export const SKILL_BARS: SkillBar[] = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 82 },
  { name: 'MySQL', level: 85 },
  { name: 'Java', level: 85 },
  { name: 'Python', level: 82 },
  { name: 'Git', level: 90 },
];

export const STATS = [
  { label: 'Projects Completed', value: '10+', icon: 'rocket' as const },
  { label: 'Technologies', value: '12+', icon: 'cpu' as const },
  { label: 'Learning', value: '2+ Years', icon: 'book' as const },
  { label: 'Dedication', value: '100%', icon: 'heart' as const },
];

export const EDUCATION = {
  degree: 'BE Computer Science Engineering',
  spec: 'Artificial Intelligence & Machine Learning',
  college: 'Sree Venkateshwara Hi-Tech Engineering College',
  period: '2024 – 2028',
  cgpa: '7.7',
};

export const ACHIEVEMENTS = [
  { title: 'Hackathon Participation', desc: 'Competed in time-bound build sprints, shipping working prototypes under pressure.', icon: 'trophy' as const },
  { title: 'Technical Seminars', desc: 'Attended and engaged with seminars on AI, ML and modern web architecture.', icon: 'presentation' as const },
  { title: 'Paper Presentation', desc: 'Presented technical papers on AI-driven applications and full stack systems.', icon: 'file-text' as const },
  { title: 'Coding Challenges', desc: 'Solved algorithmic problems across platforms to sharpen DSA fundamentals.', icon: 'code' as const },
  { title: 'Workshop Participation', desc: 'Hands-on workshops on emerging tech, frameworks and developer tooling.', icon: 'wrench' as const },
  { title: 'Technical Events', desc: 'Active participant in college tech fests and inter-college events.', icon: 'calendar' as const },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'AI Chatbot',
    description:
      'A conversational AI assistant with context-aware responses, persistent chat history and a streaming-style reply UI built on a React + Node.js stack.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-rose-500/30 to-red-700/10',
    emoji: '🤖',
  },
  {
    title: 'E-Commerce Website',
    description:
      'A full-featured storefront with product catalog, cart, checkout flow and admin dashboard. REST API on Express with MongoDB persistence.',
    tags: ['React', 'Express', 'MongoDB'],
    gradient: 'from-amber-500/25 to-red-600/10',
    emoji: '🛒',
  },
  {
    title: 'Student Management System',
    description:
      'A CRUD platform for student records, attendance and grades with role-based access and relational data modeling in MySQL.',
    tags: ['React', 'Node.js', 'MySQL'],
    gradient: 'from-sky-500/25 to-red-600/10',
    emoji: '🎓',
  },
  {
    title: 'Portfolio Website',
    description:
      'A futuristic, animated developer portfolio with glassmorphism, GSAP scroll effects and a fully responsive dark-first design.',
    tags: ['React', 'Tailwind CSS', 'GSAP'],
    gradient: 'from-fuchsia-500/25 to-red-600/10',
    emoji: '⚡',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A real-time weather dashboard consuming a public API, with geolocation, hourly forecasts and animated condition visuals.',
    tags: ['JavaScript', 'API', 'CSS'],
    gradient: 'from-emerald-500/25 to-red-600/10',
    emoji: '🌦️',
  },
];

export const CERTIFICATES = [
  { title: 'C Programming', issuer: 'Programming Fundamentals', year: '2024', icon: 'code' as const },
  { title: 'C++', issuer: 'Object Oriented Programming', year: '2024', icon: 'code-xml' as const },
  { title: 'Python', issuer: 'Scripting & Automation', year: '2025', icon: 'snake' as const },
  { title: 'Java', issuer: 'Core Java Certification', year: '2025', icon: 'coffee' as const },
  { title: 'Hackathon Certificate', issuer: 'Inter-college Hackathon', year: '2025', icon: 'trophy' as const },
  { title: 'Seminar Certificate', issuer: 'AI & ML Technical Seminar', year: '2025', icon: 'presentation' as const },
];

export const TYPING_ROLES = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'React Developer',
  'AI & ML Student',
];
