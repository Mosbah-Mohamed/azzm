<template>
  <section class="signup">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">{{ $t('signup.create_account') }}</h3>
            </div>

            <p>
              <span>{{ $t('signup.already_have_account') }}</span>
              <nuxt-link :to="localePath('/login')">
                <a href="#" aria-label="login" target="_blank" rel="noopener" class="login">
                  {{ $t('login.login_acc') }}</a>
              </nuxt-link>
            </p>

            <button class="share_go" @click="whenUpload">
              <img data-src="@/assets/images/google.svg" title="partner" v-lazy-load alt="partner image" width="20"
                height="100%" />
              <span>{{ $t('login.google_acc') }}</span>
            </button>

            <ValidationObserver v-slot="{ invalid }" ref='observer'>
              <form action="" @submit.prevent="signup">

                <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="text" v-model="formData.name" :placeholder="$t('contact.name')" />
                    <span>{{ errors[0] }}</span>
                  </div>

                </ValidationProvider>
                <!-- |email_end -->
                <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="email" :placeholder="$t('contact.email')" v-model="formData.email" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <vue-tel-input :placeholder="'Enter phone number'" :dropdownOptions="dropdownOptions"
                  :inputOptions="inputOptions" defaultCountry="sa" required v-model.trim="formData.phone"></vue-tel-input>


                <!-- |pa -->
                <ValidationProvider rules="required|min:9" v-slot="{ errors }" name="password">
                  <div class="form-group position-relative">
                    <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                      v-model.trim="formData.password" ref="password" @input="checkPasswordStrength">
                    <div class="eye" @click="showPassword = !showPassword">
                      <font-awesome-icon :icon="icon" />
                    </div>
                    <span>{{ errors[0] }}</span>

                    <div class="pass_metre d-flex" v-if="passwordStrength">
                      <div :class="['strength-meter', `strength-${passwordStrength}`]"></div>
                      <p>{{ passwordStrengthText }}</p>
                    </div>


                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|confirmed:password|min:9" v-slot="{ errors }"
                  name="password_confirmation">
                  <div class="form-group position-relative">
                    <input :type="[showPassword2 ? 'text' : 'password']" :placeholder="$t('signup.confirm_pass')" required
                      v-model.trim="formData.password_confirmation" data-vv-as="password">
                    <span class="eye" @click="showPassword2 = !showPassword2">
                      <font-awesome-icon :icon="icon2" />
                    </span>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required" :name="$t('login.address')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="text" v-model.trim="formData.address" :placeholder="$t('login.address')" />
                    <span>{{ errors[0] }}</span>
                  </div>

                </ValidationProvider>


                <ValidationProvider rules="required" name="gender" v-slot="{ errors }">

                  <div class="form-group">
                    <select v-model="formData.gender">
                      <!-- <option value="" selected disabled hidden>Choose here</option> -->
                      <option v-for="option in options" :value="option.key">{{ option.value }}</option>
                    </select>

                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="form-group box_check">
                    <input type="checkbox" v-model="formData.agree_on_terms" />
                    <p> {{ $t('signup.I_agree') }}</p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <nuxt-link :to="localePath('/termsandconditions')">{{ $t('signup.term') }}</nuxt-link>
                    </a>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-group">
                  <button class="sign_btn main--btn" aria-label="sign" :disabled="invalid" title="sign" type="submit">{{
                    $t('signup.create_account') }}</button>
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

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "signPage",

  layout: 'auth-layout',

  head() {
    return {
      title: "Sign Up",
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

      passwordStrength: 0,
      // for icon show password

      showPassword: false,
      showPassword2: false,

      value: '',
      phone: "",

      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        agree_on_terms: 1,
        address: '',
        gender: 0,
        password_confirmation: ''
      },

      options: [
        { key: 0, value: 'man' },
        { key: 1, value: 'women' },
      ],

      // vue tel input options

      dropdownOptions: {
        showDialCodeInSelection: true,
        showFlags: true,
        showDialCodeInList: true
      },
      inputOptions: {
        required: true,
        maxlength: 14,
        // showDialCode: true
      }
    }
  },


  created() {

  },

  computed: {
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

    passwordStrengthText() {
      if (this.passwordStrength === 0) {
        return 'Weak password'
      } else if (this.passwordStrength === 1) {
        return 'weak password'
      } else if (this.passwordStrength === 2 || this.passwordStrength === 3) {
        return 'medium password'
      } else if (this.passwordStrength >= 4) {
        return 'strong password'
      } else {
        return 'Very strong password'
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

    checkPasswordStrength() {
      // Check password strength and update the meter
      const strength = this.calculatePasswordStrength(this.formData.password)
      console.log(strength)
      this.passwordStrength = strength
    },

    calculatePasswordStrength(password) {
      // Calculate password strength and return a value between 0 and 4
      // You can use any algorithm you like to calculate the strength
      // Here is a simple example:

      let strength = 0

      if (password.length >= 8) {
        strength++
      }

      if (/[a-z]/.test(password)) {
        strength++
      }

      if (/[A-Z]/.test(password)) {
        strength++
      }

      if (/[0-9]/.test(password)) {
        strength++
      }
      if (/(?=.*\W)/.test(password)) {
        strength++
      }

      return strength
    },


    // login method

    async signup() {
      try {

        await this.$axios.$post('register', this.formData).then(response => {

          // this.$router.push('/')

          console.log(response)

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 2000
          })

          // login with specific data

          this.$auth.loginWith('local', {
            data: {
              email: this.formData.email,
              password: this.formData.password
            },
          })


        }).catch(error => {
          console.log('fail' + error.response.data.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 2000,
            // confirmButtonColor: '#ff7400',
          })

        })



        // login with specific data

        // await this.$auth.loginWith('local', {
        //   data: {
        //     email: this.formData.email,
        //     password: this.formData.password
        //   },
        // })




      } catch (error) {
        console.error(error)
      }
    },

    whenUpload() {
      this.$swal.fire({
        position: 'center',
        type: 'warning',
        title: 'بيتم تنفيذها علي الدومين الرسمي',
        showConfirmButton: false,
        timer: 3000
      });
    }

  }
}
</script>

<style lang="scss" scoped>
.strength-meter {
  width: 100%;
  height: 10px;
  margin-top: 10px;
}

.strength-0,
.strength-1 {
  background-color: #f00;
}

.strength-2,
.strength-3 {
  background-color: #ff0;
}


.strength-4,
.strength-5 {
  background-color: #0f0;
}

.pass_metre {
  align-items: baseline;
  gap: 5px;

  p {
    white-space: nowrap;
    font-size: 14px;
    font-weight: 800;
  }

}
</style>
