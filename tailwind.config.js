/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f2ff',
          100: '#ede5ff',
          200: '#ddccff',
          300: '#c3a8ff',
          400: '#a47cf9',
          500: '#8858ec',
          600: '#733fda',
          700: '#5f31ba',
          800: '#4e2a96',
          900: '#41257a',
        },
        secondary: {
          50: '#f7f4ff',
          100: '#efe8ff',
          200: '#e1d3ff',
          300: '#ccb1ff',
          400: '#b087ff',
          500: '#955ff5',
          600: '#7f45e2',
          700: '#6b35c0',
          800: '#562d9b',
          900: '#46297d',
        },
        accent: {
          50: '#fbf8ff',
          100: '#f5efff',
          200: '#ebddff',
          300: '#dcc1ff',
          400: '#c79cff',
          500: '#af74ff',
          600: '#9852f2',
          700: '#833ad8',
          800: '#6b31b0',
          900: '#562c8a',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Gotham', 'Gotham SSm', 'Avenir Next', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Gotham', 'Gotham SSm', 'Avenir Next', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
