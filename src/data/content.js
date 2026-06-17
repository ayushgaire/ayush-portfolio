// All portfolio content centralized for easy maintenance

export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/ayush-gaire-131612345/',
    linkedinAlt: 'https://share.google/zm3EEzHKPYu55Z5OR',
    github: 'https://github.com/',
    instagram: 'https://www.instagram.com/aayushgairay',
    facebook: 'https://share.google/CLOj8erixElCQveqe',
    email: 'aayushgairay143@gmail.com',
    appointment: 'https://calendly.com/aayushgairay143/30min',
    medium: 'https://medium.com/@aayushgairay',
    codyza: 'https://codyza.com/',
    website: 'https://ayushgaire.com/',
}

// Each link is either a `to` (route path) or a `scroll` (homepage section id).
// Routes always navigate; scroll links scroll on home, navigate-then-scroll elsewhere.
export const NAV_LINKS = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Client Work', to: '/client-work' },
    { label: 'Experience', to: '/experience' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', scroll: 'contact' },
]

export const ROLES = [
    'Computer Science Student',
    'Founder & CEO of Codyza',
    'Full-Stack Developer',
    'Builder of Real Software',
]

export const JOURNEY = [{
        flag: '🇳🇵',
        country: 'Nepal',
        period: 'Origin',
        text: 'Roots, resilience and the early spark for technology and leadership.',
    },

    {
        flag: '🇯🇵',
        country: 'Japan',
        period: '2020 — 2024',
        text: 'Management, discipline and national-level athletics across four formative years.',
    },

    {
        flag: '🇺🇸',
        country: 'United States',
        period: '2024 — Present',
        text: 'Computer Science at SMSU, FOUNDER & CE0 Codyza, and building full-stack products.',
    },
]

export const EDUCATION = {
    school: 'Southwest Minnesota State University',

    location: 'Marshall, Minnesota',

    degree: 'Bachelor of Science in Computer Science',

    graduation: 'Expected Graduation: May 2028',

    coursework: [
        'Programming Fundamentals',
        'Data Structures',
        'Problem Solving',
        'Web Development',
        'Computer Science Concepts',
    ],
}

export const PROJECTS = [{
        name: 'TheBasicGame',

        tagline: 'Modern Multi-Game Gaming Platform',

        description: 'A futuristic browser gaming platform featuring Chess, Ludo, Snake, Sudoku and other classic games with smooth cyber-inspired UI, animations and responsive gameplay.',

        features: [
            'Cyber futuristic interface',
            'Multiple classic games',
            'Responsive gaming layout',
            'Smooth animations',
            'Guest play support',
            'Modern gaming experience',
        ],

        tech: [
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'JavaScript',
            'Framer Motion',
            'Vercel',
        ],

        live: 'https://thebasicgame.vercel.app/',

        github: null,

        accent: '#2f8fff',

        image: '/projects/thebasicgame.jpg',
    },

    {
        name: 'QuickNotes',

        tagline: 'Full Stack Note-Taking Application',

        description: 'A modern full-stack note-taking platform built using React, Vite, and Supabase with authentication and real-time cloud note storage.',

        features: [
            'User authentication',
            'Session management',
            'Real-time notes',
            'Responsive UI',
            'Cloud database integration',
        ],

        tech: [
            'React.js',
            'Vite',
            'Supabase',
            'JavaScript',
            'HTML5',
            'CSS3',
        ],

        live: 'https://6a050e4e21cb92695c78ce31--chic-cendol-30d74b.netlify.app',

        github: null,

        accent: '#1285ff',
    },

    {
        name: 'PIXEL',

        tagline: 'Image Size Generator & Optimization Platform',

        description: 'A privacy-friendly, full-stack image tool built under Codyza. Resize, optimize and transform images right in the browser — no sign-up, no third-party cloud uploads.',

        features: [
            'Resize by exact size or percentage',
            'One-click social media presets',
            'Convert JPEG / PNG / WebP',
            'Rotate, flip & lock aspect ratio',
            'Instant file-size savings',
        ],

        tech: [
            'Node.js',
            'Express.js',
            'Sharp',
            'Multer',
            'JavaScript',
            'HTML5',
            'CSS3',
        ],

        live: 'https://image-resizer-gstt.onrender.com',

        github: null,

        accent: '#4da3ff',
    },
]

export const CLIENT_WORK = [
    {
        name: 'Krystal-Klean',
        flag: '🇺🇸',
        location: 'Marshall, Minnesota',
        category: 'Commercial Cleaning Business Website',
        description:
            'Designed and developed a professional business website for Krystal-Klean, a real cleaning company operating in Marshall, Minnesota. Built for credibility, service presentation, lead generation, mobile responsiveness, and a modern customer experience.',
        contributions: [
            'Responsive business website design',
            'Modern service showcase layout',
            'Contact and lead generation system',
            'SEO-friendly structure',
            'Production deployment',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vercel'],
        url: 'https://www.krystal-klean.com/',
        image: '/projects/krystal-klean.jpg',
        badge: 'Real Business Website',
    },
    {
        name: 'Namaste Kalika',
        flag: '🇯🇵',
        location: 'Miyazaki, Japan',
        category: 'Restaurant Website',
        description:
            'Designed and developed a bilingual (Japanese / English) restaurant website for Namaste Kalika, an operating Indian restaurant in Miyazaki, Japan. The site showcases menus, restaurant information, branding, and customer-friendly navigation for a professional online presence.',
        contributions: [
            'Complete restaurant website design',
            'Bilingual Japanese / English support',
            'Digital menu integration',
            'Mobile-first responsive experience',
            'Brand-focused visual design',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vercel'],
        url: 'https://www.namastekalika.com/',
        image: '/projects/namaste-kalika.jpg',
        badge: 'Real Business Website',
    },
    {
        name: 'Raman Dahal Portfolio',
        flag: '🇺🇸',
        location: 'Marshall, Minnesota',
        category: 'Personal Portfolio Website',
        description:
            'Designed and developed a modern responsive portfolio website for Raman Dahal with a clean premium UI inspired by modern Apple-style aesthetics.',
        contributions: [
            'Premium portfolio design',
            'Smooth animations',
            'Responsive layout',
            'Custom domain deployment',
        ],
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        url: 'https://www.ramandahal.com/',
        image: '/projects/raman-project.jpg',
        badge: 'Portfolio Website',
    },
    {
        name: 'Gedion Gizaw Portfolio',
        flag: '🇺🇸',
        location: 'Marshall, Minnesota',
        category: 'Personal Portfolio Website',
        description:
            'Built a professional portfolio website with modern 3D-inspired sections and clean visual hierarchy for Gedion Tilahun Gizaw.',
        contributions: [
            '3D-inspired sections',
            'Clean visual hierarchy',
            'Responsive layout',
            'Custom domain deployment',
        ],
        tech: ['React', 'Tailwind CSS', '3D UI'],
        url: 'https://www.gediontilahungizaw.com/',
        image: '/projects/gedion-project.jpg',
        badge: 'Portfolio Website',
    },
]

export const STATS = [
    { value: '3+', label: 'Projects Built' },
    { value: '4+', label: 'Client Websites' },
    { value: '3', label: 'Countries' },
    { value: '2026', label: 'SMSU · Class of 2028' },
]
export const EXPERIENCE = [
    {
        role: 'Public Safety Assistant',
        org: 'Southwest Minnesota State University Public Safety',
        location: 'Marshall, MN',
        period: 'Jan 2025 — Apr 2025',
    },
    {
        role: 'Student Worker',
        org: 'Chartwells Higher Education Dining Services',
        location: 'Marshall, MN',
        period: 'Sept 2024 — May 2025',
    },
    {
        role: 'Restaurant Manager',
        org: 'Asian Kitchen Bar Bhawana',
        location: 'Japan',
        period: 'Nov 2020 — Jun 2024',
    },
]

export const LEADERSHIP = [
    {
        title: 'International Student Organization',
        role: 'Program Coordinator — SMSU ISO',
        icon: 'Users',
    },
    {
        title: 'American Red Cross',
        role: 'Information & Planning Volunteer Generalist — Southwest Minnesota',
        icon: 'HeartHandshake',
    },
    {
        title: 'UNICEF Speaker',
        role: 'Spoke on water problems — UNICEF event, Kagoshima, Japan',
        icon: 'Mic',
    },
    {
        title: 'ISA Award Nepal',
        role: 'Student Coordinator',
        icon: 'Award',
    },
]

export const ACHIEVEMENTS = [
    {
        stat: '01',
        label: 'Prefectural Athlete',
        detail: 'Recognized as a Prefectural-Level Athlete in Japan through discipline, consistency, and competitive performance.',
        icon: 'Trophy',
    },
    {
        stat: '3+',
        label: 'Years Experience',
        detail: 'Experience in leadership, technology, management, and creative digital development across three countries.',
        icon: 'Medal',
    },
    {
        stat: '10+',
        label: 'Projects Built',
        detail: 'Designed and developed modern websites, platforms, and full-stack digital products.',
        icon: 'Star',
    },
]

export const ARTICLES = [
    {
        title: 'Critical cPanel Security Flaw Puts Millions of Websites at Risk',
        category: 'Cybersecurity',
        date: 'May 1, 2026',
        readTime: '2 min read',
        link: 'https://medium.com/@aayushgairay/critical-cpanel-security-flaw-puts-millions-of-websites-at-risk-89dc1fdc72e9',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Is Nepal Really in 2083? The Doraemon Era Myth and the Reality of Time',
        category: 'Culture & Society',
        date: 'Apr 13, 2026',
        readTime: '4 min read',
        link: 'https://medium.com/@aayushgairay/is-nepal-really-in-2083-the-doraemon-era-myth-and-the-reality-of-time-2dcda627b9ae',
        image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Will Artificial Intelligence Take Computer Science Jobs?',
        category: 'Artificial Intelligence',
        date: 'Apr 1, 2026',
        readTime: '3 min read',
        link: 'https://medium.com/@aayushgairay/will-artificial-intelligence-take-computer-science-jobs-e5c9f57a0070',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    },
]
