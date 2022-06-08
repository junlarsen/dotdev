module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'tw-dark',
  prefix: 'tw-',
  theme: {
    colors: {
      danger: '#F44336',
      warning: '#FF9800',
      success: '#4CAF50',
      background: '#FFFFFE',
      black: '#000000',
      stroke: '#F2F4F6',
      primary: '#DA1B5E',
    },
    fontFamily: {
      noto: ['Noto Sans JP', 'Noto Sans', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace'],
      icons: ['Material Icons', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
