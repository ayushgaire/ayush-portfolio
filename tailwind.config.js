/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome, editorial. Near-paper background, true black ink.
        bg: '#F5F4EF',
        'bg-deep': '#EDECE6',
        surface: '#FFFFFF',
        'surface-2': '#FAFAF7',
        card: '#FFFFFF',
        ink: '#111111',
        'ink-2': '#5D5D58',
        'ink-3': '#8A8A82',
        'ink-4': '#B8B6AE',
        border: '#D8D6CF',
        'border-light': '#E6E3DB',
        // Aliases retained so legacy references compile; map to monochrome so no gold is visible.
        gold: '#111111',
        'gold-deep': '#111111',
        'gold-light': '#5D5D58',
        'gold-pale': '#EDECE6',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,17,17,0.04)',
        'card-hover': '0 2px 8px rgba(17,17,17,0.06)',
        'hero-img': '0 2px 12px rgba(17,17,17,0.08)',
        soft: '0 1px 3px rgba(17,17,17,0.04)',
        navbar: '0 1px 0 rgba(17,17,17,0.04)',
      },
    },
  },
  plugins: [],
}
