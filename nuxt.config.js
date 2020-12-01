
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/animate.min.css',
    '@/assets/css/custom-bs.css',
    '@/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/mixins/images',
    // './plugins/mixins/candidate',
    './plugins/axios',
    {src: '~/plugins/signature.js',mode:'client'},
    {src: '~/plugins/validation.js',mode:'client'},
    {src: '~/plugins/select2.js',mode:'client'},
    // {src: '~/plugins/i18n.js',mode:'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-sweetalert2',
    ['@nuxtjs/fontawesome',
      {
        allowOutsideClick: false,
      }
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  fontawesome:{
      component: 'fa',
      icons:{
        solid:true
      }
  },

  axios: {
    // baseURL: 'http://127.0.0.1:8000/api/v1'
    baseURL: 'http://api.stevejobs.com.au/api/v1', // Live
   // proxyHeaders: false,
  //  credentials: true
 },

  auth: {
    strategies: {
      local: {
        endpoints:{
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/auth/my-profile', method: 'get', propertyName: 'user' },
        }
      }
    },
    redirect:{
      home: '/',
      login: '/login'
    }
 },

 router: {
  middleware: ['clearValidationErrors']
 },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  ** auth modify see : https://dev.to/stefant123/secure-authentication-in-nuxt-spa-with-laravel-as-back-end-19a9
  ** https://www.digitalocean.com/community/tutorials/implementing-authentication-in-nuxtjs-app
  */
  build: {
  }
}
