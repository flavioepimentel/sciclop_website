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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
};
