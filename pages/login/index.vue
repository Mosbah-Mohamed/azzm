<template>
  <section class="signup">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">تسجيل الدخول</h3>
            </div>

            <p>
              <span>ليس لدي حساب ؟</span>
              <a href="#" aria-label="login" target="_blank" rel="noopener" class="login">تسجيل حساب</a>
            </p>

            <button class="share_go">
              <img data-src="@/assets/images/google.svg" title="partner" v-lazy-load alt="partner image" width="20"
                height="100%" />
              <span>تسجيل دخول عن طريق حسابك في جوجل</span>
            </button>

            <form action="">
              <ValidationObserver ref='observer'>

                <ValidationProvider rules="max:4" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="email" placeholder="البريد الإلكتروني" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }">
                  <div class="form-group position-relative">
                    <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                      v-model="formData.password">
                    <div class="eye" @click="showPassword = !showPassword">
                      <font-awesome-icon :icon="icon" />
                    </div>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-group box_check">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    نسيت كلمة السر ؟ الاسترجاع
                  </a>
                </div>

                <div class="form-group">
                  <button class="sign_btn main--btn" aria-label="sign" title="sign" type="submit">تسجيل الدخول</button>
                </div>


              </ValidationObserver>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "loginPage",

  layout: 'auth-layout',

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

      formData: {
        email: "",
        password: "",
      },


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
