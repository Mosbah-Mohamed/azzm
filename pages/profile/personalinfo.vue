<template>
  <div class="my-courses signup personal_info">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="all_info">

          <div class="head">
            <div class="edit_rate" @click="toggleReadonly">
              <span><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
              <span>{{ $t('attendance.update') }} </span>
            </div>
          </div>


          <ValidationObserver v-slot="{ invalid }" ref='observer'>
            <form action="" @submit.prevent="updatePersonalInfo">

              <ValidationProvider rules="required" name="name" v-slot="{ errors }">
                <div class="form-group">
                  <input type="text" v-model="formData.name" placeholder="الاسم" :readonly="isReadonly" />
                  <span>{{ errors[0] }}</span>
                </div>

              </ValidationProvider>
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <div class="form-group">
                  <input type="email" v-model="formData.email" placeholder="البريد الإلكتروني" :readonly="isReadonly" />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <vue-tel-input :placeholder="'Enter phone number'" :dropdownOptions="dropdownOptions"
                :inputOptions="inputOptions" defaultCountry="sa" required v-model.trim="formData.phone"
                :readonly="isReadonly"></vue-tel-input>


              <!-- <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
                <div class="form-group position-relative">
                  <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                    v-model="formData.password">
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider> -->
              <ValidationProvider rules="required" name="address" v-slot="{ errors }">
                <div class="form-group">
                  <input type="text" v-model="formData.address" placeholder="العنوان" :readonly="isReadonly" />
                  <span>{{ errors[0] }}</span>
                </div>

              </ValidationProvider>


              <ValidationProvider rules="required" name="gender" v-slot="{ errors }">

                <!-- <select :disabled="isReadonly" @change="formData.gender = $event.target.value">
                      <option value="" selected disabled hidden>Choose here</option>
                      <option v-for="option in options" :value="option.key">{{ option.value }}</option>
                    </select> -->

                <div class="form-group">
                  <select v-model="formData.gender" :disabled="isReadonly">
                    <!-- <option value="" selected disabled hidden>Choose here</option> -->
                    <option v-for="option in options" :value="option.key">{{ option.value }}</option>
                  </select>

                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <!-- {{ options.key }} -->

              <div class="form-group">
                <button class="sign_btn main--btn" aria-label="sign" title="save" type="submit" :disabled="invalid">{{
                  $t('courses.save_updates') }}
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

      // for icon show password

      showPassword: false,

      value: '',
      phone: "",

      isReadonly: true,

      // formData

      formData: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        address: ""
      },

      options: [
        { key: 0, value: 'man' },
        { key: 1, value: 'women' },
      ],
      // gender: '',

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
  },

  //  when component load

  mounted() {

    this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {

    // get personal info

    async getData() {
      try {
        return await this.$axios.get(`profile`).then(response => {

          this.formData.name = response.data.data.name;
          // this.formData.gender = response.data.data.gender;
          this.formData.email = response.data.data.email;
          this.formData.phone = response.data.data.phone;
          this.formData.address = response.data.data.address;

          // console.log(response.data.data)


        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // update personal info

    async updatePersonalInfo() {

      try {
        await this.$axios.$post('update/profile', this.formData).then(response => {


          this.getData()


          this.$swal.fire({
            position: 'center',
            type: 'success',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.data.message)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.message}`,
            timer: 3000,
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

    // toggleReadonly

    toggleReadonly() {
      this.isReadonly = false;
    }

  },
}
</script>

<style lang="scss" scoped></style>
