const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      teal: colors.teal,
      white: colors.white,
      black: colors.black,
      gray: colors.gray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
