/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'ui-serif', 'Georgia', 'serif'],
      },
      // Theme tokens are defined as CSS variables in src/index.css so dark mode only swaps values.
      colors: {
        canvas: token('canvas'),
        ink: {
          DEFAULT: token('ink'),
          muted: token('ink-muted'),
        },
        surface: token('surface'),
        line: token('line'),
        accent: {
          DEFAULT: token('accent'),
          hover: token('accent-hover'),
          subtle: token('accent-subtle'),
          contrast: token('accent-contrast'),
        },
        night: '#0b1015',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 20, 25, 0.06), 0 8px 24px rgba(15, 20, 25, 0.06)',
        featured: '0 1px 2px rgba(15, 20, 25, 0.08), 0 20px 48px rgba(26, 95, 122, 0.12)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
