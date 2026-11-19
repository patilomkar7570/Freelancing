import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#702D3B",
          50: "#FAF3F4",
          100: "#F2E8E9",
          200: "#E3CCD0",
          300: "#CE9EA6",
          400: "#B06B78",
          500: "#8E3D4F",
          600: "#702D3B", // primary
          700: "#5A232F",
          800: "#421D29", // deep burgundy
          900: "#2F141D",
          950: "#1C0A10",
        },
        ivory: {
          DEFAULT: "#F8F6F2",
          50: "#FDFAF6",
          100: "#F8F6F2", // warm ivory
          200: "#EFECE6",
          300: "#E3DDD4",
          400: "#D3CAC0",
        },
        blush: {
          DEFAULT: "#F2E8E9",
          soft: "#F8F1F2",
          muted: "#EDE1E3",
        },
        charcoal: {
          DEFAULT: "#252326",
          light: "#3A373C",
          dark: "#1A181B",
        },
        mutedText: "#777177",
        borderSoft: "#E8E1DF",
        goldAccent: "#C59B6D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Instrument Serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -2px rgba(112, 45, 59, 0.06), 0 2px 8px -2px rgba(37, 35, 38, 0.04)",
        card: "0 10px 30px -4px rgba(66, 29, 41, 0.07), 0 4px 12px -2px rgba(37, 35, 38, 0.03)",
        elevated: "0 20px 40px -8px rgba(66, 29, 41, 0.12), 0 8px 16px -4px rgba(37, 35, 38, 0.05)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
