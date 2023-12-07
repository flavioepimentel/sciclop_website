/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    visibility: ['responsive'],
    visibility: ['responsive', 'hover', 'focus'],
    },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fffbf0",
        secondary: "#808080",
        dimWhite: "rgba(0, 0, 0, 1)",
        dimBlue: "rgba(121, 121, 121, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
