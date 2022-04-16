module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  prefix: 'tw-',
  theme: {
    colors: {
      primary: '#039BE5',
      secondary: '#010E28',
      danger: '#F44336',
      warning: '#FF9800',
      success: '#4CAF50',
      background: '#FFFFFE',
      stroke: '#F2F4F6',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
