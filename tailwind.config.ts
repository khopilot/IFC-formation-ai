import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs françaises
        "fr-blue": "#0055A4",
        "fr-white": "#FFFFFF",
        "fr-red": "#EF4135",
        
        // Couleurs modernes pour l'IA
        "ai-primary": "#0055A4",
        "ai-secondary": "#3A86FF",
        "ai-accent": "#EF4135",
        "ai-light": "#F5F7FF",
        "ai-dark": "#1E293B",
        "ai-gray": "#64748B",
        
        // Couleurs pour les gradients
        "gradient-start": "#0055A4",
        "gradient-mid": "#3A86FF",
        "gradient-end": "#00A6FB",
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.svg')",
        'gradient-fr': 'linear-gradient(to right, #0055A4, #FFFFFF, #EF4135)',
        'gradient-ai': 'linear-gradient(135deg, #0055A4 0%, #3A86FF 50%, #00A6FB 100%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, #0055A4, #3A86FF, #00A6FB, #0055A4)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'ai': '0 4px 14px 0 rgba(0, 85, 164, 0.15)',
        'ai-hover': '0 10px 25px rgba(0, 85, 164, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config; 