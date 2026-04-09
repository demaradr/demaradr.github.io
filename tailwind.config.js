/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f1419',
          muted: '#5c6b7a',
        },
        surface: '#f7f8fa',
        accent: {
          DEFAULT: '#1a5f7a',
          hover: '#144a5f',
          subtle: '#e6f2f6',
        },
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
