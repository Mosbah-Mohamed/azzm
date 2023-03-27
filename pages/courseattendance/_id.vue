<template>
  <section class="courses_content_before_subscribe diploma_attend">

    <div class="crumb">
      <h3>{{ $t('pages.Diploma_attendance') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">{{
          $t('pages.Diploma_attendance') }}</a></li>
      </ul>
    </div>

    <div class="all_info">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-4 col-12">
            <div class="course_content">

              <div class="box_head" v-if="!is_subscribe">
                <p>{{ $t('courses.please_test') }}</p>

                <nuxt-link :to="localePath({ path: `/exam/${exam_before_id}` })">
                  <button class="main--btn" type="button">{{ $t('courses.Test_now') }}</button>
                </nuxt-link>

              </div>

              <div class="box_head qr_code" data-aos="fade-up" v-else>

                <div class="all_span">
                  <span>{{ $t('attendance.Please_delete') }}</span>
                  <span class="qr">QR CODE</span>
                  <span>{{ $t('attendance.able_attend') }}</span>
                </div>

                <div class="" v-html="qr"> </div>

                <!-- <img data-src="@/assets/images/icon-partner-1.png" title="qr" v-lazy-load alt="qr image" width="100%"
                  height="100%" /> -->
              </div>

              <div class="box_content" data-aos="fade-up">
                <h3> {{ $t('attendance.diploma_content') }}</h3>
                <div class="accordion" role="tablist">

                  <b-card no-body class="mb-1">
                    <!-- @click="showIcon = !showIcon" -->
                    <b-card-header role="tab" class="card_head" v-for="(level, index) in levels" :key="'a' + index">
                      <b-button block v-b-toggle="'collapse-' + index" variant="info">
                        <span> {{ level.name }}</span>
                        <span>
                          <font-awesome-icon :icon="['fas', 'chevron-down']" />
                        </span>
                      </b-button>

                      <b-collapse :id="'collapse-' + index" class="mt-2 inner" accordion="my-accordion">
                        <div class="lessons" v-for="(lesson, index) in level.lessons" :key="'b' + index">
                          <div class="lesson">
                            <span><font-awesome-icon :icon="['fas', 'book']" /></span>
                            <span>{{ lesson.title }}</span>
                          </div>
                          <!-- <a :href="lesson.link" target="_blank" rel="noopener noreferrer"> -->
                          <span v-if="is_subscribe" class="discover" @click="lessonIdClicked(lesson)">تصفح</span>
                          <!-- </a> -->
                          <span v-else class="lock">
                            <font-awesome-icon :icon="['fas', 'lock']" />
                          </span>
                        </div>
                      </b-collapse>

                    </b-card-header>



                  </b-card>

                  <div class="flex-center m-5" v-if="!loading">
                    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                  </div>


                </div>
              </div>

              <div class="box_content_team" data-aos="fade-up" v-if="is_subscribe">
                <h3>{{ $t('attendance.training_team') }}</h3>

                <div class="all_trainers">

                  <div class="trainer_desc" v-for="(teacher, index) in teachers" :key="'p' + index">

                    <div class="image">
                      <img :data-src="teacher.image" title="partner" v-lazy-load alt="teacher image" width="100%"
                        height="100%" />
                    </div>

                    <div class="trainer_name">
                      <h4>{{ teacher.name }}</h4>
                      <span>{{ teacher.education }}</span>
                    </div>

                  </div>


                </div>
              </div>

              <div class="rate_box" data-aos="fade-up" v-for="(rate, index) in rates" :key="index" v-if="is_subscribe">

                <div class="all_information">
                  <div class="percentage">
                    <span class="num">{{ rate.diploma_rate_percentage }}%</span>
                    <span>{{ $t('attendance.total_rating') }}</span>
                  </div>

                  <div class="about_rate">
                    <div class="rate">
                      <div class="stars">

                        <no-ssr>
                          <star-rating :rating="rate.diploma_rate_num" :star-size="20" :read-only="true"
                            :show-rating="false"></star-rating>
                          <!-- {{ rating }} -->
                        </no-ssr>

                      </div>
                      <span>{{ $t('attendance.interest_eval') }}</span>

                    </div>

                    <div class="add_rate" v-b-modal.modal-1>
                      <font-awesome-icon :icon="['fas', 'plus']" />
                      <p>
                        {{ $t('attendance.add_rate') }}
                      </p>
                    </div>

                    <b-modal id="modal-1" class="rating_modal" size="lg" ok-only v-model="show">

                      <div class="blur"></div>

                      <form action="">
                        <h6 class="main_head">{{ $t('attendance.post_assessment') }}</h6>

                        <!-- v-model="formData.gender"  -->
                        <div class="form-row">
                          <p>ما مدى رضاك عن المعلم من حيث المحتوي وطريقة سرد المواضيع ومدي تحقيقها للهدف المنشود</p>

                          <label for="">choose teacher</label>
                          <select v-model="teacher_id">
                            <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>
                          </select>
                          <div class="all_inputs">

                            <div class="form-group ratte" v-for="(appreciation, index) in appreciations"
                              :key="'x' + index">
                              <input type="radio" name="teacher_rate" :id="appreciation.id" :value="appreciation.id"
                                v-model="teacher_rate">
                              <label :for="appreciation.id">{{ appreciation.title }}</label>
                            </div>

                          </div>

                        </div>

                        <div class="form-row">
                          <p>ما مدى رضاك عن الدبلوم من حيث المحتوي وطريقة سرد المواضيع ومدي تحقيقها للهدف المنشود</p>
                          <div class="all_inputs">

                            <div class="form-group ratte" v-for="(appreciation, index) in appreciations"
                              :key="'y' + index">
                              <input type="radio" name="diploma_rate" :id="appreciation.id" :value="appreciation.id"
                                v-model="diploma_rate">
                              <label :for="appreciation.id">{{ appreciation.title }}</label>
                            </div>

                          </div>
                        </div>

                        <div class="form-row">
                          <p>ما مدى رضاك عن الموقع من حيث المحتوي وطريقة سرد المواضيع ومدي تحقيقها للهدف المنشود</p>
                          <div class="all_inputs">

                            <div class="form-group ratte" v-for="(appreciation, index) in appreciations"
                              :key="'z' + index">
                              <input type="radio" name="site_rate" :id="appreciation.id" :value="appreciation.id"
                                v-model="site_rate">
                              <label :for="appreciation.id">{{ appreciation.title }}</label>
                            </div>

                          </div>
                        </div>


                        <div class="form-group">
                          <textarea v-model="note"></textarea>
                        </div>

                      </form>

                      <template #modal-footer>
                        <b-button class="main--btn" @click="storeRate">
                          {{ $t('contact.send') }}
                        </b-button>
                      </template>
                    </b-modal>

                  </div>

                </div>

                <p>{{ $t('attendance.active_option') }}</p>

              </div>

              <nuxt-link :to="localePath({ path: `/exam/${exam_after}` })">
                <button data-aos="fade-up" class="main--btn d-block w-100" v-if="is_subscribe">{{
                  $t('courses.Full_course_test') }}</button>
              </nuxt-link>

              <p data-aos="fade-up" class="hint" v-if="is_subscribe">{{ $t('attendance.active_option') }}</p>

            </div>
          </div>
          <div class="col-lg-8 col-12">

            <div class="image_video" data-aos="fade-right">
              <img data-src="@/assets/images/learn.png" title="learn" v-lazy-load alt="partner image" width="100%"
                height="100%" v-if="video_link == ''" />

              <!-- <a :href="video_link" target="_blank" rel="noopener noreferrer">
                <div class="video">
                  <div class="icon">
                    <font-awesome-icon :icon="['fas', 'play']" />
                  </div>
                </div>
              </a> -->

              <div v-html="video_link" v-if="video_link !== ''"></div>

              <div class="overlay" v-if="video_link == ''">
                <span>{{ lesson_name }}</span>
              </div>

            </div>

            <div class="attachment" data-aos="fade-up" v-if="is_subscribe">
              <h4 class="main_head">{{ $t('attendance.Lesson_extensions') }}</h4>
              <div class="content">
                <p>{{ $t('attendance.download_hint') }}</p>
                <a :href="file" target="_self" rel="noopener noreferrer" download>
                  <font-awesome-icon :icon="['fas', 'file']" />
                  <span>{{ $t('attendance.download_attach') }}</span>
                </a>
              </div>
            </div>

            <div class="bar_prog" data-aos="fade-up" v-if="is_subscribe">
              <h5 class="main_head">{{ $t('attendance.progress_level') }}</h5>
              <b-progress :value="progress" max="100" show-progress animated></b-progress>
            </div>

            <div class="comments" data-aos="fade-up" v-if="is_subscribe">

              <div class="heading_comments">

                <h6 class="main_head">{{ $t('attendance.comments') }}</h6>

                <div class="add_comment" v-b-modal.modal-10>
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  <p>
                    {{ $t('attendance.add_comment') }}
                  </p>
                </div>

                <b-modal id="modal-10" size="lg" ok-only v-model="show2">

                  <div class="blur"></div>

                  <form action="">
                    <div class="form-group">
                      <textarea v-model="form.add_comment"></textarea>
                    </div>



                  </form>

                  <template #modal-footer>
                    <b-button class="main--btn" @click="storeComments">
                      {{ $t('contact.send') }}
                    </b-button>
                  </template>


                </b-modal>

              </div>


              <div class="comment_box" v-for="(comment, index) in comments" :key="'g' + index">
                <textarea v-model="comment.content" :readonly="!editable"></textarea>

                <div class="actions" v-if="comment.belong_to_auth_user == true">

                  <div class="action_right">
                    <div v-b-modal="'mymodal-' + comment.id">
                      <!-- {{ comment.id }} -->
                      <span class="update">{{
                        $t('attendance.update') }}</span>
                    </div>
                    <span class="clear" @click="deleteComments(comment.id)">{{ $t('attendance.clear') }}</span>
                  </div>


                  <!-- update comment modal -->

                  <b-modal :id="'mymodal-' + comment.id" size="lg" ok-only v-model="modalVisible['modal-' + comment.id]">

                    <div class="blur"></div>

                    <form action="">
                      <!-- {{ comment.id }} -->
                      <div class="form-group">
                        <textarea v-model="comment.content"></textarea>
                      </div>
                    </form>

                    <template #modal-footer>
                      <b-button class="main--btn" type="button" @click="updateComments(comment.id, comment.content)">
                        {{ $t('contact.send') }}
                      </b-button>
                    </template>


                  </b-modal>


                </div>

              </div>

              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>

import StarRating from "vue-star-rating";

export default {

  components: {
    StarRating
  },

  name: "course_content_before_subscribe",

  layout: 'second-layout',


  // define all properties

  data() {
    return {

      loading: false,
      showIcon: false,

      show: false,
      show2: false,

      bb: "fff",
      editable: false,

      // qr image

      qr: '',

      // single data

      category: '',
      title: '',
      description: '',
      logo: '',
      duration_houres: '',
      duration_days: '',
      education_time: '',
      start_at: '',
      place: '',
      price: '',
      about: '',
      public_goals: '',
      terms: '',
      site_rate: '',
      area: [],

      comments: [],


      semesters: [],
      levels: [],
      rates: [],
      teachers: [],

      progress: 0,

      // is subscribe

      is_subscribe: '',

      exam_before_subscribe: "",
      // add comments

      form: {
        add_comment: '',
      },

      modalVisible: {},

      // lessons name and link

      video_link: '',
      lesson_name: '',

      file: '',


      // exams before

      exam_before_id: '',

      // exam after

      exam_after: '',


      // rate data

      teacher_id: '',

      teacher_rate: '',

      diploma_rate: '',

      site_rate: '',

      note: '',


      // qpperication

      appreciations: []



    }
  },



  created() {

  },


  computed: {

    icon() {
      if (this.showIcon) {
        return ['fas', 'chevron-up']
      } else {
        return ['fas', 'chevron-down']
      }
    }

  },

  //  when component load

  mounted() {

    this.getQrCode();

    this.getData();

    this.getComments();

    this.getRatesValues();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    toggleEditable() {
      this.editable = !this.editable;
    },

    // lessonIdClicked

    lessonIdClicked(lesson) {

      this.video_link = lesson.link;
      this.lesson_name = lesson.title;
      this.file = lesson.file;

      console.log(lesson)

    },


    // get qr code image

    async getQrCode() {
      try {
        return await this.$axios.get(`qrcode/${this.$route.params.id}`).then(response => {

          this.loading = true;

          this.qr = response.data;
          // console.log('qr image' + response.data)

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // get all data in single

    async getData() {
      try {
        return await this.$axios.get(`courses/${this.$route.params.id}`).then(response => {

          this.loading = true;

          this.title = response.data.data.title;
          this.category = response.data.data.category;
          this.description = response.data.data.description;
          this.logo = response.data.data.logo;
          this.duration_houres = response.data.data.duration_houres;
          this.duration_days = response.data.data.duration_days;
          this.education_time = response.data.data.education_time;
          this.start_at = response.data.data.start_at;
          this.place = response.data.data.place;
          this.price = response.data.data.price;
          this.about = response.data.data.about;
          this.public_goals = response.data.data.public_goals;
          this.terms = response.data.data.terms;
          this.area = response.data.data.area;
          this.site_rate = response.data.data.site_rate;

          this.comments = response.data.data.comments;

          // this.semesters = response.data.data.semesters;
          this.levels = response.data.data.levels;
          this.rates = response.data.data.rates;
          this.teachers = response.data.data.teachers;

          this.exam_before_id = response.data.data.exam_before.id;

          this.exam_after = response.data.data.exam_after.id;


          this.is_subscribe = response.data.data.is_subscribe;

          this.progress = response.data.data.progress;

          this.exam_before_subscribe = response.data.data.exam_before_subscribe;

          console.log('response.data.data.exam_before.id' + response.data.data.exam_before.id)

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // get comments

    async getComments() {
      try {
        return await this.$axios.get(`comments/${this.$route.params.id}`).then(response => {

          this.loading = true;

          this.comments = response.data.data;

          // console.log(response.data.data)

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // store comments

    async storeComments() {

      try {
        await this.$axios.$post('comments', { diploma_id: `${this.$route.params.id}`, content: this.form.add_comment }).then(response => {

          this.show2 = false;

          this.form.add_comment = '';

          this.getComments()

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.msg)

          // this.$swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: `${error.response.msg}`,
          //   timer: 3000,
          //   // confirmButtonColor: '#ff7400',
          // })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

    // delete comments

    async deleteComments(comment_id) {

      try {
        await this.$axios.$delete(`comments/${comment_id}`).then(response => {

          this.getComments()

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.msg)

          // this.$swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: `${error.response.msg}`,
          //   timer: 3000,
          //   // confirmButtonColor: '#ff7400',
          // })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },


    hideModal(id) {
      this.modalVisible[`modal-${id}`] = false
    },

    // update comments

    async updateComments(comment_id, comment_content) {

      try {
        await this.$axios.$put('comments/update', { id: `${comment_id}`, content: `${comment_content}` }).then(response => {

          // hide modal

          this.modalVisible[`modal-${comment_id}`] = false;


          this.getComments()

          this.$swal.fire({
            position: 'center',
            type: 'success',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.msg)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },


    // get rates values

    async getRatesValues() {
      try {
        return await this.$axios.get(`rates`).then(response => {

          this.appreciations = response.data.data;

          // console.log(response.data.data)

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // store rate

    async storeRate() {

      this.show = false;

      try {
        await this.$axios.$post('rates',
          {
            diploma_id: `${this.$route.params.id}`,

            teacher_id: `${this.teacher_id}`,

            teacher_rate: `${this.teacher_rate}`,

            diploma_rate: `${this.diploma_rate}`,

            site_rate: `${this.site_rate}`,

            note: `${this.note}`

          }
        ).then(response => {

          this.show2 = false;

          this.form.add_comment = '';

          this.getComments()

          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {
          console.log(error.response.msg)

          // this.$swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: `${error.response.msg}`,
          //   timer: 3000,
          //   // confirmButtonColor: '#ff7400',
          // })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

  }
}
</script>

<style lang="scss" scoped>
.form {
  .main_head::after {
    z-index: unset;
    bottom: 0
  }
}

.form-row {
  display: flex;
  flex-direction: column;
  border-bottom: #013FCD;
  // padding-bottom: 25px;
  margin-bottom: 25px;

  .all_inputs {
    display: flex;
    gap: 40px;
    margin-top: 16px;

    .ratte {
      display: flex;
      gap: 10px;

      label {
        color: #013FCD;
      }

      input[type=radio] {
        width: 18px;
        height: 18px;
      }
    }

  }
}

@media(max-width:575px) {
  .form-row .all_inputs {
    gap: 10px;
    flex-direction: column;
  }
}
</style>
