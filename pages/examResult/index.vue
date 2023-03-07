<template>
  <section class="result_exam">

    <div class="crumb">
      <h3>نتيجة الاختبار البعدي</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">نتيجة الاختبار البعدي</a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-8 col-12">
            <div class="box" data-aos="fade-up">
              <h2 class="main_head">نتيجة الاختبار</h2>

              <p>
                <font-awesome-icon :icon="['fas', 'circle-check']" />
                <badge>تهانياً لك</badge>
                <span> لقد حصلت علي النجاح في الاختبار</span>
              </p>

              <div class="box_info">
                <span>النسبة المئوية</span>
                <badge> 70%</badge>
              </div>
              <div class="box_info">
                <span> التقدير العام</span>
                <span class="good">جيد</span>
              </div>
              <div class="box_info">
                <span> اجمالي عدد الأسئلة</span>
                <span class="all_ques"> 20</span>
              </div>
              <div class="box_info">
                <span> عدد الأسئلة الصحيحة</span>
                <span class="right"> 14 </span>
              </div>
              <div class="box_info">
                <span> عدد الأسئلة الخاطئة</span>
                <span class="wrong"> 6</span>
              </div>

              <button class="main--btn">عرض شهادة الاختبار</button>

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
