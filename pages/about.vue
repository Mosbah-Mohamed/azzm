<template>
  <div>
    <h1>{{ $t('message.about') }} page</h1>

    <h3> hello from vuex state {{ count + name}}</h3>

    <h2>map getters {{ sum }}</h2>

    <button @click="inc">increment</button>
    <br /><br />
    <button @click="inc2">increment2 </button>
    <br /><br />
    <button @click="inc3">increment3 </button>

    <br /><br />

    <button @click="logout">logout</button>


    <!-- lazy load images -->


    <img data-src="@/assets/images/blue.png" alt="" title="" v-lazy-load />
    <img data-src="@/assets/images/header.webp" alt="" title="" v-lazy-load />
    <img data-src="@/assets/images/Mastercard-logo.svg.png" alt="" title="" v-lazy-load />
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
  nuxtI18n: {
    paths: {
      it: '/chi-siamo',
      en: '/about'
    }
  },

  computed: {
    ...mapGetters(['sum']),
    ...mapState(['count', 'name'])
  },

  // transition: "intro",

  // best way to declare state of store



  methods: {

    ...mapMutations(['increment3']),
    ...mapActions(['updateIncrement2', 'updateIncrement3']),




    async logout() {
      await this.$auth.logout()
      // this.$router.push('login');
    },

    inc() {
      this.$store.dispatch('increment')
    },

    inc2() {
      this.$store.dispatch('updateIncrement2', 10)
    },

    inc3() {
      this.updateIncrement3(40)
    }
  }

}
</script>

<style lang="scss" scoped>
img {
  margin: 300px 0;
}
</style>
