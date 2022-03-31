module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/App.jsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      aspectRatio: {
        poster: '2 / 3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
