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
          50: '#f7f4fb',
          100: '#efe9f8',
          200: '#ddd0ee',
          300: '#c3addf',
          400: '#a487cc',
          500: '#8865b8',
          600: '#734ca3',
          700: '#5f3f86',
          800: '#4f356e',
          900: '#3f2d58',
        },
        secondary: {
          50: '#f4f5f9',
          100: '#e9ecf4',
          200: '#d4dbe9',
          300: '#b4bfd6',
          400: '#8f9fbe',
          500: '#6f82a7',
          600: '#5a6c8f',
          700: '#485774',
          800: '#39455d',
          900: '#2d364a',
        },
        accent: {
          50: '#faf8fc',
          100: '#f2ecf8',
          200: '#e4d7f1',
          300: '#d0b8e6',
          400: '#b393d6',
          500: '#9870c3',
          600: '#8158aa',
          700: '#6b4690',
          800: '#573a74',
          900: '#47305f',
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
