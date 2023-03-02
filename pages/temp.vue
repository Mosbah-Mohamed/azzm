<template>
  <div>

    <!-- link -->

    <a href="#" aria-label="Twitter" target="_blank" rel="noopener" class="social-icon twitter grayscale"></a>

    <!-- input -->

    <label for="fmUserName">Your name</label>
    <input id="fmUserName">


    <!-- button -->

    <button aria-label="Close" title="Close">X</button>

    <!-- img -->

    <!-- <img data-src="@/assets/images/blue.png"  title="" v-lazy-load src="" alt="Girl in a jacket" width="500" height="600" /> -->

    <!-- when use asyncData -->
    <!-- <ul v-for="(post, index) in posts">
          <li>{{ post.title }}</li>
        </ul> -->

    <!-- when use fetch -->

    <!-- <ul v-for="(post, index) in $store.state.posts">
          <li>post.title</li>
        </ul> -->

  </div>
</template>

<script>


import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {

  name: "indexPage",

  head() {
    return {
      title: "temp page",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  // nuxtI18n: {
  //   paths: {
  //     it: '/chi-siamo',
  //     en: '/about'
  //   }
  // },

  // layout:"",

  // transitions: "page6",

  // middleware:['']

  // define all properties

  data() {
    return {
      // blogPost: '',
      // blogCategoryPosts: ''
    }
  },

  //  fetch data on server side only in pages not component ( fetch ,async data)

  // async asyncData({ $axios }) {
  //   try {
  //     // let response = await this.$axios.$get("main_page/main");
  //     return await $axios.$get(process.env.baseUrl + "main_page/main").then(res => {

  //       return {
  //         jjj: res.data.content.title
  //       };

  //     })

  //   } catch (err) {

  //     console.log(err);

  //   }
  // },

  // async asyncData({ $axios }) {

  //   const blogPost = await $axios.get(`setting/description`).then(response =>
  //     console.log(response.data)
  //   ).catch(error => {
  //     console.log(error)
  //   })

  //   const blogCategoryPosts = await $axios.get(`setting/about`).then(response =>
  //     console.log(response.data)
  //   ).catch(error => {
  //     console.log(error)
  //   })

  //   return {
  //     blogPost: blogPost,
  //     blogCategoryPosts: blogCategoryPosts,
  //   }
  // },


  // best way to call api

  asyncData({ $axios }) {
    // return $axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    //   console.log(res)
    //   return {
    //     posts: res
    //   }
    // })
  },

  // best way to store api in vuex store then call it

  fetch({ $axios, store }) {
    // return $axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {

    //   store.commit('updatePosts', res)
    //   console.log(res)
    //   return {
    //     posts: res
    //   }
    // })
  },


  created() {

  },


  computed: {
    ...mapGetters(['sum']),
    ...mapState(['count', 'name'])
  },
  //  when component load

  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    ...mapMutations(['increment3']),
    ...mapActions(['updateIncrement2', 'updateIncrement3']),

  }
}
</script>

<style lang="scss" scoped></style>
