const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF6464',
      secondary: '#00A8CC',
      dark: '#21243D',
      light: '#ECF7FA',
      gray: defaultColors.gray,
      white: defaultColors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
