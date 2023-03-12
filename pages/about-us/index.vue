<template>
  <section class="about_us">

    <div class="crumb">
      <h3>{{ $t('navbar.about') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>

        <li><a href="#" aria-label="about" target="_blank" rel="noopener"><nuxt-link :to="localePath('/about-us')">{{
          $t('navbar.about') }}</nuxt-link></a></li>

      </ul>
    </div>


    <LazyHomeAboutAzzm />

    <div class="all_content_vision">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-12" v-for="(item, index) in items" :key="index">

            <div class="box" data-aos="fade-up" :class="{ 'box_center': index == 1 }">

              <div class="image">
                <img :data-src="item.icon" title="vision" v-lazy-load alt="nav logo" width="100%" height="100%" />
              </div>

              <h3>{{ item.title }}</h3>

              <p v-html="item.object"></p>

            </div>

          </div>
          <!-- <div class="col-lg-4 col-md-6 col-12">

            <div class="box box_center">

              <div class="image">
                <img data-src="@/assets/images/Message.svg" title="vision" v-lazy-load alt="nav logo" width="100%"
                  height="100%" />
              </div>

              <h3>رسالتنا</h3>

              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
                تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>

            </div>

          </div>
          <div class="col-lg-4 col-md-6 col-12">

            <div class="box">

              <div class="image">
                <img data-src="@/assets/images/eye.svg" title="vision" v-lazy-load alt="nav logo" width="100%"
                  height="100%" />
              </div>

              <h3>رؤيتنا</h3>

              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن</p>

            </div>

          </div> -->
        </div>
      </div>
    </div>

    <LazyHomeWhyUs />



  </section>
</template>

<script>


export default {

  name: "termsPage",

  layout: 'second-layout',


  // define all properties

  data() {
    return {
      items: [],
    }
  },

  async asyncData({ $axios }) {

    try {

      return $axios.get('setting/about').then(response => {
        return {
          items: response.data.data
        }
      }).catch(error => {
        console.error(error)
      })

    } catch (error) {

      console.log("catch :" + error)

    }

  },


  created() {

  },


  computed: {
  },

  //  when component load

  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {


  }
}
</script>

<style lang="scss" scoped></style>
