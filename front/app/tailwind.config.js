const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#c822ff",
        secondary: "#1a6dff",
        fuchsia: colors.fuchsia,
        gray: colors.trueGray
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
