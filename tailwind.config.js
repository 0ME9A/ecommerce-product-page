/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF7D1A",
        "pale-orange": "#FFEDE0",
        "very-dark-blue": "#1D2025",
        "grayish-blue": "#68707D",
        "light-grayish-blue": "#F7F8FD",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
