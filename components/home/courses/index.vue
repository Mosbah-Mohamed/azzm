<template>
  <section class="courses_component">
    <div class="container">

      <div class="head text-center">
        <h2 class="main_head ">البرامـج التدريبيـــة </h2>
      </div>

      <div class="row align-items-center">

        <b-tabs card>
          <b-tab active>

            <template #title>
              <span>نظام الدبلومات العلمية <sup>25</sup></span>
            </template>

            <b-card-text>

              <VueSlickCarousel v-bind="slickOptions">
                <!-- <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="`./${i}-200x100.jpg`" />
        </div> -->
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>


              </VueSlickCarousel>

              <button class="main--btn all_courses">تصفح جميع الدبلومات</button>

            </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span>نظام الدورات التدريبية <sup>20</sup></span>
            </template>
            <b-card-text>
              <VueSlickCarousel v-bind="slickOptions">
                <!-- <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="`./${i}-200x100.jpg`" />
        </div> -->
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>
                <div class="card_course">
                  <div class="image_course">
                    <img data-src="@/assets/images/course_image.png" title="course" v-lazy-load alt="partner image"
                      width="100%" height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>عنوان الدورة يوضع هنا بشكل واضح ومفصل</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>20</span>
                          <span>ساعة</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>20/2/2022</span>
                      </div>
                    </div>

                    <div class="trainer_desc">

                      <div class="image">
                        <img data-src="@/assets/images/trainer.png" title="partner" v-lazy-load alt="partner image"
                          width="100%" height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>سعد حسان الغامدي</h4>
                        <span>مدرب معتمد في علوم الادارة</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                        <span>تفاصيل الدورة</span>
                        <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                      </a>
                    </div>

                  </div>

                </div>


              </VueSlickCarousel>

              <button class="main--btn all_courses">تصفح جميع الدبلومات</button>

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
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        margin: 30,
        // "autoplay": true,
        "speed": 4000,
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
