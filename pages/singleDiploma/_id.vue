<template>
  <section class="courses_before_subscribe">

    <div class="crumb">
      <h3> {{ $t('pages.diploma_before_enrollment') }} </h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> {{
          $t('pages.diploma_before_enrollment') }} </a></li>
        <!-- <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li> -->
      </ul>
    </div>

    <div class="all_content">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-8 col-12">

            <div class="course_info">
              <h3>{{ title }}</h3>
              <p v-html="description"></p>
            </div>

            <b-tabs>

              <b-tab :title="$t('pages.diploma_guide')" active>

                <div class="course_guide">

                  <div class="about_course">
                    <h4 class="main_head"> {{ $t('pages.About_diploma') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="about"></p>
                  </div>

                  <div class="about_course">
                    <h4 class="main_head">{{ $t('pages.General_objectives_of_diploma') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="public_goals"></p>

                  </div>

                  <div class="about_course">
                    <h4 class="main_head">{{ $t('pages.Admission_registration_requirements') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="terms"></p>

                  </div>


                  <div class="about_course container table-responsive py-5">
                    <h4 class="main_head">{{ $t('pages.About_diploma') }}</h4>
                    <table class="table table-bordered table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col">{{ $t('courses.diploma_name') }}</th>
                          <th scope="col">{{ $t('courses.hours') }}</th>
                          <th scope="col">{{ $t('courses.study_duration') }}</th>
                          <th scope="col">{{ $t('courses.Study_pattern') }}</th>
                          <th scope="col">{{ $t('courses.Study_location') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>{{ category }}</th>
                          <td>{{ duration_houres }} {{ $t('courses.hour') }}</td>
                          <td>{{ duration_days }}</td>
                          <td>{{ education_time }}</td>
                          <!-- The optional chaining operator (?.) allows you to safely access nested properties and methods without throwing an error if any of the intermediate values are null or undefined -->
                          <td v-if="area?.title">{{ area.title }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </b-tab>

              <b-tab :title="$t('pages.diploma_contents')">

                <div class="box_content_diploma" data-aos="fade-up">
                  <div class="accordion" role="tablist">

                    <b-card no-body class="mb-1">
                      <!-- @click="showIcon = !showIcon" -->
                      <b-card-header role="tab" class="card_head" v-for="(semester, index) in semesters"
                        :key="'a' + index">
                        <b-button block v-b-toggle="'collapse-' + index" variant="info">
                          <span> {{ semester.name }}</span>
                          <span>
                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                          </span>
                        </b-button>

                        <b-collapse :id="'collapse-' + index" class="accordion_content" accordion="my-accordion"
                          role="tabpanel">

                          <b-card-header class="card_head_inner" v-for="(subject, index) in semester.subjects"
                            :key="'b' + index">

                            <b-button block v-b-toggle="'collapse-' + index + 'inner'" class="inner-btn">
                              <span>{{ subject.name }}</span>
                              <span>
                                <font-awesome-icon :icon="['fas', 'chevron-down']" />
                              </span>
                            </b-button>

                            <b-collapse :id="'collapse-' + index + 'inner'" class="mt-2 inner">
                              <div class="lessons" v-for="(lesson, index) in subject.lessons" :key="'c' + index">
                                <div class="lesson">
                                  <span><font-awesome-icon :icon="['fas', 'book']" /></span>
                                  <span>{{ lesson.title }}</span>
                                </div>
                                <!-- <a :href="lesson.link" target="_blank" rel="noopener noreferrer">
                                  <span class="discover">تصفح</span>
                                </a> -->
                                <span class="lock">
                                  <font-awesome-icon :icon="['fas', 'lock']" />
                                </span>
                              </div>
                            </b-collapse>

                          </b-card-header>

                        </b-collapse>


                      </b-card-header>

                      <!-- visible -->

                    </b-card>

                  </div>

                  <div class="flex-center m-5" v-if="!loading">
                    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                  </div>
                </div>


              </b-tab>

              <b-tab :title="$t('pages.About_coach')">
                <div class="about_trainer" v-for="(teacher, index) in teachers" :key="'c' + index">

                  <div class="all_content_trainer">
                    <div class="trainer_info">
                      <div class="image">
                        <img :data-src="teacher.image" title="trainer" v-lazy-load alt="trainer image" width="100%"
                          height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>{{ teacher.name }}</h4>
                        <span>{{ teacher.education }}</span>
                      </div>
                    </div>

                    <div class="stars">
                      <no-ssr>
                        <star-rating :rating="teacher.rate" :star-size="20" :read-only="true"
                          :show-rating="false"></star-rating>
                      </no-ssr>
                    </div>

                  </div>

                  <p>{{ teacher.education_description }}</p>

                </div>



              </b-tab>

              <b-tab :title="$t('pages.diploma_evaluation')">
                <div class="rate_dipolma">

                  <div class="row">
                    <div class="col-lg-9 col-12">
                      <div class="rate_one" v-for="(rate, index) in rates" :key="'rate' + index">

                        <div class="image">
                          <img :data-src="rate.user_avatar" title="trainer" v-lazy-load alt="trainer image" width="100%"
                            height="100%" />
                        </div>

                        <div class="rate_body">

                          <div class="rate_info">
                            <span class="name">{{ rate.user }}</span>

                            <div class="stars">
                              <no-ssr>
                                <star-rating :rating="rate.diploma_rate" :star-size="20" :read-only="true"
                                  :show-rating="false"></star-rating>
                              </no-ssr>
                            </div>
                          </div>

                          <p>{{ rate.note }}</p>


                        </div>

                      </div>
                    </div>

                    <div class="col-lg-3 col-12">

                      <div class="total_rate">
                        <span class="percentage">{{ site_rate }}%</span>
                        <span> {{ $t('attendance.total_rating') }}</span>
                      </div>
                    </div>

                  </div>

                </div>
              </b-tab>

            </b-tabs>

          </div>
          <div class="col-lg-4 col-12">
            <div class="side_info">
              <div class="image_video">

                <div class="video_personal" v-if="video_personal" v-html="video_personal" style="width:100%;height:100%">
                </div>

                <img v-else :data-src="logo" title="learn" v-lazy-load alt="image" width="100%" height="100%" />

                <div class="video d-none">
                  <div class="icon">
                    <font-awesome-icon :icon="['fas', 'play']" />
                  </div>
                </div>

              </div>

              <div class="price" v-if="is_subscribe == false">
                <span class="num">{{ price }}</span>
                <span class="ryal">{{ $t('courses.ryal') }}</span>
              </div>

              <!-- @click="subscribe" -->
              <button v-if="is_subscribe == false" class="main--btn" aria-label="subscribe" title="subscribe"
                @click="subscribe"> {{
                  $t('pages.sign_up_diploma') }}
              </button>

              <nuxt-link :to="localePath({ path: `/DiplomaAttendance/${$route.params.id}` })">

                <button v-if="is_subscribe == true" class="main--btn mt-4 mb-4" aria-label="diploma" title="go diploma">
                  {{ $t('pages.Enter_diploma') }}
                </button>

              </nuxt-link>


              <ul>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    <span> {{ $t('courses.start_in_diploma') }}</span>
                  </div>
                  <span class="result">{{ start_at }}</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>{{ $t('courses.diploma_days') }}</span>
                  </div>
                  <div class="results">
                    <span class="result">{{ duration_days }}</span>
                    <span class="result">{{ $t('courses.day') }}</span>
                  </div>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>{{ $t('courses.hours') }}</span>
                  </div>
                  <div class="results">
                    <span class="result">{{ duration_houres }}</span>
                    <span class="result">{{ $t('courses.hour') }}</span>
                  </div>

                </li>
                <li v-for="(teacher, index) in teachers" :key="'i' + index">
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                    <span> {{ $t('courses.coach_name') }}</span>
                  </div>
                  <span class="result">{{ teacher.name }}</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    <span>{{ $t('courses.diploma_place') }}</span>
                  </div>
                  <a :href="place" aria-label="Twitter" target="_blank" rel="noopener" class="result">{{
                    $t('courses.google_map_link') }}</a>
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
import StarRating from "vue-star-rating";

export default {

  name: "course_before_subscribe",

  layout: 'second-layout',

  middleware: ['checkId'],

  components: {
    StarRating
  },

  // define all properties

  data() {
    return {

      loading: false,

      // data from api

      category: '',
      title: '',
      description: '',
      logo: '',
      video_personal: '',
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

      semesters: [],
      rates: [],
      teachers: [],

      progress: 0,

      // is subscribe

      is_subscribe: '',


    }
  },


  created() {

  },


  computed: {
  },

  //  when component load

  mounted() {

    this.getData();

    // console.log(this.$route.params.id)

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {


    // subscribe Diploma

    async subscribe() {

      try {
        await this.$axios.$post('enrollment', { diploma_id: this.$route.params.id }).then(response => {

          console.log(response)

          this.$router.push(this.localePath({ path: `/payment/${response.data.id}` }));


          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          });

        }).catch(error => {
          console.log(error.response.data.msg)

          if (error.response.data.data.is_pay == 0) {
            this.$swal.fire({
              type: 'error',
              text: `${error.response.data.data.payed}`,
              showConfirmButton: true,
              confirmButtonText: this.$t('pages.pay_now'),
              // timer: 3000,
              preConfirm: () => {
                this.$router.push(this.localePath({ path: `/payment/${error.response.data.data.id}` }));
              },
              // confirmButtonColor: '#ff7400',
            })
          } else {
            console.log('payed')
          }

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },


    // get data from api

    async getData() {
      try {
        return await this.$axios.get(`diplomas/${this.$route.params.id}`).then(response => {

          this.loading = true;

          this.title = response.data.data.title;
          this.category = response.data.data.category;
          this.description = response.data.data.description;
          this.logo = response.data.data.logo;
          this.video_personal = response.data.data.video;
          this.duration_houres = response.data.data.duration_houres;
          this.duration_days = response.data.data.duration_days;
          this.education_time = response.data.data.education_time;
          this.start_at = response.data.data.start_at;
          this.place = response.data.data.map;
          this.price = response.data.data.price;
          this.about = response.data.data.about;
          this.public_goals = response.data.data.public_goals;
          this.terms = response.data.data.terms;
          this.area = response.data.data.area;


          this.progress = response.data.data.progress;

          this.is_subscribe = response.data.data.is_subscribe;

          this.site_rate = response.data.data.site_rate;

          this.semesters = response.data.data.semesters;
          this.rates = response.data.data.rates;
          this.teachers = response.data.data.teachers;

          // console.log(response.data.data)

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
.fill {
  color: gold; // change the color to indicate a filled star
}
</style>

