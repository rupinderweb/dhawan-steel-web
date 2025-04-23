
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      colors: {
        steel: {
          DEFAULT: "#4B5563",
        },
        midnight: {
          DEFAULT: "#1E293B",
        },
        copper: {
          DEFAULT: "#B87333",
        },
        silver: {
          DEFAULT: "#9CA3AF",
        },
        background: "#F3F4F6",
        white: "#FFFFFF",
        light: "#F3F4F6",
        primary: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#B87333",
        },
        // For tailwind-shadcn compat:
        secondary: {
          DEFAULT: "#4B5563",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      boxShadow: {
        rich: '0 4px 32px 0 rgba(30,41,59,0.08), 0 1.5px 9px 0 rgba(184,115,51,0.08)',
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(120deg, rgba(30,41,59,0.70) 60%, rgba(75,85,99,0.80) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

