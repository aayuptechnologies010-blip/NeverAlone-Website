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
          50: '#f0f3fa',
          100: '#e1e7f6',
          200: '#c3d1ed',
          300: '#a5bbe4',
          400: '#6a8ed2',
          500: '#2f61c0',
          600: '#2a57ad',
          700: '#1c3a73',
          800: '#152c56',
          900: '#040d2e', // Logo dominant blue
          950: '#020617', // Deep midnight navy / near black
        },
        romantic: {
          pink: '#f9a8d4', // pink-300
          light: '#fdf2f8', // pink-50
          DEFAULT: '#db2777', // pink-600
        },
        electric: {
          cyan: '#22d3ee', // cyan-400
          DEFAULT: '#06b6d4', // cyan-500
        },
        dream: {
          purple: '#c084fc', // purple-400
          DEFAULT: '#9333ea', // purple-600
        },
        soft: {
          lavender: '#e9d5ff', // purple-200
        },
        warm: {
          white: '#fcfcfc', // warm white
        },
        accent: {
          light: '#f0f0f0',
          DEFAULT: '#e5e7eb',
          dark: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
