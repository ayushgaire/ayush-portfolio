// Portfolio content — single source of truth.
// Facts are based on the current résumé, repository data,
// and verified public project/profile URLs.

// ─────────────────────────────────────────────
// SOCIAL / IDENTITY
// ─────────────────────────────────────────────

export const SOCIALS = {
  github: 'https://github.com/ayushgaire',
  linkedin: 'https://www.linkedin.com/in/ayush-gaire-131612345',
  email: 'aayushgairay143@gmail.com',
  codyza: 'https://www.codyza.com/',
  codyzaProfile: 'https://www.codyza.com/contributor/czx-0002',
  website: 'https://ayushgaire.com/',
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'About', to: '/about' },
  { label: 'Résumé', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export const IDENTITY = 'Computer Science Student & Software Engineer'

// ─────────────────────────────────────────────
// JOURNEY
// ─────────────────────────────────────────────

export const JOURNEY = [
  {
    country: 'Nepal',
    period: 'Origin',
    text: 'Where I grew up and first started building things.',
  },
  {
    country: 'Japan',
    period: '2020 — 2024',
    text: 'Four years in Kagoshima studying agriculture. Selected for the prefectural canoeing team.',
  },
  {
    country: 'United States',
    period: '2024 — Present',
    text: 'Studying Computer Science at Southwest Minnesota State University.',
  },
]

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────

export const EDUCATION = {
  school: 'Southwest Minnesota State University',
  location: 'Marshall, Minnesota',
  degree: 'Bachelor of Science in Computer Science',
  graduation: 'Expected May 2028',
}

// ─────────────────────────────────────────────
// PRIMARY PROJECTS
// Strongest work first.
// ─────────────────────────────────────────────

export const PROJECTS = [
  {
    slug: 'nepaldisaster',
    name: 'NepalDisaster.com',
    tagline: 'Disaster Information Platform',
    shortDescription:
      'A real-time disaster information platform for Nepal with live disaster data, flood-alert functionality, and a bilingual Nepali/English interface.',
    role: 'Full-stack contributor — frontend, backend, and data integration',
    tech: [
      'Frontend Development',
      'Backend Integration',
      'Data Integration',
      'Bilingual UI',
    ],
    live: 'https://www.nepaldisaster.com/',
    github: null,
    image: '/projects/nepaldisaster.jpg',
  },

  {
    slug: 'namaste-kalika',
    name: 'Namaste Kalika',
    tagline: 'Production Restaurant Operations Platform · Japan',
    shortDescription:
      'Built and deployed a bilingual Japanese/English platform supporting two restaurant locations with database-backed menus, staff/admin workflows, and secure access controls.',
    role: 'Full-stack development and ongoing maintenance',
    tech: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'Vercel',
    ],
    live: 'https://www.namastekalika.com/',
    github: null,
    image: '/projects/namaste-kalika.jpg',
  },

  {
    slug: 'foresight',
    name: 'FORESIGHT',
    tagline: 'Southwest MN Hacks 2026 · 3rd Place / Bronze Medal',
    shortDescription:
      'A workforce-intelligence prototype covering skill gaps, knowledge risk, succession coverage, what-if simulation, talent matching, employee profiles, and AI-assisted mitigation recommendations.',
    role:
      'Contributed to product design, frontend workflows, feature integration, testing, and presentation as part of a four-person hackathon team.',
    tech: [
      'SvelteKit',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'Supabase',
      'Gemini',
    ],
    live: null,
    backend: 'https://skillspulse-backend.vercel.app/',
    github: null,
    devpost: 'https://devpost.com/software/foresight-4dwhsb',
    result: 'https://www.southwestmnhacks.org/projects',
    image: '/projects/foresight.jpg',
    teamSize: 4,
    award: '3rd Place / Bronze Medal — Southwest MN Hacks 2026',
  },

  {
    slug: 'farmfix',
    name: 'FarmFix',
    tagline: 'Agricultural Equipment Platform',
    shortDescription:
      'A full-stack platform for tracking farm equipment, maintenance schedules, repair histories, service records, and reminders.',
    role: 'Full-stack development — frontend, backend, and data workflows',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    live: 'https://farmfix-memory-zeta.vercel.app/',
    github: 'https://github.com/ayushgaire/-farmfix-memory',
    image: '/projects/farmfix.jpg',
  },
]
export const EARLIER_WORK = [
  {
    name: 'NepalBuddy',
    category: 'Travel Platform',
    description:
      'A platform for discovering Nepal destinations, trekking agencies, hotels, and activities.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    url: 'https://www.nepalbuddy.com/',
    github: null,
    image: '/projects/nepalbuddy.jpg',
  },

  {
    name: 'EarthLife',
    category: 'Web Project',
    description:
      'An earlier web project built as part of hands-on development work.',
    tech: ['JavaScript'],
    url: 'https://earthlife-jet.vercel.app/',
    github: 'https://github.com/ayushgaire/earthlife',
    image: null,
  },

  {
    name: 'Krystal-Klean',
    category: 'Commercial Cleaning Website',
    location: 'Marshall, Minnesota',
    description:
      'Business website for a commercial cleaning company in Marshall, Minnesota, focused on service presentation and mobile usability.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    url: 'https://krystal-klean.com/',
    github: null,
    image: '/projects/krystal-klean.jpg',
  },

  {
    name: 'Raman Dahal Portfolio',
    category: 'Personal Portfolio',
    location: 'Marshall, Minnesota',
    description:
      'Personal portfolio website with a straightforward responsive design and production deployment.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://ramandahal.com/',
    github: null,
    image: '/projects/raman-project.jpg',
  },

  {
    name: 'Gedion Gizaw Portfolio',
    category: 'Personal Portfolio',
    location: 'Marshall, Minnesota',
    description:
      'Personal portfolio website focused on frontend presentation and deployment.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://gediontilahungizaw.com/',
    github: null,
    image: '/projects/gedion-project.jpg',
  },

  {
    name: 'TheBasicGame',
    category: 'Learning Project',
    description:
      'An earlier browser-based game project built while developing JavaScript and frontend skills.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    url: 'https://thebasicgame.vercel.app/',
    github: 'https://github.com/ayushgaire/thebasicgame',
    image: '/projects/thebasicgame.jpg',
  },

  {
    name: 'PIXEL',
    category: 'Image Processing Application',
    description:
      'An image-processing web application supporting resizing, optimization, rotation, flipping, and format conversion.',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'Sharp', 'Multer'],
    url: 'https://image-resizer-gstt.onrender.com/',
    github: 'https://github.com/ayushgaire/image-resizer',
    image: null,
  },
]

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────

export const EXPERIENCE = [
  {
    role: 'Founder & Software Developer',
    org: 'Codyza',
    location: 'Marshall, Minnesota / Remote',
    period: '2025 — Present',
    url: 'https://www.codyza.com/',
    profile: 'https://www.codyza.com/contributor/czx-0002',
    bullets: [
      'Founded a volunteer developer community focused on building and shipping collaborative software projects.',
      'Coordinate distributed developers and contributors across frontend and backend work.',
      'Support technical decisions, implementation, testing, Git/GitHub collaboration, and deployment.',
      'Coordinate project execution, volunteer assignments, and production releases.',
    ],
  },

  {
    role: 'Information & Planning Volunteer Generalist',
    org: 'American Red Cross',
    location: 'Southwest Minnesota',
    period: 'May 2026 — Present',
    bullets: [
      'Support disaster-response information, planning, communication, preparedness, and operational coordination.',
      'Collaborate with volunteer teams supporting disaster-response and preparedness activities.',
    ],
  },
]

// ─────────────────────────────────────────────
// TECHNICAL SKILLS
// ─────────────────────────────────────────────

export const SKILLS = [
  {
    group: 'Languages',
    items: [
      'Python',
      'C',
      'C++',
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
    ],
  },

  {
    group: 'Web & Backend',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
    ],
  },

  {
    group: 'Data',
    items: ['PostgreSQL', 'Supabase'],
  },

  {
    group: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Vercel',
      'Render',
      'VS Code',
      'Linux/UNIX',
    ],
  },
]

// ─────────────────────────────────────────────
// SPOKEN LANGUAGES
// ─────────────────────────────────────────────

export const SPOKEN_LANGUAGES = [
  { name: 'Nepali', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Japanese', level: 'Advanced' },
  { name: 'Hindi', level: 'Advanced' },
]

// ─────────────────────────────────────────────
// RECOGNITION
// ─────────────────────────────────────────────

export const RECOGNITIONS = [
  {
    title: 'FORESIGHT',
    award: '3rd Place / Bronze Medal',
    context: 'Southwest MN Hacks 2026',
    note:
      'Four-person team. Contributed to product design, frontend workflows, feature integration, testing, and presentation.',
    projectSlug: 'foresight',
    devpost: 'https://devpost.com/software/foresight-4dwhsb',
    result: 'https://www.southwestmnhacks.org/projects',
  },
]