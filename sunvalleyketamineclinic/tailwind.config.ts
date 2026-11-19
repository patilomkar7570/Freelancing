import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F5F0",
          50: "#FCFBF9",
          100: "#F7F5F0",
          200: "#EFECE3",
        },
        forest: {
          DEFAULT: "#263D35",
          950: "#0F1A16",
          900: "#14231E",
          850: "#1A2C26",
          800: "#263D35",
          700: "#324E44",
          600: "#416457",
        },
        sage: {
          DEFAULT: "#A7B5A4",
          50: "#F4F6F3",
          100: "#EBF0E9",
          200: "#DCE4DA",
          300: "#C4D2C0",
          400: "#A7B5A4",
          500: "#8B9C87",
          600: "#6F806C",
        },
        stone: {
          DEFAULT: "#E8E3D9",
          50: "#FAF9F6",
          100: "#F2EFE9",
          200: "#E8E3D9",
          300: "#D8D1C4",
          400: "#C7BEAD",
        },
        taupe: {
          DEFAULT: "#B6AA9C",
          100: "#E8E3DC",
          200: "#D7D0C7",
          300: "#B6AA9C",
          400: "#988B7C",
          500: "#7A6D5E",
        },
        charcoal: {
          DEFAULT: "#292B28",
          950: "#1A1B19",
          900: "#292B28",
          800: "#3A3D39",
          700: "#4D504B",
          600: "#656963",
          500: "#838780",
          400: "#A4A8A1",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.03em",
        wider: "0.06em",
        widest: "0.12em",
        editorial: "0.16em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(41, 43, 40, 0.04), 0 1px 2px -1px rgba(41, 43, 40, 0.04)",
        card: "0 4px 20px -2px rgba(38, 61, 53, 0.05), 0 2px 6px -1px rgba(38, 61, 53, 0.03)",
        elevated: "0 12px 36px -4px rgba(38, 61, 53, 0.08), 0 4px 12px -2px rgba(38, 61, 53, 0.04)",
        deep: "0 24px 48px -12px rgba(20, 35, 30, 0.16)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
