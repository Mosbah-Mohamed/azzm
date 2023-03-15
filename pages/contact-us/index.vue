<template>
  <section class="contact signup">

    <div class="all_content">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-10 col-12">

            <div class="box_contact">
              <div class="row">

                <div class="col-lg-6 col-12">
                  <div class="all_info" data-aos="fade-left">

                    <div class="head">
                      <h3 class="main_head">{{ $t('contact.contact_us') }}</h3>
                    </div>

                    <ValidationObserver v-slot="{ invalid }" ref='observer'>
                      <form action="" @submit.prevent="sendData">

                        <ValidationProvider rules="required" name="الاسم" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="text" v-model="form.name" :placeholder="$t('contact.name')" />
                            <span>{{ errors[0] }}</span>
                          </div>

                        </ValidationProvider>
                        <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="email" v-model="form.email" :placeholder="$t('contact.email')" />
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <!-- <ValidationProvider rules="required|alpha|englishLettersOnly" v-slot="{ errors }"> -->
                        <vue-tel-input :placeholder="'Enter phone number'" :dropdownOptions="dropdownOptions"
                          :inputOptions="inputOptions" defaultCountry="sa" required
                          v-model.trim="form.phone"></vue-tel-input>
                        <!-- </ValidationProvider> -->

                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <textarea v-model="form.message" :placeholder="$t('contact.message')"></textarea>
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <div class="form-group">
                          <button class="send_btn main--btn" :disabled="invalid" aria-label="send" title="send"
                            type="submit">{{
                              $t('contact.send') }}</button>
                        </div>

                      </form>
                    </ValidationObserver>

                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="left_box" data-aos="fade-right">

                    <div class="head">
                      <h4 class="main_head">{{ $t('contact.contact_info') }}</h4>
                    </div>

                    <ul class="info_contact">
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
                        <a :href="'mailto:' + email" aria-label="email" target="_self" rel="noopener">{{ email }}</a>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'earth-asia']" /></span>
                        <a href="https://www.domainname.com" aria-label="domain" target="_blank"
                          rel="noopener">www.domainname.com</a>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
                        <a :href="'tel:' + phone" aria-label="phone" target="_self" rel="noopener">{{ phone }}</a>
                      </li>
                    </ul>

                    <ul class="social">
                      <li><a :href="youtube" aria-label="youtube" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'youtube']" />
                        </a></li>
                      <li><a :href="inst" aria-label="instagram" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a></li>
                      <li><a :href="tw" aria-label="Twitter" target="_blank" rel="noopener">
                          <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a></li>
                    </ul>

                    <div class="map">
                      <div class="mapping">
                        <span v-html="map"></span>
                      </div>
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

      logoImage: '',
      email: '',
      phone: '',
      address: '',
      fb: '',
      tw: '',
      inst: '',
      youtube: '',
      whatsapp_phone: '',
      map: '',

      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },

      // vue tel input options

      dropdownOptions: {
        showDialCodeInSelection: true,
        showFlags: true,
        showDialCodeInList: true
      },
      inputOptions: {
        required: true,
        maxlength: 11,
        // showDialCode: true
      }

    }
  },

  created() {

  },


  computed: {
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

    //  get contact data

    async getData() {
      try {
        return await this.$axios.get(`setting/layout`).then(response => {
          this.logoImage = response.data.data.logo_footer;
          this.email = response.data.data.email;
          this.phone = response.data.data.phone;
          this.address = response.data.data.address;
          this.fb = response.data.data.fb;
          this.tw = response.data.data.tw;
          this.inst = response.data.data.inst;
          this.youtube = response.data.data.youtube;
          this.whatsapp_phone = response.data.data.whatsapp_phone;
          this.map = response.data.data.map;
          // console.log(response.data.data.logo)
        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },


    // send data from contact form

    async sendData() {

      try {
        await this.$axios.$post('setting/contact', this.form).then(response => {

          this.form.name = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.message = '';

          this.$refs.observer.reset();

          this.$swal.fire({
            position: 'center',
            type: 'success',
            title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })

          this.$router.push(this.localePath({ path: "/" }));


        }).catch(error => {
          console.log(error.response.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.msg}`,
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
