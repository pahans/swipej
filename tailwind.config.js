const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      emerald: '#00d6a1',
      white: colors.white,
      black: colors.black,
      gray: colors.gray
    },
    listStyleType: {
      dash: '-',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
