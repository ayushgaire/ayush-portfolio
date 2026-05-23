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

        live: 'https://thebasicgame-8huwgsenv-ayushgaires-projects.vercel.app/',

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