module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx', './articles/**/*.mdx'],
  darkMode: false,
  theme: {
    colors: {
      background: '#0f0e17',
      primary: '#ff8906',
      secondary: '#e53170',
      stroke: '#a7a9be'
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