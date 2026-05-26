/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fdfcfb',
        surface: '#f7f5f1',
        card: '#ffffff',
        ink: '#111111',
        'ink-2': '#555555',
        'ink-3': '#8a8a8a',
        border: '#e8e3db',
        'border-light': '#f0ece6',
        gold: '#c4955a',
        'gold-light': '#e8d5b0',
        'gold-pale': '#fdf8f3',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 24px rgba(0,0,0,0.05)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.10)',
        'hero-img': '0 24px 80px rgba(0,0,0,0.12)',
        soft: '0 4px 32px rgba(0,0,0,0.07)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
