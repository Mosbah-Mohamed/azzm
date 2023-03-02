<template>
  <main>
    <LazyHomeHero />
    <LazyHomeAboutAzzm />
    <LazyHomeCourses />
    <LazyHomeWhyUs />
    <LazyHomeArticles />

    <div class="chat_icon flex-center">
      <img data-src="@/assets/images/chat.svg" title="chat" v-lazy-load alt="chat image" width="100%" height="100%" />
    </div>

    <button class="scroll-to-top up" v-show="showButton" @click="scrollToTop">
      <font-awesome-icon :icon="['fas', 'plane-up']" />
    </button>
  </main>
</template>

<script>


export default {

  name: "indexPage",

  // head() {
  //   return {
  //     title: "temp page",
  //     meta: [
  //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //       { hid: 'description', name: 'description', content: 'My custom description' }
  //     ]
  //   }
  // },



  data() {
    return {
      showButton: false
    }
  },



  async asyncData({ $axios, app, route }) {
  },




  computed: {
  },
  //  when component load

  mounted() {

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },


  // All methods and logic

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      this.showButton = window.pageYOffset > 300;
    }

  }
}
</script>

<style lang="scss" scoped>
.chat_icon {
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 50px;
  width: 74px;
  height: 74px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgb(189 204 236 / 45%);
  cursor: pointer;
  z-index: 999;

  img {
    width: 33px;
    height: 33px
  }
}
</style>
