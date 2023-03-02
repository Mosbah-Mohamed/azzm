<template>
  <section class="profile_side_component">
    <div class="crumb">
      <h3>دليل المتدرب</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">المف الشخصي</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">{{
          $t(`message.${childPageName}`)
        }}</a></li>
      </ul>
    </div>

    <div class="profile_content">
      <div class="container">

        <div class="row ">

          <div class="col-lg-3 col-12">
            <div class="side_menu_profile">

              <div class="image">
                <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image" width="100%"
                  height="100%" />

                <div class="upload">
                  <label for="upload-image"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></label>
                  <input type="file" id="upload-image" />
                </div>

                <h4>سعد حسان الغامدي</h4>
              </div>

              <ul>

                <li :class="{
                  'active': $route.path.split('/').pop() == 'profile'
                }">
                  <nuxt-link :to="localePath('/profile/guidetrainer')">
                    دليل المتدرب
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/mycourses')">
                    دوراتي
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/coursesrate')">
                    تقييم الدورات
                  </nuxt-link>
                </li>
                <li><nuxt-link :to="localePath('/profile/certificates')">
                    شهاداتي
                  </nuxt-link></li>
                <li>
                  <nuxt-link :to="localePath('/profile/personalinfo')">
                    معلوماتي الشخصية
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/changepassword')">
                    تعديل كلمة المرور
                  </nuxt-link>
                </li>
              </ul>

            </div>
          </div>

          <div class="col-lg-9 col-12">
            <nuxt-child />
          </div>

        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "profile_side_component",

  layout: "second-layout",


  data() {
    return {
    }
  },

  //  fetch data on server side

  async asyncData({ $axios }) {

    // const NavbarContent = await $axios.get(`setting/layout`).then(response =>
    //   console.log(response.data)
    // ).catch(error => {
    //   console.log(error)
    // })

    return {
      // NavbarContent: NavbarContent,
    }
  },

  mounted() {
    // console.log(this.$route.path.split('/').pop())
  },


  methods: {

  },

  computed: {
    childPageName() {
      return this.$route.path.split('/').pop()
    },
  },

}
</script>

<style lang="scss" scoped></style>
