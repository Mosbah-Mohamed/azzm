// Global page headers

export default {
  // for build

  target: "server",

  head() {
    const i18nHead = this.$nuxtI18nHead({
      addSeoAttributes: true,
      addDirAttribute: true,
    });
    return {
      htmlAttrs: {
        Developer: "Mosbah Mohamed",
        ...i18nHead.htmlAttrs,
      },
      head: {
        titleTemplate: "%s",
        tittle: "Azzm Star", // the title you define. you must put your package-name here, if you want that name.
      },

      // %s refer to every title on page + global title

      titleTemplate: " %s - Azzm Star",
      tittle: "Azzm Star",

      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content: "My Custom Description",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },

        {
          hid: "og:title",
          name: "og:title",
          content: "My Custom Description",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "My Custom Description",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "My Custom Description",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `url`,
        },
        ...i18nHead.meta,
      ],

      // cdn link script
      // body true to put link at end of body tag

      // script: [
      //   {
      //     src: "",
      //     body: true,
      //   },
      // ],

      // cdn link css

      link: [
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "",
        },
        {
          hid: "icon",
          rel: "icon",
          type: "image/x-icon",
          href: "Favicon.png",
        },
        ...i18nHead.link,
      ],
    };
  },

  store: true,

  // Global CSS

  css: [
    "@/assets/scss/main.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
  ],

  // customize progress bar color for router move

  loading: {
    color: "blue",
    height: "3px",
    duration: "8000",
  },

  // customize preloading for website

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },

  layoutTransition: {
    name: "fade",
    mode: "out-in",
  },

  pageTransition: {
    /*
        all animation:
         1- fade :good
         2- intro with it remove mode
         3- fade2
         4- page with it remove mode
         5- fadeOpacity : good
         6- page6 with it remove mode
         7- page7 :good with it remove mode

    */

    name: "intro",
    // mode: "out-in",
  },

  // Plugins to run before rendering page
  plugins: [
    "@/plugins/axios",
    "@/plugins/router",
    { src: "@/plugins/vee-validate" },
    { src: "@/plugins/vue-tel-input" },
    // for save state even if page reload very important
    { src: "@/plugins/vuex-persist", ssr: false },
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/vue-slick-carousel.js" },
    { src: "@/plugins/vue-html2pdf.js", mode: "client", ssr: false },
    { src: "@/plugins/vue-slider-component.js", ssr: false },
    { src: "~/plugins/bootstrap-vue.js", ssr: false },
    // { src: "@/plugins/vue-countup", ssr: false },
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // "nuxt-animejs",
  buildModules: [
    "@nuxtjs/fontawesome",
    // Simple usage
    "@nuxtjs/moment",

    // With options
    [
      "@nuxtjs/moment",
      {
        /* module options */
      },
    ],
  ],

  // Modules
  modules: [
    // "@nuxtjs/auth-next",
    "@nuxtjs/auth",
    "cookie-universal-nuxt",
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "nuxt-lazy-load",
    "nuxt-vue-multiselect",
    [
      "nuxt-sweetalert2",
      {
        // confirmButtonColor: '#FFFFFF'
      },
    ],
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        dir: "ltr",
      },
      {
        name: "Arabic",
        code: "ar",
        iso: "ar-EG",
        file: "ar-Ar.js",
        dir: "rtl",
      },
    ],
    lazy: true,
    // skipSettingLocaleOnNavigate: true,
    // reloadOnLanguageChange: true,
    langDir: "static/",
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    defaultDirection: "rtl",
    detectBrowserLanguage: false,
  },

  axios: {
    baseURL: "https://trainees.azq1.com/azm/Dashboard/api/",
    retry: { retries: 3 },
    headers: {
      common: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "data.token",
          },
          logout: {
            url: "logout",
            method: "post",
            // propertyName: "token",
          },
          // register: {
          //   url: "register",
          //   method: "post",
          //   propertyName: "data",
          // },
          // user: false,
          user: { url: "user", method: "get", propertyName: "data" },
        },

        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        cookie: {
          prefix: "auth.",
          // options: {
          //   path: "/",
          //   expires: 7,
          // },
        },
      },
    },

    // redirect: {
    //   login: "/login",
    //   logout: "/login",
    //   home: "/",
    // },
  },

  build: {
    transpile: ["vee-validate/dist/rules"],

    // for build folder path in cpanel

    publicPath: "https://trainees.azq1.com/azm",
  },

  router: {
    base: "/azm/", //for build path
  },

  env: {
    baseUrl:
      process.env.BASE_URL || "https://trainees.azq1.com/azm/Dashboard/api/",
  },
};
