<template>
  <div :class="$i18n.locale">
    <!-- <Tutorial /> -->

    <h1>{{ $t('hello') }}</h1>

    <h2>{{ $i18n.locale }}</h2>



    <!-- translate page name when change language -->

    <h1>{{ $t('message.home') }}</h1>

    <div>
      <!-- change lang best way -->

      <h1>Lang navigation</h1>
      <nuxt-link :to="switchLocalePath('it')">Italian</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('ar')">Arabic</nuxt-link>

      <!-- change lang way two -->
      <!-- <button @click="changeLanguage('en-US')">EN</button> |
        <button @click="changeLanguage('it-IT')">it</button> |
        <button @click="changeLanguage('ar-EG')">ar</button> | -->
    </div>

    <div>
      <h1>Site navigation</h1>

      {{ $store.state.user }}

      <nuxt-link :to="localePath('/login')">login</nuxt-link>
      <!-- <nuxt-link :to="localePath('/signup')">login</nuxt-link> -->
      <!-- </div> -->

      <nuxt-link :to="localePath('/about')">About</nuxt-link>
      <nuxt-link :to="localePath('/Carousel')">Carousel</nuxt-link>
      <nuxt-link :to="localePath('/')">Home</nuxt-link>

    </div>

    <h1>lang switcher</h1>

    <!-- <nuxt-link v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link> -->

    <!-- <img data-src="@/assets/images/logo.png" class="lazyload" /> -->

    <!-- aos js -->

    <img data-aos="fade-up" src="@/assets/images/blue.png" class="d-block mb-5 mt-5">

    <img data-aos="fade-left" src="@/assets/images/blue.png" class="d-block mb-5 mt-5">

    <img data-aos="fade-right" src="@/assets/images/blue.png" class="d-block mb-5 mt-5">

    <!-- anime js -->
    <div>
      <h1 class="title" v-anime="rotate">Hello World</h1>
    </div>

    <hr />

    <h1>hi from api</h1>

    <p>{{ title }}</p>

    <h3>{{ jjj }}</h3>

    <section>
      <h3>VeeValidate - Nuxt Example:</h3>
      <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
        <input type="text" v-model="value" style="border:2px solid ">
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </section>


    <!-- lightbox gallery -->

    <v-alert type="success"></v-alert>

    <button class="main--btn">main btn</button>


    <h1 class="main_head">main head</h1>
    <h1 class="second--btn">second head</h1>


    <nuxt />

  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: 'IndexPage',

  components: {
    ValidationProvider
  },


  mounted() {
    // this.asyncData();
  },


  // middleware: "log",

  // for work dir
  head: {
    // title: "default page",
    // return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
  },

  data() {
    return {
      title: "",
      value: "",

      jjj: '',

      rotate: {
        rotate: 360,
        backgroundColor: ['#2f495e', '#00c58e'],
        duration: 3000,
        loop: false
      },

    }
  },

  async asyncData({ $axios }) {
    try {
      // let response = await this.$axios.$get("main_page/main");
      return await $axios.$get(process.env.baseUrl + "main_page/main").then(res => {

        return {
          jjj: res.data.content.title
        };

      })

    } catch (err) {

      console.log(err);

    }
  },


  methods: {
    changeLanguage(lang) {
      // Change the i18n context variable's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
      this.$nuxt.refresh();
      this.$nextTick(() => { });
    },

    async asyncData() {
      try {
        // let response = await this.$axios.$get("main_page/main");
        let response = await this.$axios.$get(process.env.baseUrl + "main_page/main");
        console.log(response.data.content.title);
        this.title = response.data.content.title;
        return {
          title: response.data.content.title
        };
      } catch (err) {

        console.log(err);

      }
    },

  },
}
</script>


<style>
/* .en {
  direction: ltr;
  text-align: left;
}

.ar {
  direction: rtl;
  text-align: right;
} */
</style>
