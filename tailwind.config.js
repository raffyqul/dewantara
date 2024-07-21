// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/assets/Images/Home/bg-hero.png')",
      },
      colors: {
        primary: "#8C5E2D",
        primary_hover: '#60432C',
        secondary: "#AD7335",

        darkWhite: "#CED4DA",
        whiteText: "#F8F9FA",
        darkBlack: "#212529",
        lightBlack: "#343A40",
        gray: "#6C757D",
        smallBlack: "#495057",
      },
    },
  },
  plugins: [],
};
