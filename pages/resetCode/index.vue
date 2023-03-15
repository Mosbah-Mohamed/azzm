<template>
  <section class="signup reset_password passcode">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">{{ $t('signup.Enter_reference_number') }}</h3>
            </div>

            <p>
              <span>{{ $t('signup.refernce_email') }}</span>
            </p>


            <form action="">
              <div class="form-group">
                <div class="pass_numbers">
                  <input type="text" v-model="formData.value1" maxlength="1" ref="input1"
                    @keydown.enter="moveToNext($event, 2)">
                  <input type="text" v-model="formData.value2" maxlength="1" ref="input2"
                    @keydown.enter="moveToNext($event, 3)">
                  <input type="text" v-model="formData.value3" maxlength="1" ref="input3"
                    @keydown.enter="moveToNext($event, 4)">
                  <input type="text" v-model="formData.value4" maxlength="1" ref="input4"
                    @keydown.enter="moveToNext($event, 5)">
                  <input type="text" v-model="formData.value5" maxlength="1" ref="input5">
                </div>
              </div>


              <button class="sign_btn main--btn" aria-label="sign" title="sign" type="button" @click="passCodeMethod">{{
                $t('contact.send')
              }}</button>
              <a href="#" target="_blank" rel="noopener noreferrer" class="resend">
                <span>{{ $t('signup.I_did_not_get_it') }}</span>
                <span class="number">{{ $t('signup.Send_the_number') }}</span>
              </a>


            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapState } from "vuex";

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

      // input values

      formData: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
      }

    }
  },


  created() {

  },


  computed: {

    ...mapState(['verify_token'])

  },
  //  when component load

  mounted() {

    // console.log('verify_token' + this.verify_token)

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    moveToNext(event, nextInput) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.$refs[`input${nextInput}`].focus();
      }
    },


    // pass code

    async passCodeMethod() {
      try {
        return await this.$axios.post(`verify/reset/password`,
          {
            code: `${this.formData.value5}${this.formData.value4}${this.formData.value3}${this.formData.value2}${this.formData.value1}`,
            verify_token: this.verify_token
          }).then(response => {

            this.formData.value1 = '';
            this.formData.value2 = '';
            this.formData.value3 = '';
            this.formData.value4 = '';
            this.formData.value5 = '';

            this.$router.push(this.localePath({ path: `/resetCode` }));

            this.$swal.fire({
              position: 'center',
              type: 'success',
              text: `${response.data.message}`,
              showConfirmButton: false,
              timer: 2000
            })

          }).catch(error => {
            console.log(error)

            this.$swal.fire({
              type: 'error',
              text: `${error.response.data.message}`,
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
