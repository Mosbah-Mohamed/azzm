<template>
  <section class="profile_side_component">
    <div class="crumb">
      <h3>{{ $t(`profile.${childPageName}`) }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li>{{
          $t('profile.profile_per') }}</li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li>{{
          $t(`profile.${childPageName}`)
        }}</li>
      </ul>
    </div>

    <div class="profile_content">
      <div class="container">

        <div class="row ">

          <div class="col-lg-3 col-12">
            <div class="side_menu_profile">

              <div class="image">
                <img :data-src="avatar" title="partner" onerror="this.src='@/assets/images/trainer.png'" v-lazy-load
                  alt="partner image" width="100%" height="100%" />

                <div class="upload">
                  <label for="upload-image"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></label>
                  <input type="file" id="upload-image" @change="onFileChange" accept="image/*" />
                </div>

                <h4>{{ name }}</h4>
              </div>

              <ul>

                <li :class="{
                  'active': $route.path.split('/').pop() == 'profile'
                }">
                  <nuxt-link :to="localePath('/profile/guidetrainer')">
                    {{ $t("profile.guidetrainer") }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/mycourses')">
                    {{ $t("profile.mycourses") }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/coursesrate')">
                    {{ $t("profile.coursesrate") }}
                  </nuxt-link>
                </li>
                <li><nuxt-link :to="localePath('/profile/certificates')">
                    {{ $t("profile.certificates") }}
                  </nuxt-link></li>
                <li>
                  <nuxt-link :to="localePath('/profile/personalinfo')">
                    {{ $t("profile.personalinfo") }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/changepassword')">
                    {{ $t("profile.changepassword") }}
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

  created() {

  },


  // middleware: ["auth"],
  middleware: ["auth-user", "auth"],


  data() {
    return {

      selectedFile: null,

      // data from api

      name: '',
      avatar: '',

    }
  },


  watch: {

    // update personal info image

    async selectedFile(newFile) {

      const formData = new FormData();
      formData.append('avatar', newFile);

      try {
        await this.$axios.$post('update/avatar', formData).then(response => {

          this.avatar = response.data;

          // console.log(response);
          // console.log(response.data);


          this.$swal.fire({
            position: 'center',
            type: 'success',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.msg}`,
            timer: 3000,
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }



    },


  },

  mounted() {

    this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {

    async getData() {
      try {
        return await this.$axios.get(`profile`).then(response => {

          this.name = response.data.data.name;
          this.avatar = response.data.data.avatar;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // get files from input file

    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },


  },


  computed: {

    childPageName() {
      return this.$route.path.split('/').pop()
    },
  },

}
</script>

<style lang="scss" scoped></style>
