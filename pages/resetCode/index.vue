<template>
  <section class="signup reset_password passcode">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-12">
          <div class="all_info">

            <div class="head">
              <h3 class="main_head">ادخال الرقم المرجعي</h3>
            </div>

            <p>
              <span>ادخل الرقم المرجعي الذي تم ارسله للبريد الإليكتروني</span>
            </p>


            <form action="">
              <div class="form-group">
                <div class="pass_numbers">
                  <input type="text" maxlength="1" ref="input1" @keydown.enter="moveToNext($event, 2)">
                  <input type="text" maxlength="1" ref="input2" @keydown.enter="moveToNext($event, 3)">
                  <input type="text" maxlength="1" ref="input3" @keydown.enter="moveToNext($event, 4)">
                  <input type="text" maxlength="1" ref="input4" @keydown.enter="moveToNext($event, 5)">
                  <input type="text" maxlength="1" ref="input5" @keydown.enter="submitPasscode()">
                </div>
              </div>


                <button class="sign_btn main--btn" aria-label="sign" title="sign" type="button">ارسال </button>
                <a href="#" target="_blank" rel="noopener noreferrer" class="resend">
                  <span>لم يصلني ؟</span>
                  <span class="number">ارسل الرقم</span>
                </a>


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

    moveToNext(event, nextInput) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.$refs[`input${nextInput}`].focus();
      }
    },


  }
}
</script>

<style lang="scss" scoped></style>
