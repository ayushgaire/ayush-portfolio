// All portfolio content centralized for easy maintenance

export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/ayush-gaire-131612345/',
    linkedinAlt: 'https://share.google/zm3EEzHKPYu55Z5OR',
    github: 'https://github.com/',
    instagram: 'https://www.instagram.com/aayushgairay',
    facebook: 'https://share.google/CLOj8erixElCQveqe',
    email: 'aayushgairay143@gmail.com',
    teamEmail: 'team@codyza.com',
    appointment: 'https://calendly.com/aayushgairay143/30min',
    medium: 'https://medium.com/@aayushgairay',
    codyza: 'https://codyza.com/',
    farmfix: 'https://farmfix-memory-zeta.vercel.app/',
    nepalbuddy: 'https://nepalbuddy.com',
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
    'Software Engineer',
    'Full-Stack Developer',
    'Founder of Codyza',
    'Problem Solver',
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
        text: 'Agricultural education, management and discipline across four formative years — the inspiration behind FarmFix.',
    },

    {
        flag: '🇺🇸',
        country: 'United States',
        period: '2024 — Present',
        text: 'Computer Science at SMSU, Founder of Codyza, and building full-stack products that solve real problems.',
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

// FarmFix — flagship startup, spotlighted on the homepage.
export const FARMFIX = {
    name: 'FarmFix',
    tagline: 'Building Technology for Agriculture',
    kicker: 'Featured Startup',
    summary:
        'FarmFix helps farmers digitally manage the memory of their farm — equipment, maintenance history, repairs, and service reminders — turning scattered paper records into one reliable system.',
    story:
        'The inspiration comes directly from my agricultural education in Japan, where I saw first-hand how much critical knowledge lives in notebooks, receipts, and memory. FarmFix exists to solve that real problem.',
    capabilities: [
        { title: 'Equipment', text: 'Track every machine and asset on the farm in one place.' },
        { title: 'Maintenance History', text: 'A complete, searchable record of what was serviced and when.' },
        { title: 'Repair History', text: 'Log repairs, parts, and costs so nothing gets forgotten.' },
        { title: 'Service Reminders', text: 'Stay ahead of maintenance with timely, automated reminders.' },
        { title: 'Farm Records', text: 'Keep the whole operation organized and always accessible.' },
    ],
    tech: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Google Maps', 'Vercel'],
    live: 'https://farmfix-memory-zeta.vercel.app/',
    image: '/projects/farmfix.jpg',
    accent: '#3f7d4e',
}

export const PROJECTS = [{
        name: 'FarmFix',

        tagline: 'Agriculture Technology Startup',

        description:
            'A digital maintenance platform that helps farmers track equipment, service history, and repairs in one place — turning scattered paper records into a reliable digital memory for the farm. Inspired by my agricultural education in Japan.',

        features: [
            'Equipment & asset tracking',
            'Maintenance history',
            'Repair records',
            'Service reminders',
            'Digital farm records',
            'Built to solve a real problem',
        ],

        tech: [
            'Next.js',
            'Supabase',
            'Stripe',
            'Tailwind CSS',
            'Google Maps',
            'Vercel',
        ],

        live: 'https://farmfix-memory-zeta.vercel.app/',

        github: null,

        role: 'Founder',

        accent: '#3f7d4e',

        image: '/projects/farmfix.jpg',

        spotlight: true,
    },

    {
        name: 'Codyza',

        tagline: 'Community for Builders',

        description:
            'The company I founded — a community where developers, designers, and builders ship real projects together. I lead the engineering: the platform, contributor tooling, and the systems that connect everyone around real work.',

        features: [
            'Founder & lead engineer',
            'Ship real projects together',
            'Contributor platform',
            'Community & mentorship',
            'Full-stack engineering',
            'Production deployments',
        ],

        tech: ['Next.js', 'React', 'Supabase', 'Node.js', 'Tailwind CSS', 'Vercel'],

        live: 'https://codyza.com/',

        github: null,

        role: 'Founder & CEO',

        accent: '#6366f1',

        image: '/projects/codyza.jpg',
    },

    {
        name: 'NepalBuddy',

        tagline: 'Discover Nepal · Travel Platform',

        description:
            'A platform that helps people discover Nepal through modern technology — bringing destinations, trek agencies, hotels, activities, and traveller information into one place. Built and supported as a Codyza-sponsored project.',

        features: [
            'Destinations & experiences',
            'Trek agencies & hotels',
            'Activities & traveller info',
            'Modern travel platform',
            'Sponsored by Codyza',
            'Nepal-focused product',
        ],

        tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],

        live: 'https://nepalbuddy.com',

        github: null,

        role: 'Sponsored by Codyza',

        accent: '#f97316',

        image: '/projects/nepalbuddy.jpg',
    },

    {
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

// Articles published on Medium. `related` links an article to one of my
// projects so readers can discover the product behind the writing.
export const ARTICLES = [
    {
        title: 'Why Agriculture Is More Important Than Ever',
        author: 'Ayush Gaire',
        category: 'Agriculture',
        date: '1 day ago',
        readTime: '2 min read',
        tags: ['Agriculture', 'Technology', 'FarmFix', 'Innovation', 'Food Security'],
        link: 'https://medium.com/@aayushgairay/why-agriculture-is-more-important-than-ever-adf7aaa7da5b?source=user_profile_page---------0-------------0a3fa66ac871----------------------',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
        related: {
            name: 'FarmFix',
            icon: 'Sprout',
            description: 'Helping farmers digitally manage maintenance records and equipment history.',
            href: 'https://farmfix-memory-zeta.vercel.app/',
            cta: 'View FarmFix',
        },
    },
    {
        title: 'Stop AI Agents Before They Make Risky Moves',
        author: 'Ayush Gaire',
        category: 'Artificial Intelligence',
        date: 'Jun 21, 2026',
        readTime: '3 min read',
        tags: ['AI', 'AI Safety', 'Security', 'Automation'],
        link: 'https://medium.com/@aayushgairay/stop-ai-agents-before-they-make-risky-moves-af774aed4138?source=user_profile_page---------1-------------0a3fa66ac871----------------------',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Is Nepal Really in 2083? The Doraemon Era Myth and the Reality of Time',
        author: 'Ayush Gaire',
        category: 'Culture & Society',
        date: 'Apr 13, 2026',
        readTime: '4 min read',
        tags: ['Nepal', 'Culture', 'History'],
        link: 'https://medium.com/@aayushgairay/is-nepal-really-in-2083-the-doraemon-era-myth-and-the-reality-of-time-2dcda627b9ae',
        image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Will Artificial Intelligence Take Computer Science Jobs?',
        author: 'Ayush Gaire',
        category: 'Artificial Intelligence',
        date: 'Apr 1, 2026',
        readTime: '3 min read',
        tags: ['AI', 'Careers', 'Computer Science'],
        link: 'https://medium.com/@aayushgairay/will-artificial-intelligence-take-computer-science-jobs-e5c9f57a0070',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    },
]
