<template>
  <section class="signup reset_password">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">{{ $t('login.Password_Recovery') }}</h3>
            </div>

            <p>
              <span>{{ $t('login.email_to_receive') }}</span>
            </p>


            <ValidationObserver v-slot="{ invalid }" ref='observer'>
              <form action="" @submit.prevent="resetEmail">

                <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="email" :placeholder="$t('contact.email')" v-model="formData.email" />
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


import { mapMutations } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "resetPasswordPage",

  layout: 'auth-layout',

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

      formData: {
        email: ""
      },

    }
  },

  created() {

  },


  computed: {


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

    async resetEmail() {
      try {
        return await this.$axios.post(`reset/password`, this.formData).then(response => {

          this.formData.email = '';

          // this.$store.commit('SET_token', response.data.verify_token)
          this.SET_token(response.data.verify_token)

          this.$router.push(this.localePath({ path: `/resetCode` }));

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
