/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        background: "#001414",
        primary: "#00f6ff",
        secondary: "#002929",
        tertiary: "#009ea3",
        dimWhite: "rgba(255, 255, 255, 0.9)",
        dimBlue: "rgba(9, 151, 124)",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "450px",
        "2xl": "1440px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #155e75",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
