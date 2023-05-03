<template>
  <section class="signup reset_password">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">{{ $t('signup.get_in_pass') }}</h3>
            </div>

            <ValidationObserver v-slot="{ invalid }" ref='observer'>
              <form action="" @submit.prevent="changePassword">

                <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                  <div class="form-group position-relative">
                    <input :type="[showPassword ? 'text' : 'password']" :placeholder="$t('courses.new_password')" required
                      v-model="formData.new_password">
                    <span class="eye" @click="showPassword = !showPassword">
                      <font-awesome-icon :icon="icon" />
                    </span>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required||min:8" v-slot="{ errors }" name="password">
                  <div class="form-group position-relative">
                    <input :type="[showPassword2 ? 'text' : 'password']" :placeholder="$t('signup.confirm_pass')" required
                      v-model="formData.confirm_pass">
                    <span class="eye" @click="showPassword2 = !showPassword2">
                      <font-awesome-icon :icon="icon2" />
                    </span>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>


                <div class="form-group">
                  <button class="sign_btn main--btn" aria-label="sign" :disabled="invalid" title="sign" type="submit">{{
                    $t('contact.send') }} </button>
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


import { mapMutations, mapState } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "resetPasswordPage",

  layout: 'auth-layout',

  head() {
    return {
      title: "Change password",
    }
  },

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
      showPassword2: false,

      formData: {
        new_password: "",
        confirm_pass: ""
      },

    }
  },

  created() {

  },


  computed: {

    ...mapState(['verify_token']),

    icon() {
      if (this.showPassword) {
        return ["fas", "eye-slash"];
      } else {
        return ["fas", "eye"];
      }
    },

    icon2() {
      if (this.showPassword2) {
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

    ...mapMutations(['SET_token']),

    // reset email

    async changePassword() {
      try {
        return await this.$axios.post(`verify/reset/password/change`,
          {
            password: this.formData.new_password,
            password_confirmation: this.formData.confirm_pass,
            verify_token: this.verify_token
          }).then(response => {

            this.formData.password = '';

            // this.$store.commit('SET_token', response.data.verify_token)
            this.SET_token(response.data.verify_token)

            this.$router.push(this.localePath({ path: `/login` }));

            this.$swal.fire({
              position: 'center',
              type: 'success',
              text: `${response.data.msg}`,
              showConfirmButton: false,
              timer: 2000
            })

          }).catch(error => {
            console.log(error)

            this.$swal.fire({
              type: 'error',
              text: `${error.response.data.msg}`,
              timer: 2000,
              // confirmButtonColor: '#ff7400',
            })

          })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

  }
}
</script>

<style lang="scss" scoped></style>
