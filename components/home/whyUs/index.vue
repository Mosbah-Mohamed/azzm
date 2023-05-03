<template>
  <section class="why_us">

    <div class="container">

      <h4 class="main_head">{{ $t('pages.why_us') }}</h4>

      <div class="row">
        <div class="col-lg-6 col-12 ">

          <div class="advantages">
            <div class="box" data-aos="fade-up" v-for="(item, index) in items" :key='index'>
              <div class="image_advantage" :class="{
                'green': item.id == 4,
                'red': item.id == 5,
                'pink': item.id == 7
              }">
                <!-- <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
                  height="100%" /> -->
                <font-awesome-icon :icon="['fas', 'user-group']" />
              </div>

              <h5>{{ item.title }}</h5>
              <p v-html="item.description"></p>
            </div>

          </div>

        </div>
        <div class="col-lg-6 col-12">

          <div class="image_video" data-aos="fade-right">
            <img :data-src="image" title="course" v-lazy-load alt="course image" width="100%" height="100%" />

            <div class="video">
              <a :href="video" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'play']" />
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about-component",

  data() {
    return {
      items: [],
      image: '',
      video: ''
    }
  },

  mounted() {
    this.getData()
  },


  methods: {

    async getData() {
      try {
        return await this.$axios.get(`setting/whyChoose`).then(response => {
          this.items = response.data.data.why_choose;
          this.image = response.data.data.image;
          this.video = response.data.data.video;
          // console.log(response.data.data.why_choose)
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

