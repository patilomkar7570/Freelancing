/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ahkun: {
          bg: '#F6F3EB',         // Warm ivory primary background
          white: '#FDFCF8',      // Natural crisp white
          forest: '#263E32',     // Deep forest green for primary CTAs and hero
          pine: '#40594A',       // Pine green accent
          moss: '#8B987B',       // Muted moss accent
          river: '#8DA8A9',      // Lemmenjoki river blue
          timber: '#B58B69',     // Natural weathered timber
          charcoal: '#292C27',   // Primary text
          muted: '#77786F',      // Secondary text
          border: '#DEDCD2',     // Subtle tactile borders
        },
        nordic: {
          bg: '#F6F3EB',
          snow: '#FDFCF8',
          forest: '#263E32',
          pine: '#40594A',
          moss: '#8B987B',
          lake: '#8DA8A9',
          river: '#8DA8A9',
          cabin: '#B58B69',
          timber: '#B58B69',
          clay: '#D3B89D',
          charcoal: '#292C27',
          muted: '#77786F',
          border: '#DEDCD2',
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
