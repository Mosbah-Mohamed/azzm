<template>
  <section class="signup reset_password">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">استرجاع كلمة المرور</h3>
            </div>

            <p>
              <span>ادخل البريد الإلكتروني لتلقي الرقم المرجعي</span>
            </p>


            <form action="">
              <ValidationObserver ref='observer'>

                <ValidationProvider rules="max:4" v-slot="{ errors }">
                  <div class="form-group">
                    <input type="email" placeholder="البريد الإلكتروني" />
                  </div>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>


                <div class="form-group">
                  <button class="sign_btn main--btn" aria-label="sign" title="sign" type="submit">ارسال </button>
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

  name: "resetPasswordPage",

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

      formData: {
        name: "",
        email: "",
        password: "",
        phone: ""
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
