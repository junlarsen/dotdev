module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx', './articles/**/*.mdx'],
  darkMode: false,
  theme: {
    colors: {
      background: '#fffffe',
      primary: '#ff8906',
      secondary: '#e53170',
      stroke: '#0f0e17'
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