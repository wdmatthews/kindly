import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  router: {
    base: '/kindly/',
  },
  head: {
    titleTemplate: '%s | Kindly',
    title: 'Welcome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A sprinkle of kindness in digital education.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  css: [
    '~/assets/css/utilities.css',
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.lightBlue.lighten3,
          accent: colors.yellow.lighten3,
          secondary: colors.blueGrey.base,
          info: colors.cyan.base,
          success: colors.green.base,
          warning: colors.amber.base,
          error: colors.red.lighten2,
        },
      },
    },
  },
  build: {},
}
