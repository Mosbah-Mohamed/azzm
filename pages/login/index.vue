<template>
  <section class="signup">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info" data-aos="fade-up">


            <!-- <h3>{{ loggedIn }}</h3> -->

            <div class="head">
              <h3 class="main_head">{{ $t('login.login_acc') }}</h3>
            </div>

            <p>
              <span>{{ $t('login.no_account') }}</span>

              <nuxt-link :to="localePath({ path: `/signup` })">
                <a href="#" aria-label="login" target="_blank" rel="noopener" class="login">{{ $t('login.create_acc')
                }}</a>
              </nuxt-link>

            </p>

            <button class="share_go">
              <img data-src="@/assets/images/google.svg" title="partner" v-lazy-load alt="partner image" width="20"
                height="100%" />
              <span>{{ $t('login.google_acc') }}</span>
            </button>

            <ValidationObserver v-slot="{ invalid }" ref='observer'>
              <form action="" @submit.prevent="login">

                <ValidationProvider rules="required|email" v-slot="{ errors }" :name="$t('login.email')">
                  <div class="form-group">
                    <input type="email" :placeholder="$t('login.email')" v-model="form.email" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|min:3" :name="$t('login.password')" v-slot="{ errors }">
                  <div class="form-group position-relative">
                    <input :type="[showPassword ? 'text' : 'password']" placeholder="******" required
                      v-model="form.password">
                    <div class="eye" @click="showPassword = !showPassword">
                      <font-awesome-icon :icon="icon" />
                    </div>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-group box_check">

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <nuxt-link :to="localePath('/resetPassword')">{{ $t('login.return') }}</nuxt-link>

                  </a>
                </div>

                <div class="form-group">
                  <button class="sign_btn main--btn" :disabled="invalid" aria-label="sign" title="sign" type="submit"> {{
                    $t('login.login_acc') }}</button>
                </div>


              </form>
            </ValidationObserver>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapActions, mapState, mapMutations } from "vuex";

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "loginPage",

  layout: 'auth-layout',

  head() {
    return {
      title: "Login",
    }
  },

  // middleware: 'auth',

  middleware: 'guest-user',

  components: {
    ValidationProvider,
    ValidationObserver
  },


  // define all properties

  data() {
    return {

      value: '',
      phone: "",

      // for icon show password

      showPassword: false,

      form: {
        email: "",
        password: "",
      },


    }
  },

  //  fetch data on server side only in pages not component ( fetch ,async data)

  // async asyncData({ $axios }) {
  //   try {
  //     // let response = await this.$axios.$get("main_page/main");
  //     return await $axios.$post("login", { form: this.form }).then(response => {

  //       console.log(response.data)

  //       return {

  //       };

  //     }).catch(error => {

  //       console.log("catch" + error.response.data);

  //     })

  //   } catch (error) {

  //     console.log("catch" + error);

  //   }
  // },


  created() {

  },


  computed: {

    ...mapState(['loggedIn']),

    icon() {
      if (this.showPassword) {
        return ["fas", "eye-slash"];
      } else {
        return ["fas", "eye"];
      }
    },
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

    // ...mapActions(['selectedPackage']),
    ...mapMutations(['LOGIN']),

    // send form data method

    async sendData() {

      try {
        await this.$axios.$post('login', this.form).then(response => {

          console.log(response.data)

          this.LOGIN(response.data);


          this.form.email = '';
          this.form.password = '';

          this.$refs.observer.reset();

          this.$swal.fire({
            position: 'center',
            type: 'success',
            title: 'logged in Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })

          this.$router.push(this.localePath({ path: "/" }));

          console.log(this.loggedIn)


        }).catch(error => {
          console.log(error.response.msg)

          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.msg}`,
            timer: 3000,
            confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },


    // login method

    async login() {
      try {
        await this.$auth.loginWith('local', { data: { email: this.form.email, password: this.form.password } }).then(response => {

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.data.msg}`,
            showConfirmButton: false,
            timer: 2000
          })


          console.log('$auth user' + this.$auth)
          this.$router.push(this.localePath({ path: "/" }));
        })


      } catch (error) {
        console.error(error.response.data.msg);

        this.$swal.fire({
          type: 'error',
          text: `${error.response.data.msg}`,
          timer: 2000,
          // confirmButtonColor: '#ff7400',
        })
      }
    }


  }
}
</script>

<style lang="scss" scoped></style>
