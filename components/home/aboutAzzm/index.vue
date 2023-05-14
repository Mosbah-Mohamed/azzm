<template>
  <section class="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 position-relative">
          <div class="image_top" data-aos="fade-left">
            <img :data-src="image" title="about" v-lazy-load alt="hero image" width="100%" height="100%" />

            <div class="experience">
              <span>{{ year }}</span>
              <span>{{ $t('pages.experience') }}</span>
            </div>

          </div>

          <div class="image_botton">
            <img data-src="@/assets/images/back_about.svg" title="about" v-lazy-load alt="hero image" width="100%"
              height="100%" />
          </div>

        </div>
        <div class="col-lg-6 col-12">
          <div class="content" data-aos="fade-right">
            <h3 class="main_head">
              {{ title }}
            </h3>
            <p v-html="description"></p>

            <nuxt-link :to="localePath('/about-us')">
              <button class="main--btn">{{ $t('buttons.join') }}</button>
            </nuxt-link>

          </div>

        </div>

      </div>

      <div class="flex-center m-5" v-if="!loading">
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
      </div>

    </div>

    <div class="image-right">
      <img data-src="@/assets/images/flower.png" title="flower" v-lazy-load alt="hero image" width="100%" height="100%" />
    </div>

  </section>
</template>

<script>
export default {
  name: "about-component",

  data() {
    return {

      loading: false,

      // data from api

      title: '',
      description: '',
      image: '',
      year: ''
    }
  },

  async fetch() {
    try {
      return await this.$axios.get(`setting/description/section2`).then(response => {
        this.loading = true;
        this.title = response.data.data.title;
        this.description = response.data.data.description;
        this.year = response.data.data.year;
        this.image = response.data.data.image;
        // console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log("catch : " + error)
    }
  },



  mounted() {
  },


  methods: {

  }

}
</script>

<style lang="scss" scoped></style>
