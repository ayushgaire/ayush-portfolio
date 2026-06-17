/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ece6d8',
        'bg-deep': '#e0d9c8',
        surface: '#f5f0e3',
        'surface-2': '#faf6ec',
        card: '#ffffff',
        ink: '#0f0f0f',
        'ink-2': '#3d3d3d',
        'ink-3': '#6b6b6b',
        'ink-4': '#9a9a9a',
        border: '#d4cdba',
        'border-light': '#e0d9c8',
        gold: '#b08344',
        'gold-deep': '#8c6532',
        'gold-light': '#d4ad77',
        'gold-pale': '#f7eddc',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 24px rgba(60,45,20,0.06)',
        'card-hover': '0 16px 56px rgba(60,45,20,0.12)',
        'hero-img': '0 24px 80px rgba(60,45,20,0.16)',
        soft: '0 4px 32px rgba(60,45,20,0.08)',
        navbar: '0 4px 24px rgba(60,45,20,0.06)',
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
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
