/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#083058', // Logo primary dark navy
          950: '#03192f', // Logo deep night background
          navy: '#083058',
          teal: '#00839a',
          cyan: '#0ea5e9',
          green: '#2ea44f',
          leaf: '#4ade80',
        },
        romantic: {
          pink: '#38bdf8',
          light: '#f0fdfa',
          DEFAULT: '#00839a',
        },
        electric: {
          cyan: '#38bdf8',
          DEFAULT: '#0284c7',
        },
        dream: {
          purple: '#2dd4bf',
          DEFAULT: '#059669',
        },
        soft: {
          lavender: '#bae6fd',
        },
        warm: {
          white: '#f8fafc',
        },
        accent: {
          light: '#f1f5f9',
          DEFAULT: '#e2e8f0',
          dark: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Poppins', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
