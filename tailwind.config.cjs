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
        secondary: "#002729",
        tertiary: "#009ea3",
        dimBlue: "rgba(9, 151, 124)",
        "black-100": "#002020",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        //change to purple colors
        //   background: "#050816",
        //   primary: "#aaa6c3",
        //           secondary: "#151030",
        //   tertiary: "#151030",
        //   dimPurple: "rgba(75,0,130)",
        //   dimWhite: "rgba(255, 255, 255, 0.9)",
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
        // card: "0px 35px 120px -15px #211e35", //change to purple colors
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
