<template>
  <div class="my-courses signup personal_info">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="all_info">

          <ValidationObserver v-slot="{ invalid }" ref='observer'>
            <form action="" @submit.prevent="changePassword">

              <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                <div class="form-group position-relative">
                  <input :type="[showPassword ? 'text' : 'password']" :placeholder="$t('courses.current_password')"
                    required v-model="formData.old_password">
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required||min:8" v-slot="{ errors }" name="password">
                <div class="form-group position-relative">
                  <input :type="[showPassword2 ? 'text' : 'password']" :placeholder="$t('courses.new_password')" required
                    v-model="formData.new_password">
                  <span class="eye" @click="showPassword2 = !showPassword2">
                    <font-awesome-icon :icon="icon2" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>


              <div class="form-group">
                <button class="sign_btn change_pass main--btn" :disabled="invalid" aria-label="sign" title="save"
                  type="submit">
                  {{ $t('courses.save_updates') }}
                </button>
              </div>

              <div class="form-group">
                <p class="email_reset">
                  <span>{{ $t('courses.forget_old_pass') }}</span>
                  <span class="get_email" @click="show_email = !show_email">{{ $t('courses.enter_email') }}</span>
                </p>
              </div>

            </form>
          </ValidationObserver>

          <ValidationObserver v-slot="{ invalid }" ref='observer2'>
            <form action="" v-if="show_email" @submit.prevent="resetPassword">

              <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
                <div class="form-group">
                  <input type="email" v-model="formReset.email" :placeholder="$t('login.email')" />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>


              <div class="form-group">
                <button class="sign_btn change_pass main--btn" :disabled="invalid" aria-label="save" title="save"
                  type="submit">
                  {{ $t('courses.save_updates') }}
                </button>
              </div>

            </form>
          </ValidationObserver>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "personal-info-page",

  layout: 'auth-layout',

  components: {
    ValidationProvider,
    ValidationObserver
  },


  // define all properties

  data() {
    return {

      show_email: false,

      // for icon show password

      showPassword: false,
      showPassword2: false,

      value: '',
      phone: "",

      // change password

      formData: {
        old_password: "",
        new_password: ""
      },

      // reset password

      formReset: {
        email: ""
      },

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


    // change password

    async changePassword() {

      try {
        await this.$axios.$put('change/password', this.formData).then(response => {

          this.formData.old_password = '';
          this.formData.new_password = '';

          this.$refs.observer.reset();

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.data.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

    // reset password

    async resetPassword() {

      try {
        await this.$axios.$post('reset/password', this.formReset).then(response => {

          this.formData.email = '';

          this.$refs.observer2.reset();

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.data.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },


  }
}
</script>

<style lang="scss" scoped></style>
