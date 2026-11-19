/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          bg: '#F5F2E9',         // Warm ivory primary background
          surface: '#EAE8DE',    // Secondary background
          snow: '#FCFCF9',       // Crisp snow white
          forest: '#263D32',     // Deep northern spruce forest
          pine: '#405B48',       // Pine green accent
          cabin: '#A4513B',      // Warm Finnish cabin red
          lake: '#9EB8B5',       // Kemijoki river mist / lake blue
          charcoal: '#292B27',   // Primary text
          muted: '#77766D',      // Secondary text
          border: '#DDDCD2',     // Gentle tactile borders
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      screens: {
        'xs': '375px',
        '2xl': '1536px',
        '3xl': '1920px',
        'ultrawide': '2560px',
      }
    },
  },
  plugins: [],
}
