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
        primary: {
          DEFAULT: "#25A7DC",
          hover: "#1D8AB7",
          container: "#25A7DC",
          dark: "#1A2530",
        },
        slate: {
          charcoal: "#0F172A",
          navy: "#1A2530",
        },
        steel: "#708090",
        "bg-light": "#F8FAFC",
        "safety-blue-muted": "#EBF7FC",
        "ice-white": "#F8FAFC",
        "surface-variant": "#64748B",
        "outline-variant": "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",      // 16px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem",   // 32px
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(37, 167, 220, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 20px 40px -15px rgba(37, 167, 220, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
