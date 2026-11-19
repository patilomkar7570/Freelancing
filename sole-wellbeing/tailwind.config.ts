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
        teal: {
          950: "#051D21",
          900: "#0A3B42",
          850: "#0E474F",
          800: "#13545E",
          700: "#1D6D7A",
          600: "#278796",
          500: "#36A2B3",
          400: "#57BCD0",
          300: "#85D4E3",
          100: "#E2F4F7",
          50: "#F1FAFB",
        },
        seafoam: {
          DEFAULT: "#4BA593",
          50: "#F0F8F6",
          100: "#DCF0EC",
          200: "#BDE2DA",
          300: "#98D0C4",
          400: "#6CBBAA",
          500: "#4BA593",
          600: "#3B8A7A",
        },
        cream: {
          DEFAULT: "#FBF9F5",
          50: "#FFFFFF",
          100: "#FBF9F5",
          200: "#F4F0E6",
          300: "#EBE4D5",
        },
        pebble: {
          DEFAULT: "#EBE6DD",
          100: "#F5F2EC",
          200: "#EBE6DD",
          300: "#DBD3C5",
          400: "#C9BEAC",
        },
        slatecharcoal: {
          DEFAULT: "#1E2627",
          900: "#1E2627",
          800: "#2D383A",
          700: "#3F4E51",
          600: "#55676A",
          500: "#708488",
          400: "#92A5A9",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(10, 59, 66, 0.04), 0 1px 3px rgba(10, 59, 66, 0.02)",
        card: "0 6px 24px -4px rgba(10, 59, 66, 0.06), 0 2px 8px -2px rgba(10, 59, 66, 0.04)",
        elevated: "0 16px 40px -6px rgba(10, 59, 66, 0.1), 0 4px 16px -2px rgba(10, 59, 66, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
