module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx', './articles/**/*.mdx'],
  darkMode: false,
  theme: {
    colors: {
      background: '#1d2021',
      white: '#ebdbb2',
      grey: '#928374',
      red: '#fb4934',
      green: '#b8bb26',
      yellow: '#fabd2f',
      blue: '#83a598',
    },
    fontFamily: {
      'jb': ['Jetbrains Mono', 'monospace'],
      'nunito': ['Nunito', 'sans-serif']
    },
    listStyleType: {
      circle: 'circle',
      decimal: 'decimal'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}