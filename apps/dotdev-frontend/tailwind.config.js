module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'tw-dark',
  prefix: 'tw-',
  theme: {
    colors: {
      danger: '#F44336',
      warning: '#FF9800',
      success: '#4CAF50',
      background: '#FFFFFE',
      stroke: '#F2F4F6',
      primary: '#039BE5',
      secondary: '#010E28',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace'],
      icons: ['Material Icons', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
