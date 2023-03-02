

<template>
  <div>
    <!-- http://localhost:3000/blog/post -->
    <h1>hello from post page from blog folder</h1>

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
export default {

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

  data() {
    return {
      posts: []
    }
  },




}
</script>

<style lang="scss" scoped></style>
