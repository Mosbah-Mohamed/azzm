<template>
  <div class="navbar_page">
    <div class="container">
      <div class="row align-items-baseline custom-center">

        <div class="col-lg-2 col-md-5 col-4">
          <div class="logo">
            <img :data-src="logoImage" title="logo" v-lazy-load alt="nav logo" width="190" height="53" />
          </div>
        </div>

        <div class="col-lg-6 col-5 d-none-custom auth_lay">
          <div class="nav_items">
            <ul>
              <li><a href="#" aria-label="mainPage" target="_blank" rel="noopener">الرئيسية</a></li>
              <li><a href="#" aria-label="about" target="_blank" rel="noopener">عن المنصة</a></li>
              <li><a href="#" aria-label="diploma" target="_blank" rel="noopener">الدبلومات</a></li>

              <li>
                <div @mouseover="onOver" @mouseleave="onLeave">
                  <b-dropdown id="dropdown-1" text="الدورات" ref="dropdown">

                    <b-dropdown-item>دورات الموارد البشرية</b-dropdown-item>
                    <b-dropdown-item>تحليل الاعمال</b-dropdown-item>
                    <b-dropdown-item>دوراالدورات المالية</b-dropdown-item>
                  </b-dropdown>
                </div>
              </li>

              <li><a href="#" aria-label="article" target="_blank" rel="noopener">المقالات</a></li>
              <li><a href="#" aria-label="contactUs" target="_blank" rel="noopener">اتصل بنا</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-7 col-8 auth_lay">

          <div class="nav_auth flex-center">
            <div class="icon_search">
              <font-awesome-icon :icon="['fas', 'search']" />
            </div>

            <div class="language">
              <span>English</span>
            </div>

            <div class="btns-auth flex-center">
              <button aria-label="account" title="account" class="main--btn">إنشاء حساب</button>
              <button aria-label="login" title="login" class="second--btn">تسجيل الدخول</button>
            </div>

            <div class="sidebar d-none">
              <b-button v-b-toggle.sidebar-backdrop>
                <font-awesome-icon :icon="['fas', 'list']" />
                <!-- <font-awesome-icon icon="fa-solid fa-list" /> -->
              </b-button>

              <b-sidebar id="sidebar-backdrop" backdrop shadow>
                <div class="px-3 py-2">
                </div>
              </b-sidebar>
            </div>

          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "navbarPage",

  data() {
    return {
      logoImage: '',

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
