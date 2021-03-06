// import sanityClient from './sanityClient'

// const routesQuery = `
//   {
//     "project": *[_type == "project"],
//   }
// `

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  ssr: true,
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Elea Jeanne Schmitter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Elea Jeanne Schmitter',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Elea Jeanne Schmitter',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Elea Jeanne Schmitter',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'website',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Portfolio of Elea Jeanne Schmitter',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', size: '16x16', href: '/favicon16x16.png' },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/reset.css', '@/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Generate dynamic routes from data from sanity.
   ** Used only for generating static served HTML files
   */
  generate: {
    // routes: () => {
    //   return sanityClient.fetch(routesQuery).then((res) => {
    //     return [...res.sessions.map((item) => `/project/${item.slug.current}`)]
    //   })
    // },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nesting': {},
      },
    },
  },
}
