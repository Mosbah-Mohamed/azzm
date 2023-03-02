<template>
  <div class="pink">
    <form @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" name="email" required />
      <label for="password">Password</label>
      <input v-model="password" type="password" id="password" name="password" required />
      <button type="submit">Log In</button>
    </form>

    <nuxt-link :to="localePath('/contact-us')">contact</nuxt-link>


    {{ $store.state.user }}

    <button @click="handleLogOut">logout</button>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "loginPage",

  // transition: 'fade2',

  data() {
    return {
      email: '',
      password: '',
    }
  },

  mounted() {
    this.asyncData();
  },


  computed: {
    ...mapState(['name'])
  },

  methods: {

    ...mapActions(['updateSetName']),

    async asyncData() {
      try {
        // let response = await this.$axios.$get("main_page/main");
        let response = await this.$axios.$get(process.env.baseUrl + "main_page/main");
        this.updateSetName(response.data.data.content.title)
        console.log(response.data.data.content.title);
        this.title = response.data.content.title;
        return {
          title: response.data.content.title
        };
      } catch (err) {

        console.log(err);

      }
    },


    async handleLogin() {
      try {
        await this.$axios.post('login', { email: this.email, password: this.password }).then(res => {

          // for set user from api

          this.$store.commit('LOGIN', res.data.data)

          console.log(res)

        }).catch(error => {
          console.log(error)
        })

        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },

    async handleLogOut() {

      // for set user from api

      this.$store.commit('LOGOUT')
      window.localStorage.removeItem('vuex');

    },


  }
}
</script>


<style scoped>
body {
  background-color: pink;
}

.pink {
  background: pink;
}
</style>
