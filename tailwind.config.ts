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
        primary: {
          light: '#60A5FA',
          main: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#5EEAD4',
          main: '#14B8A6',
          dark: '#0D9488',
        },
        neutral: {
          white: '#FFFFFF',
          gray50: '#F9FAFB',
          gray100: '#F3F4F6',
          gray900: '#111827',
        },
      },
      fontFamily: {
        primary: ['var(--font-hanken)', 'sans-serif'],
        secondary: ['var(--font-playfair)', 'serif'],
      },
      spacing: {
        section: '5rem',
        container: '1.5rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
