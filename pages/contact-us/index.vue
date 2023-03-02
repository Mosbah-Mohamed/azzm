<template>
  <section class="contact signup">

    <div class="all_content">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-10 col-12">

            <div class="box_contact">
              <div class="row">

                <div class="col-lg-6 col-12">
                  <div class="all_info">

                    <div class="head">
                      <h3 class="main_head"> تواصل معنا</h3>
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
                          :inputOptions="inputOptions" defaultCountry="sa" required
                          v-model.trim="formData.phone"></vue-tel-input>
                        <!-- </ValidationProvider> -->

                        <ValidationProvider rules="max:4" v-slot="{ errors }">
                          <div class="form-group">
                            <textarea placeholder="الرساله"></textarea>
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <div class="form-group">
                          <button class="send_btn main--btn" aria-label="send" title="send" type="submit">ارسال</button>
                        </div>

                      </ValidationObserver>
                    </form>

                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="left_box">

                    <div class="head">
                      <h4 class="main_head">معلومات التواصل</h4>
                    </div>

                    <ul class="info_contact">
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
                        <a href="" aria-label="domain" target="_blank" rel="noopener">info@domain.com</a>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'earth-asia']" /></span>
                        <a href="" aria-label="Twitter" target="_blank" rel="noopener">www.domainname.com</a>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
                        <a href="" aria-label="Twitter" target="_blank" rel="noopener"> 54 123 4567 966+</a>
                      </li>
                    </ul>

                    <ul class="social">
                      <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'youtube']" />
                        </a></li>
                      <li><a href="#" aria-label="instagram" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a></li>
                      <li><a href="#" aria-label="Twitter" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a></li>
                    </ul>

                    <div class="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.308269748304!2d31.347820031323014!3d31.041381421665942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sca!4v1677677447039!5m2!1sen!2sca"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "contactPage",

  layout: 'auth-layout',


  // define all properties

  components: {
    ValidationProvider,
    ValidationObserver
  },


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
