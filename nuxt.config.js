// Global page headers

export default {
  // for build

  // target: "server",

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
    { src: "@/plugins/vue-html2pdf.js", mode: "client" },
    // { src: "@/plugins/vue-countup", ssr: false },
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-animejs", "@nuxtjs/fontawesome"],

  // Modules
  modules: [
    // "@nuxtjs/auth-next",
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
    baseURL: "https://trainees.azq1.com/azmstar/api/",
    retry: { retries: 3 },
    headers: {
      common: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    },
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: "https://studyblood.com/Dashboard/api/login",
  //           method: "post",
  //           propertyName: "token",
  //         },
  //         logout: {
  //           url: "https://studyblood.com/Dashboard/api/logout",
  //           method: "get",
  //           propertyName: "token",
  //         },
  //         user: {
  //           url: "https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/user",
  //           method: "get",
  //           propertyName: "data",
  //         },
  //       },
  //       // tokenRequired: true,
  //     },
  //   },
  //   // watchLoggedIn: true,
  //   redirect: {
  //     login: "/login",
  //     logout: "/login",
  //     home: "/",
  //   },
  // },

  build: {
    transpile: ["vee-validate/dist/rules"],

    // for build folder path in cpanel

    // publicPath: "https://a-azzam.azq1.com/Dzit",
  },

  router: {
    // base: "/Dzit/", for build path
    // middleware: "log",
    middleware: ["auth"],
    // scrollBehavior(to, from, savedPosition) {
    //   if (to.hash) {
    //     return { selector: to.hash };
    //   } else if (process.client) {
    //     return { x: 0, y: 0 };
    //   } else {
    //     return savedPosition;
    //   }
    // },
  },

  env: {
    baseUrl: process.env.BASE_URL || "https://trainees.azq1.com/azmstar/api/",
  },
};
