<template>
  <section class="exam">

    <div class="crumb">
      <h3> الاختبار البعدي</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> الاختبار البعدي</a></li>
      </ul>
    </div>

    <div class="all_questions">

      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-9 col-12">

            <div class="question_info" data-aos="fade-up">

              <div class="time">
                <font-awesome-icon :icon="['fas', 'clock']" />
                <span>الوقت المُتبقي</span>
                <span class="time_clock">45 : 04</span>
              </div>
              <div class="current_question">
                <span>انت الأن حالياً في السؤال</span>
                <span class="num">13</span>
                <span>من</span>
                <span class="num">20</span>
              </div>
              <div class="question_number">
                <font-awesome-icon :icon="['fas', 'book']" />
                <span>عدد الأسئلة</span>
                <span class="all_num_ques">سؤال 20</span>
              </div>

            </div>
            <div class="question_body" data-aos="fade-up">
              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن</p>
            </div>
            <div class="question_result" data-aos="fade-up">

              <form>
                <div class="form-group fill_check">
                  <input type="checkbox" id="q1">
                  <label for="q1">نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة
                    في شتئ المجالات التعليمية</label>
                </div>
                <div class="form-group fill_check">
                  <input type="checkbox" id="q2">
                  <label for="q2">نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة
                    في شتئ المجالات التعليمية</label>
                </div>
                <div class="form-group fill_check">
                  <input type="checkbox" id="q3">
                  <label for="q3">نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة
                    في شتئ المجالات التعليمية</label>
                </div>
                <div class="form-group fill_check">
                  <input type="checkbox" id="q4">
                  <label for="q4">نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة
                    في شتئ المجالات التعليمية</label>
                </div>
              </form>

            </div>

            <div class="question_btns" data-aos="fade-up">
              <button class="main--btn finish" aria-label="finish">انهاء الاختبار</button>
              <button class="main--btn" aria-label="next">التالي</button>
              <button class="main--btn" aria-label="prev">السابق</button>
            </div>

          </div>
          <div class="col-lg-2 col-12">

            <div class="side_menu_question" data-aos="fade-right">
              <h3>عداد الأسئلة</h3>
              <div class="box">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>
                  <font-awesome-icon :icon="['fas', 'flag']" />
                </span>
                <span class="current_question">13</span>
              </div>
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

<style lang="scss" scoped>
.form-group {
  display: block;
  // margin-bottom: 15px;
}

.form-group input[type="checkbox"] {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.fill_check label {
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 9px 18px;
  color: #013FCD;
}

.fill_check label:before {
  content: '';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-inline-end: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border: 1px solid #BDCCEC;
  border-radius: 3px;
}

.fill_check input[type="checkbox"]:checked+label {
  background: #F7C553;
  color: #013FCD;
}

.fill_check input[type="checkbox"]:checked+label:before {
  background: #FFFFFF;
  border-radius: 3px;
}

.fill_check input:checked+label:after {
  content: "";
  display: block;
  position: absolute;
  top: 14px;
  right: 30px;
  width: 6px;
  height: 11px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
