<template>
  <section class="courses_before_subscribe">

    <div class="crumb">
      <h3>{{ $t('pages.courses_before_enrollment') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">{{
          $t('pages.courses_before_enrollment') }}</a></li>
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

              <b-tab :title="$t('pages.Course_guide')" active>

                <div class="course_guide">

                  <div class="about_course">
                    <h4 class="main_head">{{ $t('pages.About_course') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="about"></p>
                  </div>

                  <div class="about_course">
                    <h4 class="main_head">{{ $t('pages.General_objectives_of_course') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="public_goals"></p>

                    <!-- <ul>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                    </ul> -->

                  </div>

                  <div class="about_course">
                    <h4 class="main_head">{{ $t('pages.Admission_registration_requirements') }}</h4>

                    <div class="flex-center m-5" v-if="!loading">
                      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <p v-html="terms"></p>

                    <!-- <ul>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                    </ul> -->

                  </div>


                  <div class="about_course container table-responsive py-5">
                    <h4 class="main_head"> {{ $t('pages.About_course') }}</h4>
                    <table class="table table-bordered table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col">{{ $t('courses.course_name') }}</th>
                          <th scope="col">{{ $t('courses.hours') }}</th>
                          <th scope="col">{{ $t('courses.study_duration') }}</th>
                          <th scope="col">{{ $t('courses.Study_pattern') }} </th>
                          <th scope="col">{{ $t('courses.Study_location') }} </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>{{ category }}</th>
                          <td>{{ duration_houres }} {{ $t('courses.hour') }}</td>
                          <td>{{ duration_days }}</td>
                          <td>{{ education_time }}</td>
                          <td>{{ area.title }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </b-tab>

              <b-tab :title="$t('pages.Course_contents')">
                <div class="box_content_diploma" data-aos="fade-up">
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
                            <!-- <span class="discover" @click="lessonIdClicked(lesson)">تصفح</span> -->
                            <!-- </a> -->
                            <span class="lock">
                              <font-awesome-icon :icon="['fas', 'lock']" />
                            </span>
                          </div>
                        </b-collapse>

                      </b-card-header>
                    </b-card>

                    <!-- <p>{{ video_link }}</p>
                    <p>{{ lesson_name }}</p> -->

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

              <b-tab :title="$t('pages.Course_evaluation')">
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
                <img :data-src="logo" title="learn" v-lazy-load alt="image" width="100%" height="100%" />

                <div class="video">
                  <div class="icon">
                    <font-awesome-icon :icon="['fas', 'play']" />
                  </div>
                </div>

              </div>

              <div class="price" v-if="is_subscribe == false">
                <span class="num">{{ price }}</span>
                <span class="ryal">{{ $t('courses.ryal') }}</span>
              </div>

              <!--  @click="subscribe" -->
              <button v-if="is_subscribe == false" class="main--btn" aria-label="subscribe" title="subscribe"
                @click="subscribe">{{
                  $t('pages.sign_up_course') }}</button>

              <nuxt-link :to="localePath({ path: `/courseattendance/${$route.params.id}` })">

                <button v-if="is_subscribe == true" class="main--btn mt-4 mb-4" aria-label="course" title="go course">
                  {{ $t('pages.Enter_course') }}
                </button>

              </nuxt-link>

              <ul>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    <span>{{ $t('courses.start_in') }}</span>
                  </div>
                  <span class="result">{{ start_at }}</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>{{ $t('courses.course_days') }}</span>
                  </div>
                  <div class="results">
                    <span class="result">{{ duration_days }}</span>
                    <span class="result">{{ $t('courses.day') }}</span>
                  </div>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>{{ $t('courses.course_hours') }}</span>
                  </div>
                  <div class="results">
                    <span class="result">{{ duration_houres }}</span>
                    <span class="result">{{ $t('courses.hour') }}</span>
                  </div>

                </li>
                <li v-for="(teacher, index) in teachers" :key="'i' + index">
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                    <span>{{ $t('courses.coach_name') }}</span>
                  </div>
                  <span class="result">{{ teacher.name }}</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    <span>{{ $t('courses.course_place') }}</span>
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

  components: {
    StarRating
  },

  name: "course_before_subscribe",

  layout: 'second-layout',


  // define all properties

  data() {
    return {

      loading: false,

      // data from api

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

      levels: [],
      rates: [],
      teachers: [],

      // lessons name and link

      video_link: '',
      lesson_name: '',

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

    // lessonIdClicked

    lessonIdClicked(lesson) {

      this.video_link = lesson.link;
      this.lesson_name = lesson.title;

      console.log(lesson)

    },

    // subscribe course

    async subscribe() {

      try {
        await this.$axios.$post('enrollment', { diploma_id: this.$route.params.id }).then(response => {

          this.$router.push(this.localePath({ path: `/payment/${response.data.id}` }));

          // console.log(response.data.id)

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

    // get single course data from api

    async getData() {
      try {
        return await this.$axios.get(`courses/${this.$route.params.id}`).then(response => {

          this.loading = true;

          this.category = response.data.data.category;
          this.title = response.data.data.title;
          this.description = response.data.data.description;
          this.logo = response.data.data.logo;
          this.duration_houres = response.data.data.duration_houres;
          this.duration_days = response.data.data.duration_days;
          this.education_time = response.data.data.education_time;
          this.start_at = response.data.data.start_at;
          this.place = response.data.data.place;
          this.price = response.data.data.price;
          this.is_subscribe = response.data.data.is_subscribe;
          this.site_rate = response.data.data.site_rate;


          this.about = response.data.data.about;
          this.public_goals = response.data.data.public_goals;
          this.terms = response.data.data.terms;
          this.area = response.data.data.area;

          this.levels = response.data.data.levels;

          this.rates = response.data.data.rates;

          this.teachers = response.data.data.teachers;

          console.log('subscribe' + response.data.data.is_subscribe)

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

<style lang="scss" scoped></style>
