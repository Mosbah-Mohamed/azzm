<template>
  <footer>

    <div class="partners auth_lay">

      <div class="container">
        <VueSlickCarousel v-bind="slickOptions">
          <!-- <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="`./${i}-200x100.jpg`" />
        </div> -->
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>
          <div>
            <img data-src="@/assets/images/icon-partner-1.png" title="partner" v-lazy-load alt="partner image"
              width="100%" height="100%" />
          </div>

        </VueSlickCarousel>
      </div>
    </div>

    <div class="footer_content auth_lay">
      <div class="container">

        <div class="row ">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="image_logo">
              <img data-src="@/assets/images/logo.svg" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />
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

          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="site_links">
              <h3 class="main_head">خريطة الموقع</h3>

              <div class="all_site_pages">

                <ul>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      الرئيسية
                    </a></li>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      عن المنصة
                    </a></li>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      الدورات
                    </a></li>

                </ul>

                <ul>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      الشروط والاحكام
                    </a></li>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      المقالات
                    </a></li>
                  <li><a href="#" aria-label="youtube" target="_blank" rel="noopener">
                      تواصل معنا
                    </a></li>

                </ul>

              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="site_map">
              <h3 class="main_head">خريطة الموقع</h3>
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
              <p>جميع الحقوق محفوظة لدى شركة العزم للتدريب 2022</p>
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
                  <span>تصميم شركة الرياض</span>
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
      slickOptions: {
        slidesToShow: 9,
        arrows: false,
        "autoplay": true,
        "speed": 2000,
        "autoplaySpeed": 2000,
        "cssEase": "linear",
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

  created() {
    // this.getData()
  },

  mounted() {

  },


  methods: {

    // async getData() {
    //   try {
    //     return await this.$axios.get(`setting/layout`).then(response => {
    //       this.logoImage = response.data.data.logo;
    //       console.log(response.data.data.logo)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    }

  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  transition: 0.5s;
}

// .btn.dropdown-toggle.btn-secondary:hover ul.dropdown-menu {
//   visibility: visible;
//   display: block;
//   opacity: 1;
// }
</style>
