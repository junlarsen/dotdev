const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#22aed1',
      secondary: '#1c3041',
      tertiary: '#f16b37',
      white: '#fafafe',
      gray: '#e5e7eb'
    },
    fontFamily: {
      'noto-sans': ['Noto Sans', 'sans-serif'],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}