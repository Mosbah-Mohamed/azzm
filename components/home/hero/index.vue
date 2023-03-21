<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">

          <!-- <vue-countup :delay="delay" :endVal="endVal" :options="options" /> -->

          <div class="hero_content">
            <span class="name">{{ name }}</span>
            <h1 class="main_head">{{ title1 }}</h1>
            <p>{{ description }}</p>

            <nuxt-link :to="localePath('/about-us')">
              <button aria-label="join" title="join" class="main--btn">
                {{ $t('buttons.join') }}
              </button>
            </nuxt-link>


          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="all_images">
            <div class="hero_image">
              <img :data-src="image" title="hero" onerror="this.src='@/assets/images/trainer.png'" v-lazy-load
                alt="hero image" width="100%" height="100%" />
            </div>

            <div class="image_back">
              <img src="@/assets/images/flower.png" title="flower" data-not-lazy loading="lazy" alt="hero image"
                width="100%" height="100%" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="image-right">
      <img data-src="@/assets/images/flower.png" title="flower" v-lazy-load alt="hero image" width="100%" height="100%" />
    </div>

    <div class="flex-center m-5" v-if="!loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>

    <div class="staticis">
      <div class="trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-group']" />
        </div>
        <div class="info">
          <span>{{ traineesCount }}</span>
          <span>{{ $t('hero.trainee') }}</span>
        </div>
      </div>
      <div class="trainer trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-tie']" />
        </div>
        <div class="info">
          <span>{{ trainersCount }}</span>
          <span>{{ $t('hero.trainer') }}</span>
        </div>
      </div>
      <div class="course trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'object-group']" />
        </div>
        <div class="info">
          <span>{{ courseCount }}</span>
          <span>{{ $t('hero.course') }}</span>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "hero-component",

  data() {
    return {
      delay: -1,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        enableScrollSpy: true,
        scrollSpyDelay: 200,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },

      loading: false,

      // data from api 

      name: '',
      title1: '',
      description: '',
      image: '',
      trainersCount: '',
      traineesCount: '',
      courseCount: '',

    }
  },



  mounted() {
    this.getData()
  },


  methods: {

    // get description data in hero section

    async getData() {
      try {
        return await this.$axios.get(`setting/description`).then(response => {
          this.loading = true;
          this.name = response.data.data.name;
          this.title1 = response.data.data.title1;
          this.description = response.data.data.description;
          this.image = response.data.data.image;
          this.trainersCount = response.data.data.trainersCount;
          this.traineesCount = response.data.data.traineesCount;
          this.courseCount = response.data.data.courseCount;
          // console.log(response.data.data)
        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

  }
}
</script>

<style lang="scss" scoped></style>
