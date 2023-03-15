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

            <button class="share_go">
              <img data-src="@/assets/images/google.svg" title="partner" v-lazy-load alt="partner image" width="20"
                height="100%" />
              <span>{{ $t('login.google_acc') }}</span>
            </button>

            <ValidationObserver v-slot="{ invalid }" ref='observer'>
              <form action="" @submit.prevent="signup">

                <ValidationProvider rules="required" :name="$t('contact.name')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="text" v-model="formData.name" :placeholder="$t('contact.name')" />
                    <span>{{ errors[0] }}</span>
                  </div>

                </ValidationProvider>
                <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="email" :placeholder="$t('contact.email')" v-model="formData.email" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <vue-tel-input :placeholder="'Enter phone number'" :dropdownOptions="dropdownOptions"
                  :inputOptions="inputOptions" defaultCountry="sa" required v-model.trim="formData.phone"></vue-tel-input>


                <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                  <div class="form-group position-relative">
                    <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                      v-model.trim="formData.password" ref="password">
                    <div class="eye" @click="showPassword = !showPassword">
                      <font-awesome-icon :icon="icon" />
                    </div>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|confirmed:password" v-slot="{ errors }" name="password_confirmation">
                  <div class="form-group position-relative">
                    <input :type="[showPassword2 ? 'text' : 'password']" :placeholder="$t('signup.confirm_pass')" required
                      v-model.trim="formData.confirm_pass" data-vv-as="password">
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

  // middleware: 'auth',

  middleware: 'guest-user',

  components: {
    ValidationProvider,
    ValidationObserver
  },


  // define all properties

  data() {
    return {
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
        confirm_pass: ''
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


        }).catch(error => {
          console.log(error.response.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.data.msg}`,
            timer: 2000,
            // confirmButtonColor: '#ff7400',
          })

        })


        // login with specific data

        await this.$auth.loginWith('local', {
          data: {
            email: this.formData.email,
            password: this.formData.password
          },
        })



      } catch (error) {
        console.error(error)
      }
    }

  }
}
</script>

<style lang="scss" scoped></style>
fafy@mailinator.com
