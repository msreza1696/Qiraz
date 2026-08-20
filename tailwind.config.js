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
        charcoal: {
          DEFAULT: '#121212',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
          dark: '#0a0a0a',
        },
        ivory: {
          DEFAULT: '#F9F6F0',
          dark: '#FAF7F2',
          darker: '#F3EFE6',
          light: '#FFFFFB',
        },
        emerald: {
          DEFAULT: '#0D5C3A',
          dark: '#083D26',
          light: '#1B8253',
          bg: '#EAF6F0',
        },
        gold: {
          DEFAULT: '#B89047',
          light: '#C9A662',
          dark: '#926F31',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Amiri', 'Noto Naskh Arabic', 'serif'],
      }
    },
  },
  plugins: [],
}
