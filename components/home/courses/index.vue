<template>
  <section class="courses_component">
    <div class="container">

      <div class="head text-center">
        <h2 class="main_head ">{{ $t('courses.Training_programmes') }} </h2>
      </div>

      <div class="row align-items-center">

        <b-tabs card>
          <b-tab active>

            <template #title>
              <span>{{ $t('courses.Training_course_system') }} <sup>25</sup></span>
            </template>

            <b-card-text>

              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>

              <VueSlickCarousel v-bind="slickOptions" v-if="courses.length">

                <div class="card_course" v-for="(course, index) in courses" :key="index">
                  <div class="image_course">
                    <img :data-src="course.logo" title="course" v-lazy-load alt="course image" width="100%"
                      height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>{{ course.category }}</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>{{ course.duration_houres }}</span>
                          <span>{{ $t('courses.hour') }}</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>{{ course.start_at }}</span>
                      </div>
                    </div>

                    <div class="trainer_desc" v-for="(teacher, index) in course.teachers" :key="index">

                      <div class="image">
                        <img :data-src="teacher.image" title="teacher" v-lazy-load alt="teacher image" width="100%"
                          height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>{{ teacher.name }}</h4>
                        <span>{{ teacher.education }}</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <nuxt-link :to="localePath({ path: `/singleCourse/${course.id}` })">

                        <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                          <span>{{ $t('pages.course_detail') }}</span>
                          <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                        </a>
                      </nuxt-link>

                    </div>

                  </div>

                </div>


              </VueSlickCarousel>

              <nuxt-link :to="localePath('/coursesFilter')">
                <button class="main--btn all_courses"> {{ $t('courses.browse_courses') }}</button>
              </nuxt-link>


            </b-card-text>



          </b-tab>
          <b-tab>
            <template #title>
              <span> {{ $t('courses.Scientific_diploma_system') }} <sup>20</sup></span>
            </template>
            <b-card-text>

              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>
              <VueSlickCarousel v-bind="slickOptions" v-if="Diplomas.length">

                <div class="card_course" v-for="(diploma, index) in Diplomas" :key="index">
                  <nuxt-link :to="localePath({ path: `/singleDiploma/${diploma.id}` })">
                    <div class="image_course">
                      <img :data-src="diploma.logo" title="diploma" v-lazy-load alt="diploma image" width="100%"
                        height="100%" />
                    </div>

                    <div class="card_content">
                      <h3>{{ diploma.category }}</h3>

                      <div class="appoint">
                        <div class="time">
                          <font-awesome-icon :icon="['fas', 'clock']" />
                          <div class="info">
                            <span>{{ diploma.duration_houres }}</span>
                            <span>ساعة</span>
                          </div>
                        </div>
                        <div class="calender">
                          <font-awesome-icon :icon="['fas', 'calendar-days']" />
                          <span>{{ diploma.start_at }}</span>
                        </div>
                      </div>

                      <div class="trainer_desc" v-for="(teacher, index) in diploma.teachers" :key="index">

                        <div class="image">
                          <img :data-src="teacher.image" title="teacher" v-lazy-load alt="teacher image" width="100%"
                            height="100%" />
                        </div>

                        <div class="trainer_name">
                          <h4>{{ teacher.name }}</h4>
                          <span>{{ teacher.education }}</span>
                        </div>

                      </div>

                      <div class="course_link">
                        <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                          <span>{{ $t('pages.diploma_detail') }}</span>
                          <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                        </a>
                      </div>

                    </div>
                  </nuxt-link>
                </div>


              </VueSlickCarousel>

              <nuxt-link :to="localePath('/diplomaFilter')">
                <button class="main--btn all_courses">{{ $t('courses.browse_diploma') }}</button>
              </nuxt-link>



            </b-card-text>
          </b-tab>
        </b-tabs>

      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "courses-component",

  data() {
    return {

      courses: [],
      Diplomas: [],


      loading: false,

      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        margin: 30,
        // "autoplay": true,
        "speed": 100,
        "infinite": true,
        "autoplaySpeed": 4000,
        "cssEase": "linear",
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
            }
          },
          {
            "breakpoint": 775,
            "settings": {
              "slidesToShow": 1,
              arrows: false,
              // autoplay: true
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              arrows: false,
              // autoplay: true
            }
          }
        ]
      }
    }
  },

  async fetch() {


    const [response1, response2] = await Promise.all([
      this.$axios.get(`courses?type=0`),
      this.$axios.get(`courses?type=1`)
    ])


    this.loading = true;

    this.courses = response1.data.data;

    this.Diplomas = response2.data.data;



  },


  mounted() {
  },


  methods: {

    // get courses and diploma data in courses section

    // async getCourses() {
    //   try {
    //     return await this.$axios.get(`courses?type=0`).then(response => {
    //       this.loading = true;
    //       this.courses = response.data.data;
    //       // console.log(response.data.data)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log("catch : " + error)
    //   }
    // },

    // get Diplomas and diploma data in courses section

    // async getDiplomas() {
    //   try {
    //     return await this.$axios.get(`courses?type=1`).then(response => {
    //       this.loading = true;
    //       this.Diplomas = response.data.data;
    //       // console.log(response.data.data)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log("catch : " + error)
    //   }
    // },

  }
}
</script>

<style lang="scss" scoped></style>
