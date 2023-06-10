/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-100' : "var(--primary-100)",
        'primary-50' : "var(--primary-50)",
        'primary-10' : "var(--primary-10)",
        'base-100' : "var(--base-100)",
        'base-150' : "var(--base-150)",
        'base-200' : "var(--base-200)",
        'base-300' : "var(--base-300)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
