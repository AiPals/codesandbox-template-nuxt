export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', // For static site generation

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alphabet Practice Sandbox',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'An interactive sandbox for practicing the English alphabet',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Phonetic Font
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Doulos+SIL&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true, // Auto-import components from the components/ directory

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // TypeScript support
    '@nuxt/typescript-build',
    // Class-style components with TypeScript
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // You can include additional Nuxt.js modules here if needed
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // TypeScript configuration
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },

  // Deployment configuration
  router: {
    base: '/<repository-name>/', // Replace <repository-name> with your GitHub repo name
  },

  // Generate configuration
  generate: {
    dir: 'dist', // Directory for generated static files
  },

  // Disable telemetry prompt
  telemetry: false,
}