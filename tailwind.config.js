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
          DEFAULT: '#4f46e5', // indigo-600
          light: '#6366f1',  // indigo-500
          dark: '#4338ca',   // indigo-700
        },
        accent: {
          DEFAULT: '#0ea5e9', // sky-500
          light: '#38bdf8',   // sky-400
          dark: '#0284c7',    // sky-600
        },
        brandRed: '#d32f2f',
      },
    },
  },
  plugins: [],
};
