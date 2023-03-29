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
              <h2 class="main_head">{{ $t('exam.Exam_result') }}</h2>

              <p v-if="score_percent > 50">
                <font-awesome-icon :icon="['fas', 'circle-check']" />
                <badge>{{ $t('exam.Congratulations') }}</badge>
                <span> {{ $t('exam.passed') }} </span>
              </p>

              <p class="wrong" v-else>
                <font-awesome-icon :icon="['fas', 'circle-xmark']" />
                <badge>{{ $t('exam.sorry') }}</badge>
                <span>{{ $t('exam.no_percentage') }}</span>
              </p>

              <div class="box_info">
                <span>{{ $t('exam.percentage') }}</span>
                <badge :class="{ 'wrong': score_percent < 50 }"> {{ score_percent }}</badge>
              </div>
              <div class="box_info">
                <span>{{ $t('exam.general_appreciation') }}</span>
                <span class="good">{{ general_appreciation }}</span>
              </div>
              <div class="box_info">
                <span>{{ $t('exam.total_number_of_questions') }}</span>
                <span class="all_ques"> {{ num_of_questions }}</span>
              </div>
              <div class="box_info">
                <span>{{ $t('exam.number_of_correct_questions') }}</span>
                <span class="right"> {{ num_of_right_answers }} </span>
              </div>
              <div class="box_info">
                <span>{{ $t('exam.number_of_wrong_questions') }}</span>
                <span class="wrong">{{ num_of_wrong_answers }}</span>
              </div>

              <!-- buttons -->

              <div class="all_links flex-center gap-3">
                <nuxt-link v-if="score_percent > 75" :to="localePath({ path: `/profile/certificates` })">
                  <button class="main--btn">{{ $t('exam.View_test_certificate') }}</button>
                </nuxt-link>

                <nuxt-link v-if="score_percent > 50"
                  :to="localePath({ path: `/DiplomaAttendance/${diploma_or_course_id}` })">
                  <button class="main--btn">{{ $t('exam.go_to_course') }}</button>
                </nuxt-link>

                <nuxt-link v-if="score_percent < 50" :to="localePath({ path: `/exam/${exam_id}` })">
                  <button class="main--btn">{{ $t('exam.retest') }}</button>
                </nuxt-link>
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

      // exam results

      num_of_questions: '',
      num_of_right_answers: '',
      num_of_wrong_answers: '',
      score_percent: '',
      general_appreciation: '',
      diploma_or_course_id: '',
      exam_id: ''

    }
  },

  created() {

  },


  computed: {
  },

  mounted() {

    // call method get data
    this.getData()

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {


    // get exam questions and answers

    async getData() {
      try {

        return await this.$axios.get(`exam/end/${this.$route.params.id}`).then(response => {

          console.log(response.data)

          this.num_of_questions = response.data.num_of_questions;
          this.num_of_right_answers = response.data.num_of_right_answers;
          this.num_of_wrong_answers = response.data.num_of_wrong_answers;
          this.score_percent = response.data.score_percent;
          this.general_appreciation = response.data.general_appreciation;
          this.diploma_or_course_id = response.data.diploma_or_course_id;
          this.exam_id = response.data.exam_id;


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
