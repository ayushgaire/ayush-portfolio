// All portfolio content centralized for easy maintenance

export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/ayush-gaire-399937280',
    linkedinAlt: 'https://share.google/zm3EEzHKPYu55Z5OR',
    github: 'https://github.com/',
    instagram: 'https://www.instagram.com/aayushgairay',
    facebook: 'https://share.google/CLOj8erixElCQveqe',
    email: 'aayushgairay143@gmail.com',
    phone: '+15078179236',
    medium: 'https://medium.com/@aayushgairay',
    codyza: 'https://codyza.com/',
    website: 'https://ayushgaire.com/',
}

export const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
]

export const ROLES = [
    'Computer Science Student',
    'Co-Founder of Codyza',
    'Full-Stack Developer',
    'Creative Technologist',
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
        text: 'Computer Science at SMSU, Co-founding Codyza, and building full-stack products.',
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

export const SKILLS = [{
        group: 'Programming',

        items: ['Python', 'C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
    },

    {
        group: 'Frameworks & Technologies',

        items: ['React.js', 'Node.js', 'Express.js', 'Vite', 'Supabase'],
    },

    {
        group: 'Tools',

        items: ['Git', 'GitHub', 'VS Code', 'Render', 'Supabase'],
    },

    {
        group: 'Concepts',

        items: [
            'Full Stack Development',
            'Frontend & Backend Integration',
            'Database Management',
            'ADT',
            'Problem Solving',
            'Team Collaboration',
        ],
    },

    {
        group: 'Languages',

        items: [
            'Nepali',
            'English',
            'Japanese',
            'Hindi',
            'Urdu',
            'Spanish',
        ],
    },
]

export const PROJECTS = [{
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

export const EXPERIENCE = [{
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

export const LEADERSHIP = [{
        title: 'International Student Organization (ISO)',

        role: 'Program Coordinator',
    },

    {
        title: 'UNICEF Speaker',

        role: 'Spoke on water problems — UNICEF event, Kagoshima, Japan',
    },

    {
        title: 'ISA Award Nepal',

        role: 'Student Coordinator',
    },
]

export const ACHIEVEMENTS = [{
        stat: '01',

        label: 'Prefectural Athlete',

        detail: 'Recognized as a Prefectural-Level Athlete in Japan through discipline, consistency and competitive performance.',
    },

    {
        stat: '3+',

        label: 'Years Experience',

        detail: 'Experience in leadership, technology, management and creative digital development.',
    },

    {
        stat: '10+',

        label: 'Projects Built',

        detail: 'Designed and developed modern websites, platforms and full-stack digital products.',
    },
]

export const ARTICLES = [{
        title: 'Critical cPanel Security Flaw Puts Millions of Websites at Risk',

        category: 'Cybersecurity',

        date: 'May 1, 2026',

        readTime: '2 min read',

        link: 'https://medium.com/@aayushgairay/critical-cpanel-security-flaw-puts-millions-of-websites-at-risk-89dc1fdc72e9',

        theme: 'security',

        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    },

    {
        title: 'Is Nepal Really in 2083? The Doraemon Era Myth and the Reality of Time',

        category: 'Culture & Society',

        date: 'Apr 13, 2026',

        readTime: '4 min read',

        link: 'https://medium.com/@aayushgairay/is-nepal-really-in-2083-the-doraemon-era-myth-and-the-reality-of-time-2dcda627b9ae',

        theme: 'culture',

        image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80',
    },

    {
        title: 'Will Artificial Intelligence Take Computer Science Jobs?',

        category: 'Artificial Intelligence',

        date: 'Apr 1, 2026',

        readTime: '3 min read',

        link: 'https://medium.com/@aayushgairay/will-artificial-intelligence-take-computer-science-jobs-e5c9f57a0070',

        theme: 'ai',

        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    },
]