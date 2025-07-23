/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f0d41c', // Brand Yellow
        secondary: '#223366', // Brand Dark Blue
        background: '#FFFFFF', // Brand White
        'brand-yellow': '#f0d41c',
        'brand-blue': '#223366',
        'brand-white': '#FFFFFF',
        'brand-soft-blue': '#3c5282',
      },
    },
  },
  plugins: [],
};
