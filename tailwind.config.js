/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#a3e635',       // Verde lima del logo MIE
          'lime-hover': '#bef264',
          'lime-dark': '#65a30d',
          dark: '#080c14',         // Obsidian industrial
          surface: '#111827',
          card: '#161f30',
          border: '#1f293d',
          cyan: '#38bdf8'
        },
        whatsapp: {
          DEFAULT: '#25d366',
          hover: '#1ebd5b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

