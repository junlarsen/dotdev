module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      primary: "#22aed1",
      secondary: "#1c3041",
      tertiary: "#f16b37",
      white: "#fafafe",
      gray: "#e5e7eb"
    },
    fontFamily: {
      "noto-sans": ["Noto Sans", "sans-serif"],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}