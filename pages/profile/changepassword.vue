<template>
  <div class="my-courses signup personal_info">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="all_info">

          <form action="">
            <ValidationObserver ref='observer'>

              <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
                <div class="form-group position-relative">
                  <input :type="[showPassword ? 'text' : 'password']" placeholder="كلمة السر الحالية" required
                    v-model="formData.password">
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
                <div class="form-group position-relative">
                  <input :type="[showPassword2 ? 'text' : 'password']" placeholder="كلمة السر الجديدة" required
                    v-model="formData.password">
                  <span class="eye" @click="showPassword2 = !showPassword2">
                    <font-awesome-icon :icon="icon2" />
                  </span>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>


              <div class="form-group">
                <button class="sign_btn change_pass main--btn" aria-label="sign" title="save" type="submit">حفظ
                  التعديلات</button>
              </div>

              <div class="form-group">
                <p class="email_reset">
                  <span>لا اتذكر كلمة المرور القديمة</span>
                  <span class="get_email" @click="show_email = !show_email">ادخل البريد الإليكتروني</span>
                </p>
              </div>

            </ValidationObserver>
          </form>

          <form action="" v-if="show_email">
            <ValidationObserver ref='observer'>

              <ValidationProvider rules="max:4" v-slot="{ errors }">
                <div class="form-group">
                  <input type="email" placeholder="البريد الإلكتروني" />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>


              <div class="form-group">
                <button class="sign_btn change_pass main--btn" aria-label="save" title="save" type="submit">حفظ
                  التعديلات</button>
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

      show_email: false,

      // for icon show password

      showPassword: false,
      showPassword2: false,

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


  }
}
</script>

<style lang="scss" scoped></style>
