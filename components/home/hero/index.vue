<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">

          <!-- <vue-countup :delay="delay" :endVal="endVal" :options="options" /> -->

          <div class="hero_content">
            <span class="name">شركة عزم للتدريب</span>
            <h1 class="main_head">معهد عـزم ستـار للتـدريـب</h1>
            <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
              التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية</p>
            <button aria-label="join" title="join" class="main--btn">
              إنضم إلينا
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="all_images">
            <div class="hero_image">
              <img data-src="@/assets/images/IIUEODf.png" title="hero" v-lazy-load alt="hero image" width="100%"
                height="100%" />
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

    <div class="staticis">
      <div class="trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-group']" />
        </div>
        <div class="info">
          <span>2500</span>
          <span>مُتدرب</span>
        </div>
      </div>
      <div class="trainer trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-tie']" />
        </div>
        <div class="info">
          <span>120</span>
          <span>مـُدرب</span>
        </div>
      </div>
      <div class="course trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'object-group']" />
        </div>
        <div class="info">
          <span>25</span>
          <span>دورة</span>
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

  },


  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
