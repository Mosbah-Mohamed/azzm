<template>
  <section class="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 position-relative">
          <div class="image_top">
            <img data-src="@/assets/images/about.png" title="about" v-lazy-load alt="hero image" width="100%"
              height="100%" />

            <div class="experience">
              <span>15</span>
              <span>عام من الخبرة</span>
            </div>

          </div>

          <div class="image_botton">
            <img data-src="@/assets/images/back_about.svg" title="about" v-lazy-load alt="hero image" width="100%"
              height="100%" />
          </div>

        </div>
        <div class="col-lg-6 col-12">
          <div class="content">
            <h3 class="main_head">
              معهد عـزم ستـار للتـدريـب
            </h3>
            <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
              التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
              الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
              تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>
            <button class="main--btn">إنضم إلينا</button>
          </div>

        </div>

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
