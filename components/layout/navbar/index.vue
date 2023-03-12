<template>
  <div class="navbar_page">
    <div class="container">
      <div class="row align-items-baseline custom-center">

        <div class="col-lg-2 col-md-5 col-4">
          <nuxt-link :to="localePath('/')">
            <div class="logo">
              <img :data-src="logoImage" title="logo" v-lazy-load alt="nav logo" width="190" height="53" />
            </div>
          </nuxt-link>

        </div>

        <div class="col-lg-6 col-5 d-none-custom auth_lay">
          <div class="nav_items">
            <ul>
              <li><a href="#" aria-label="mainPage" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
                $t('navbar.home') }}</nuxt-link></a></li>
              <li><a href="#" aria-label="about" target="_blank" rel="noopener"><nuxt-link
                    :to="localePath('/about-us')">{{ $t('navbar.about') }}</nuxt-link></a></li>
              <li><a href="#" aria-label="diploma" target="_blank" rel="noopener">{{ $t('navbar.diploma') }}</a></li>

              <li>
                <div @mouseover="onOver" @mouseleave="onLeave">
                  <b-dropdown id="dropdown-1" :text="$t('navbar.courses')" ref="dropdown">

                    <b-dropdown-item>دورات الموارد البشرية</b-dropdown-item>
                    <b-dropdown-item>تحليل الاعمال</b-dropdown-item>
                    <b-dropdown-item>دوراالدورات المالية</b-dropdown-item>
                  </b-dropdown>
                </div>
              </li>

              <li><a href="#" aria-label="articles" target="_blank" rel="noopener"><nuxt-link
                    :to="localePath('/articles')">{{ $t('navbar.articles') }}</nuxt-link></a></li>

              <li><a href="#" aria-label="contactUs" target="_blank" rel="noopener"><nuxt-link
                    :to="localePath('/contact-us')">{{ $t('navbar.contact') }}</nuxt-link></a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-7 col-8 auth_lay">

          <div class="nav_auth flex-center">
            <div class="icon_search">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </div>

            <div class="language">
              <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('ar')">
                <span>Arabic</span>
              </nuxt-link>
              <nuxt-link v-else :to="switchLocalePath('en')">
                <span>English</span>
              </nuxt-link>
            </div>

            <div class="btns-auth flex-center">
              <!-- <button v-if="!$store.state.loggedIn" aria-label="account" title="account" class="main--btn"><nuxt-link
                  :to="localePath('/signup')">{{
                    $t('navbar.signup') }}</nuxt-link></button> -->


              <!-- <button aria-label="login" title="login" class="second--btn"><nuxt-link :to="localePath('/login')">{{
                $t('navbar.login') }}</nuxt-link></button> -->

              <!-- <button aria-label="logout" title="logout" class="second--btn" @click="handleLogOut">logout</button> -->


              <div class="icon_notification" v-if="!$auth.loggedIn">
                <font-awesome-icon :icon="['far', 'bell']" />
              </div>

              <div @mouseover="onOver2" @mouseleave="onLeave2" v-if="$auth.loggedIn">
                <b-dropdown id="dropdown-1" class="profile_im" ref="dropdownLogin">

                  <template #button-content>
                    <div class="drop_btn">
                      <img data-src="@/assets/images/learn.png" title="profile" v-lazy-load alt="nav profile" width="190"
                        height="53" />
                    </div>
                  </template>

                  <nuxt-link :to="localePath('/profile')"><b-dropdown-item> profile</b-dropdown-item></nuxt-link>
                  <b-dropdown-item @click="handleLogOut"> logout</b-dropdown-item>

                </b-dropdown>
              </div>



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

  },

  mounted() {
    this.getData();

    console.log('tokenn ' + this.$auth.strategy)

  },


  methods: {

    async getData() {
      try {
        return await this.$axios.get(`setting/layout`).then(response => {
          this.logoImage = response.data.data.logo;
          // console.log(response.data.data.log)
        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },


    async handleLogOut() {

      this.$auth.logout()

      this.$cookies.remove('auth._token.local')
      // for set user from api

      this.$store.commit('LOGOUT');
      window.localStorage.removeItem('vuex');

    },

    onOver() {
      this.$refs.dropdown.visible = true;
      this.$refs.dropdownLogin.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
      this.$refs.dropdownLogin.visible = false;
    },
    onOver2() {
      this.$refs.dropdownLogin.visible = true;
    },
    onLeave2() {
      this.$refs.dropdownLogin.visible = false;
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
