/* eslint-env node */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark-purple": "#0E0326",
        "brand-trypan-blue": "#3A0CA3",
        "brand-ultramarine-blue": "#4361EE",
        "brand-vivid-sky-blue": "#4CC9F0",
        "brand-dark-violet": "#7209B7",
        "brand-flickr-pink": "#F72585",
        "brand-snow": "#FFF8FB",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
