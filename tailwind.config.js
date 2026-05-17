/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        'ink-soft': '#0a0a0c',
        'ink-card': '#0d0d11',
        electric: '#1285ff',
        'electric-bright': '#4da3ff',
        'electric-deep': '#0a5fc0',
      },
      fontFamily: {
        display: ['"Clash Display"', 'Georgia', 'serif'],
        sans: ['"Geist"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'electric-grad':
          'linear-gradient(135deg, #1285ff 0%, #4da3ff 50%, #1285ff 100%)',
        'glass-grad':
          'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(18,133,255,0.45)',
        'glow-lg': '0 0 80px -10px rgba(18,133,255,0.55)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'spin-slow': {
          from: { transform: 'rotateY(0deg)' },
          to: { transform: 'rotateY(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
