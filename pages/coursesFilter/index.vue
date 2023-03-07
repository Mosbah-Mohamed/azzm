<template>
  <section class="course_filter courses_component">

    <div class="crumb">
      <h3>الدورات</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الدورات</a></li>
      </ul>
    </div>

    <div class="all_content_filter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12">

            <div class="filter_box">
              <h3>
                <font-awesome-icon :icon="['fas', 'sliders']" />
                <span>فلترة الدورات</span>
              </h3>

              <div class="all_check_boxes">
                <h4>الأقسام</h4>

                <form>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="html">
                    <label for="html">دروات الموارد البشرية</label>
                  </div>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="css">
                    <label for="css">تحليل الأعمال</label>
                  </div>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="javascript">
                    <label for="javascript">المالية</label>
                  </div>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="js">
                    <label for="js">الشهادات الإحترافية</label>
                  </div>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="jq">
                    <label for="jq">تحليل الأعمال</label>
                  </div>
                  <div class="form-group fill_check">
                    <input type="checkbox" id="vue">
                    <label for="vue">المالية</label>
                  </div>

                  <div class="form-group">
                    <h5>السعر</h5>
                  </div>

                  <div class="row range_two">

                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <label for="vue3">من</label>
                        <input type="text" placeholder="ريال" id="vue3">
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <label for="vue2">إلى</label>
                        <input type="text" placeholder="ريال" id="vue2">
                      </div>
                    </div>

                  </div>

                  <div class="form-group slide_slide">
                    <vue-range-slider :min="min" :max="max" v-model="value" direction="rtl"></vue-range-slider>
                  </div>

                  <div class="form-group">
                    <button class="main--btn">عرض الدورة</button>
                  </div>

                </form>

              </div>

            </div>

          </div>

          <div class="col-lg-8 col-12">

            <div class="head_arrange">

              <div class="filter_methods">
                <div class="select_old_new">
                  <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true"
                    :show-labels="false" placeholder="Pick a value"></multiselect>
                </div>

                <div class="form-group has-search">
                  <div class="icon_sea">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  </div>
                  <input type="text" class="form-control" placeholder="Search">
                </div>

              </div>
              <div class="icons">
                <font-awesome-icon @click="addClassRow" id="my-div-row" :icon="['fas', 'list-ul']" />
                <font-awesome-icon @click="addClassToDiv" class="activeColor" id="my-div"
                  :icon="['fas', 'table-cells']" />
              </div>

            </div>

            <div class="row mt-4 all_cards">
              <div class="col-md-6 col-12">
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
              </div>
              <div class="col-md-6 col-12">
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
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import VueRangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css'

export default {

  name: "termsPage",

  layout: 'second-layout',

  components: {
    VueRangeSlider,
  },


  // define all properties

  data() {
    return {

      min: 0,
      max: 100,
      value: [20, 80],

      status: '',

      values: null,
      options: ['list', 'of', 'options']

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

    addClassToDiv() {
      const divElement = document.getElementById('my-div');
      const divElement2 = document.getElementById('my-div-row');

      let allCards = document.getElementsByClassName('all_cards');

      for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove('card--row')
      }

      if (divElement.classList.contains('activeColor')) {
        divElement2.classList.remove('activeColor');
      } else {
        divElement.classList.add('activeColor');
        divElement2.classList.remove('activeColor');
      }
    },

    addClassRow() {
      const divElement = document.getElementById('my-div');
      const divElement2 = document.getElementById('my-div-row');

      let allCards = document.getElementsByClassName('all_cards');


      for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.add('card--row')
      }

      if (divElement2.classList.contains('activeColor')) {
        divElement.classList.remove('activeColor');

      } else {
        divElement2.classList.add('activeColor');
        divElement.classList.remove('activeColor');
      }
    }

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
  color: #3B568F;
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
  background: #ECF2FF;
  color: #013FCD;
}

.fill_check input[type="checkbox"]:checked+label:before {
  border: 1px solid #F7C553;
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


.range_two {
  margin-bottom: 20px;
}

input[type="text"] {
  border: 1px solid #BDCCEC;
  border-radius: 3px;
  height: 26px
}

button {
  margin-top: 32px;
  width: 100%
}

.slide_slide {
  margin-top: 20px;
}

.range-slider {
  width: 100%
}

.multiselect {
  width: 156px;
  height: 33px;
}


.card--row {
  transition: 0.5s;

  .col-md-6 {
    width: 100%;
    flex: 100%;

    .card_course {
      display: flex;
      margin-bottom: 25px;

      .image_course {
        height: 100%;
        max-width: 30%;
        flex: 30%;
      }

      .card_content {
        max-width: 70%;
        flex: 70%;
      }
    }
  }
}
</style>
