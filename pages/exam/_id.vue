<template>
  <section class="exam">

    <div class="crumb">
      <h3> الاختبار </h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> الاختبار </a></li>
      </ul>
    </div>

    <div class="all_questions">

      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-9 col-12">

            <div class="question_info" data-aos="fade-up">

              <div class="time">
                <font-awesome-icon :icon="['fas', 'clock']" />
                <span>{{ $t('exam.remain_time') }}</span>
                <span class="time_clock">{{ timeLeftString }}</span>
              </div>

              <div class="current_question">
                <span>{{ $t('exam.current_question') }}</span>
                <span class="num">{{ question_order }}</span>
                <span>{{ $t('courses.from') }}</span>
                <span class="num">{{ num_of_questions }}</span>
                <!-- <span class="num">{{ question_order }}</span> -->

              </div>
              <div class="question_number">
                <font-awesome-icon :icon="['fas', 'book']" />
                <span> {{ $t('exam.question_num') }}</span>
                <span class="all_num_ques"> {{ num_of_questions }} {{ $t('exam.question') }}</span>
              </div>

            </div>

            <div class="question_body" data-aos="fade-up">
              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>
              <transition name="fade">
                <p>{{ question }}</p>
              </transition>

            </div>

            <div class="question_result" data-aos="fade-up">

              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>


              <form ref="anyName">

                <!-- :active="user_answer_id !== null && user_answer_id == answer.id" -->

                <div class="form-group fill_check" v-for="(answer, index) in answers" :key="'m' + index">
                  <input type="radio" :id="answer.id + question_id" :name="'answer' + question_id" :value="answer.id"
                    :checked="user_answer_id !== null && user_answer_id == answer.id" @input="answer_id = answer.id">

                  <label :for="answer.id + question_id">

                    {{ answer.answer }}

                  </label>
                </div>


                <!-- <div class="form-group fill_check" v-for="(answer, index) in answers" :key="'o' + index">
                  <input type="radio" :id="answer.id" :name="answer.id + 'kk'" :value="answer.id" v-model="answer_id">

                  <label :for="answer.id">
                    {{ answer.answer }}
                  </label>
                </div> -->


              </form>

            </div>

            <div class="question_btns" data-aos="fade-up">

              <button class="main--btn" aria-label="next" @click="goNext"
                v-if="first_question == 'true' || last_question == 'false'">{{
                  $t('exam.next')
                }}</button>

              <button class="main--btn" aria-label="prev" v-if="first_question == 'false'" @click="goPrevious">{{
                $t('exam.previous') }}</button>

              <button class="main--btn finish" aria-label="finish" @click="endExam" v-if="last_question == 'true'">{{
                $t('exam.finish')
              }}</button>


            </div>

          </div>
          <div class="col-lg-2 col-12">

            <div class="side_menu_question" data-aos="fade-right">
              <h3>{{ $t('exam.Question_counter') }}</h3>
              <div class="box">
                <span v-for="(number, index) in num_of_questions" :key="'o' + index"
                  :class="{ 'current_question': number == question_order }">
                  {{ number }}
                </span>
                <!-- <span>{{ number }}</span> -->
                <!-- <span>3</span>
                <span>4</span>
                <span>
                  <font-awesome-icon :icon="['fas', 'flag']" />
                </span>
                <span class="current_question">13</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  </section>
</template>

<script>
import moment from "moment";

export default {

  name: "examPage",

  layout: 'second-layout',

  // validate({ params }) {
  //   // Check if id parameter is present in the URL
  //   if (!params.id) {
  //     return {
  //       path: '/error', // redirect to 404 page
  //       statusCode: 404 // set status code to 404
  //     }
  //   }
  // },


  // define all properties

  data() {
    return {

      loading: false,

      // data from api

      question: '',
      question_id: '',
      answer_id: '',
      question_order: '',
      last_question: '',
      num_of_questions: '',
      exam_type: '',

      answers: [],

      user_answers: '',


      // check next and previous buttons visibility

      first_question: '',


      // exam time

      timeLeft: '',
      timeLeftString: '',
      timer: null,

      is_finished: '',

      // add checked

      user_answer_id: ''




    }
  },


  created() {

  },

  watch: {
    timeLeft: function (val) {
      const timeZero = moment("1900-01-01 00:00:00");
      this.timeLeftString = timeZero.add(val, 'seconds').format("HH:mm:ss")
      // this.timeLeftString = moment.duration(timeZero.add(val, 'minutes').format("HH:mm:ss")).asMinutes()
      // console.log(this.timeLeftString)
    },
  },


  computed: {
  },

  //  when component load

  mounted() {

    // call method get data
    // this.getData();

    this.get_is_ended();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {


    async get_is_ended() {
      try {

        await this.$axios.get(`exam/time/${this.$route.params.id}`).then(response => {
          this.is_finished = response.data.data.is_ended;

          if (this.is_finished == "true") {
            console.log(this.is_finished)
            console.log("goToQuestion")
            // this.goToQuestion(this.$route.params.question_id)


          } else {
            console.log("get data")
            console.log(this.is_finished)
            this.getData();
          }

        }).catch(error => {

          console.log(error.response.data.message)
        })

      } catch (error) {
        console.log("error=>", error)
      }
    },


    // get exam questions and answers

    async getData() {
      try {

        return await this.$axios.get(`exam/${this.$route.params.id}`).then(response => {

          console.log(response.data)

          this.loading = true;

          this.num_of_questions = response.data.data.question.exam.num_of_questions;

          this.exam_type = response.data.data.question.type;

          this.timeLeft = response.data.data.question.exam.time * 60;

          this.question = response.data.data.question.question;

          this.question_id = response.data.data.question.id;

          this.answers = response.data.data.question.answers;

          this.user_answers = [];

          this.question_order = response.data.data.question.question_order;

          this.user_answer_id = response.data.data.question.user_answer_id;


          this.last_question = response.data.data.question.last_question;

          this.first_question = response.data.data.question.first_question;

          // start timer

          this.timer = setInterval(() => {
            if (this.timeLeft <= 0) {

              console.log(this.timeLeft)

              clearInterval(this.timer);
              this.endExam()
              // alert('Done');
            } else {
              this.timeLeft--
            }
          }, 1000)

          console.log(response.data)

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // next question

    async goNext() {
      try {

        return await this.$axios.post(`exam/question/next`,
          {
            exam_id: `${this.$route.params.id}`,
            question_id: `${this.question_id}`,
            answer_id: `${this.answer_id}`

          }
        ).then(response => {

          console.log(response.data)

          this.loading = true;

          this.num_of_questions = response.data.data.question.exam.num_of_questions;

          // this.timeLeft = response.data.data.question.exam.time;

          this.question = response.data.data.question.question;

          this.question_id = response.data.data.question.id;

          this.answers = response.data.data.question.answers;

          this.question_order = response.data.data.question.question_order;

          this.user_answers = response.data.data.user_answers;

          this.answer_id = '';

          this.user_answer_id = response.data.data.question.user_answer_id;

          this.$refs.anyName.reset();


          this.last_question = response.data.data.question.last_question;

          this.first_question = response.data.data.question.first_question;



        }).catch(error => {
          console.log(error)
        })


      } catch (error) {
        console.log("catch : " + error)
      }
    },


    // previous question

    async goPrevious() {
      try {

        return await this.$axios.post(`exam/question/previous`,
          {
            exam_id: `${this.$route.params.id}`,
            question_id: `${this.question_id}`,
          }
        ).then(response => {

          console.log(response.data)

          this.loading = true;

          this.num_of_questions = response.data.data.question.exam.num_of_questions;

          // this.timeLeft = response.data.data.question.exam.time;

          this.question = response.data.data.question.question;

          this.question_id = response.data.data.question.id;

          this.answers = response.data.data.question.answers;

          this.question_order = response.data.data.question.question_order;

          this.user_answers = response.data.data.user_answers;

          this.answer_id = '';

          this.$refs.anyName.reset();

          this.user_answer_id = response.data.data.question.user_answer_id;

          this.last_question = response.data.data.question.last_question;

          this.first_question = response.data.data.question.first_question;

        }).catch(error => {
          console.log(error)
        })


      } catch (error) {
        console.log("catch : " + error)
      }
    },


    // end exam

    async endExam() {
      try {

        return await this.$axios.post(`exam/end`,
          {
            exam_id: `${this.$route.params.id}`,
            question_id: `${this.question_id}`,
            answer_id: `${this.answer_id}`
          }
        ).then(response => {

          console.log(response.data)

          this.$router.push(this.localePath({ path: `/examResult/${this.$route.params.id}` }));


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

<style lang="scss" scoped>
.form-group {
  display: block;
  // margin-bottom: 15px;
}

.form-group input[type="radio"] {
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

.fill_check input[type="radio"]:checked+label {
  background: #F7C553;
  color: #013FCD;
}

.fill_check input[type="radio"]:checked+label:before {
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
