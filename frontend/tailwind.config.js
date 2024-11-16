import { defineConfig } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '80px',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      colors: {
        'earth-green': '#3B945E',
        'forest-green': '#2C6E49',
        'light-green': '#65CCB8',
        'aqua-green': '#57BA98',
        'deep-green': '#004D00',
      },
    },
  },
  plugins: [],
};
