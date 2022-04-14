module.exports = {
  content: ['./src/**/*.jsx', './index.html'],
  theme: {
    extend: {
      screens: {
        jl: '321px',
      },
      aspectRatio: {
        poster: '2 / 3',
        hal9000: '22 / 65',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
