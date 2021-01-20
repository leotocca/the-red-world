export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  publicRuntimeConfig: {
    // The API_KEY should go on a .env file and then imported through process.env to the
    // privateRuntimeConfig but was placed here to make the testing of the demo easier
    API_KEY: 'XFnJJh26Jh5CTdnYINp5SojTu3tGzhij1IMc7srY',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The Red World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@animxyz/core'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@plugins/animxyz'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://api.nasa.gov/mars-photos/api/',
      pathRewrite: {
        '^/api/': '',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
