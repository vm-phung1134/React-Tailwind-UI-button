/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinner: {
          'hover:before': { width: '100%' },
        },
      },
      animation: {
        spinner: "spinner 1s ease-in",
      },
    },
  },
  plugins: [],
};
