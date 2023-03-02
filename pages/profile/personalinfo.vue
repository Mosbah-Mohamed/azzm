<template>
  <div class="my-courses signup personal_info">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="all_info">

          <div class="head">
            <div class="edit_rate">
              <span><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
              <span>تعديل </span>
            </div>
          </div>


          <form action="">
            <ValidationObserver ref='observer'>

              <ValidationProvider rules="required|englishLettersOnly" name="الاسم" v-slot="{ errors }">
                <div class="form-group">
                  <input type="text" v-model="value" placeholder="الاسم" />
                  <span>{{ errors[0] }}</span>
                </div>

              </ValidationProvider>
              <ValidationProvider rules="max:4" v-slot="{ errors }">
                <div class="form-group">
                  <input type="email" placeholder="البريد الإلكتروني" />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <!-- <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }"> -->
              <vue-tel-input :placeholder="'Enter phone number'" :dropdownOptions="dropdownOptions"
                :inputOptions="inputOptions" defaultCountry="sa" required v-model.trim="formData.phone"></vue-tel-input>
              <!-- </ValidationProvider> -->
              <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
                <div class="form-group position-relative">
                  <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                    v-model="formData.password">
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>


              <ValidationProvider rules="required|englishLettersOnly" name="الاسم" v-slot="{ errors }">
                <div class="form-group">
                  <input type="text" v-model="value" placeholder="ذكر" />
                  <span>{{ errors[0] }}</span>
                </div>

              </ValidationProvider>

              <div class="form-group">
                <button class="sign_btn main--btn" aria-label="sign" title="save" type="submit">حفظ التعديلات</button>
              </div>

            </ValidationObserver>
          </form>

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
      blogPost: '',
      blogCategoryPosts: '',

      // for icon show password

      showPassword: false,

      value: '',
      phone: "",

      formData: {
        name: "",
        email: "",
        password: "",
        phone: ""
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

  //  fetch data on server side only in pages not component ( fetch ,async data)

  // async asyncData({ $axios }) {
  //   try {
  //     // let response = await this.$axios.$get("main_page/main");
  //     return await $axios.$get(process.env.baseUrl + "main_page/main").then(res => {

  //       return {
  //         jjj: res.data.content.title
  //       };

  //     })

  //   } catch (err) {

  //     console.log(err);

  //   }
  // },




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
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {


  }
}
</script>

<style lang="scss" scoped></style>
