<template>
  <section class="terms single_article">

    <div class="crumb">
      <h3> المقالات</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> المقالات</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> عنوان المقالة</a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12">
            <div class="content">

              <div class="image_course">
                <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="learn image" width="100%"
                  height="100%" />
              </div>

              <div class="date">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                <span>06 ابريل</span>
              </div>

              <h2>تم بحمد الله اطلاق النسخة الجديدة من تصميم موقع شركة اولات 2022</h2>
              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
                تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات
                عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من
                خلالها تستطيع ان تصبح او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من
                خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>

              <ul>
                <li>
                  <span>قوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ
                    المجالات</span>
                </li>
                <li>
                  <span>قوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ
                    المجالات</span>
                </li>
                <li>
                  <span>قوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ
                    المجالات</span>
                </li>
                <li>
                  <span>قوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ
                    المجالات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>


export default {

  name: "termsPage",

  layout: 'second-layout',


  // define all properties

  data() {
    return {


    }
  },

  //  fetch data on server side only in pages not component ( fetch ,async data)

  // async asyncData({ $axios }) {
  //   try {
  //     // let response = await this.$axios.$get("main_page/main");
  //     return await $axios.$get(process.env.baseUrl + "main_page/main").then(res => {

  //       return {
  //         jjj: res.data.content.title
  //       };

  //     })

  //   } catch (err) {

  //     console.log(err);

  //   }
  // },




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
