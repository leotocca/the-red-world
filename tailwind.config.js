module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandblack: '#36393B',
        brandgray: '#BFCDE0',
        brandwhite: '#FEFCFD',
        brandred: '#DA2C38',
        brandgreen: '#90BE6D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
