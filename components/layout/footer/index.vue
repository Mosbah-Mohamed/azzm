<template>
  <footer>

    <div class="partners auth_lay" data-aos="fade-up">

      <div class="container">
        <VueSlickCarousel v-bind="slickOptions" v-if=items.length>
          <div v-for="(item, index) in items" :key="index" class="img-wrapper">
            <img :data-src="item.logo" :title="item.name" v-lazy-load :alt="item.name" width="100%" height="100%" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <div class="footer_content auth_lay" data-aos="fade-up">
      <div class="container">

        <div class="row ">
          <div class="col-lg-4 col-md-6 col-12" data-aos="fade-left">
            <div class="image_logo">
              <img :data-src="logoImage" title="partner" v-lazy-load alt="partner image" width="100%" height="100%" />
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

          </div>

          <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up">
            <div class="site_links">
              <h3 class="main_head">{{ $t('footer.site_map') }}</h3>

              <div class="all_site_pages">

                <ul>
                  <li><a href="#" aria-label="mainPage" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
                    $t('navbar.home') }}</nuxt-link></a></li>
                  <li><a href="#" aria-label="about" target="_blank" rel="noopener"><nuxt-link
                        :to="localePath('/about-us')">{{ $t('navbar.about') }}</nuxt-link></a></li>
                  <li><a href="#" aria-label="diploma" target="_blank" rel="noopener">{{ $t('navbar.diploma') }}</a></li>

                </ul>

                <ul>
                  <li><a href="#" aria-label="articles" target="_blank" rel="noopener"><nuxt-link
                        :to="localePath('/termsandconditions')">{{ $t('navbar.terms') }}</nuxt-link></a></li>

                  <li><a href="#" aria-label="articles" target="_blank" rel="noopener"><nuxt-link
                        :to="localePath('/articles')">{{ $t('navbar.articles') }}</nuxt-link></a></li>

                  <li><a href="#" aria-label="contactUs" target="_blank" rel="noopener"><nuxt-link
                        :to="localePath('/contact-us')">{{ $t('navbar.contact') }}</nuxt-link></a></li>

                </ul>

              </div>

            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12" data-aos="fade-right">
            <div class="site_map">
              <h3 class="main_head">{{ $t('footer.location') }}</h3>

              <div class="mapping">
                <span v-html="map"></span>
              </div>
              <!-- <div v-html="text"></div> -->
              <!-- {{ map }} -->
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="copy_right">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="">
              <p>{{ $t('footer.copy_right') }}</p>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="ryad">
              <a href=" https://elryad.com/ar/" aria-label="domain" target="_blank" rel="noopener">
                <div class="cont_img">
                  <div class="image">
                    <img src="@/assets/images/ryad.png" title="elryad" v-lazy-load alt="elryad image" width="100%"
                      height="100%">
                  </div>
                  <span>{{ $t('footer.ryad') }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "navbarPage",

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
      items: [],
      slickOptions: {
        slidesToShow: 9,
        arrows: false,
        "autoplay": true,
        "speed": 200,
        "autoplaySpeed": 200,
        // "cssEase": "linear",
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 5,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 2,
            }
          }
        ]
      }

    }
  },

  async fetch() {


    const [response1, response2] = await Promise.all([
      this.$axios.get(`setting/layout`),
      this.$axios.get(`setting/partners`)
    ])


    this.loading = true;

    // response 1

    this.logoImage = response1.data.data.logo_footer;
    this.email = response1.data.data.email;
    this.phone = response1.data.data.phone;
    this.address = response1.data.data.address;
    this.fb = response1.data.data.fb;
    this.tw = response1.data.data.tw;
    this.inst = response1.data.data.inst;
    this.youtube = response1.data.data.youtube;
    this.whatsapp_phone = response1.data.data.whatsapp_phone;
    this.map = response1.data.data.map;


    this.items = response2.data.data;


  },

  mounted() {
  },


  methods: {

    // async getData() {
    //   try {
    //     return await this.$axios.get(`setting/layout`).then(response => {
    //       this.logoImage = response.data.data.logo_footer;
    //       this.email = response.data.data.email;
    //       this.phone = response.data.data.phone;
    //       this.address = response.data.data.address;
    //       this.fb = response.data.data.fb;
    //       this.tw = response.data.data.tw;
    //       this.inst = response.data.data.inst;
    //       this.youtube = response.data.data.youtube;
    //       this.whatsapp_phone = response.data.data.whatsapp_phone;
    //       this.map = response.data.data.map;
    //       // console.log(response.data.data.logo)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log("catch : " + error)
    //   }
    // },

    // async getPartner() {
    //   try {
    //     return await this.$axios.get(`setting/partners`).then(response => {
    //       this.items = response.data.data;
    //       // console.log(response.data.data)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log("catch : " + error)
    //   }
    // },



  }
}
</script>

<style lang="scss" scoped></style>
