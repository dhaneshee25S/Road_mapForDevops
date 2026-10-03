/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.18)',
      },
      colors: {
        accent: {
          50: '#e7f4ff',
          500: '#52a8ff',
          600: '#2d7ef7',
        },
      },
    },
  },
  plugins: [],
};
