<template>
  <section class="course_filter courses_component">

    <div class="crumb">
      <h3>{{ $t('navbar.courses') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link
              :to="localePath('/coursesFilter')">{{
                $t('navbar.courses') }}</nuxt-link></a></li>
      </ul>
    </div>

    <div class="all_content_filter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12">

            <div class="filter_box">
              <h3>
                <font-awesome-icon :icon="['fas', 'sliders']" />
                <span>{{ $t('courses.Course_filtering') }}</span>
              </h3>

              <div class="all_check_boxes">
                <h4>{{ $t('courses.sections') }}</h4>

                <form>
                  <div class="form-group fill_check" v-for="(item, index) in categories" :key="'k' + index">
                    <input type="checkbox" :id="'item-' + index" :value="item.id" v-model="selectedOptions"
                      @change="getData()">
                    <label :for="'item-' + index">{{ item.name }}</label>
                  </div>

                  <div class="form-group">
                    <h5>{{ $t('courses.price') }}</h5>
                  </div>

                  <div class="row range_two">

                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <label for="vue3">{{ $t('courses.from') }}</label>
                        <input type="number" :placeholder="$t('courses.ryal')" min="0" id="vue3" v-model="value_2[0]">
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <label for="vue2">{{ $t('courses.to') }}</label>
                        <input type="number" :placeholder="$t('courses.ryal')" min="0" id="vue2" v-model="value_2[1]">
                      </div>
                    </div>

                  </div>

                  <div class="form-group slide_slide">
                    <vue-slider ref="slider" v-model="value_2" :adsorb="true" :interval="10" :marks="true"
                      @change="getData" :min="min" :max="max"></vue-slider>


                  </div>
                  <!-- {{ value_2[0] }} -->

                  <div class="form-group">
                    <button type="button" class="main--btn" @click="getData">{{ $t('courses.show_course') }}</button>
                  </div>

                </form>

              </div>

            </div>

          </div>

          <div class="col-lg-8 col-12">

            <div class="head_arrange">

              <div class="filter_methods">
                <div class="select_old_new">
                  <multiselect v-model="order" :options="options" :searchable="false" :close-on-select="true"
                    :show-labels="false" placeholder="order" @select="getData()"></multiselect>

                  <!-- {{ order }} -->
                </div>

                <div class="form-group has-search">
                  <div class="icon_sea" @click="getData()">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  </div>
                  <!-- @keyup="getData()" -->
                  <input type="text" class="form-control" :placeholder="$t('courses.search')" v-model="searchText">
                </div>

              </div>
              <div class="icons">
                <font-awesome-icon @click="addClassRow" id="my-div-row" :icon="['fas', 'list-ul']" />
                <font-awesome-icon @click="addClassToDiv" class="activeColor" id="my-div"
                  :icon="['fas', 'table-cells']" />
              </div>

            </div>

            <div class="row mt-4 all_cards">
              <div class="col-md-6 col-12" v-for="(item, index) in items" :key="'p' + index">
                <div class="card_course">
                  <div class="image_course">
                    <img :data-src="item.logo" title="course" v-lazy-load alt="partner image" width="100%"
                      height="100%" />
                  </div>

                  <div class="card_content">
                    <h3>{{ item.title }}</h3>

                    <div class="appoint">
                      <div class="time">
                        <font-awesome-icon :icon="['fas', 'clock']" />
                        <div class="info">
                          <span>{{ item.duration_houres }}</span>
                          <span>{{ $t('courses.hour') }}</span>
                        </div>
                      </div>
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>{{ item.duration_days }}</span>
                      </div>
                    </div>

                    <div class="trainer_desc" v-for="(teacher, index) in item.teachers" :key="'p' + index">

                      <div class="image">
                        <img :data-src="teacher.image" title="partner" v-lazy-load alt="partner image" width="100%"
                          height="100%" />
                      </div>

                      <div class="trainer_name">
                        <h4>{{ teacher.name }}</h4>
                        <span>{{ teacher.education }}</span>
                      </div>

                    </div>

                    <div class="course_link">
                      <nuxt-link :to="localePath({ path: `/singleCourse/${item.id}` })">

                        <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                          <span>{{ $t('pages.course_detail') }}</span>
                          <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                        </a>
                      </nuxt-link>
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
      </div>
    </div>

  </section>
</template>

<script>

// import VueSlider from 'vue-slider-component';
// import 'vue-slider-component/theme/default.css';

export default {

  name: "termsPage",

  layout: 'second-layout',


  // components: {
  //   VueSlider,
  // },


  // define all properties

  data() {
    return {

      min: 0,
      max: 100,

      status: '',

      value_2: [0, 70],

      // select order

      options: ['desc', 'asc'],
      order: '',


      // loading

      loading: false,

      // data from api

      items: [],

      categories: [],

      selectedOptions: [],

      category: '',
      from_price: '',
      to_price: this.value_2,
      order: '',
      searchText: ''

    }
  },


  created() {

  },


  computed: {
  },

  //  when component load

  mounted() {


    // call methods

    this.getData();

    this.getCategories();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {


    // get courses category data from api

    async getCategories() {
      try {
        return await this.$axios.get(`setting/categories`).then(response => {

          this.loading = true;

          console.log(response.data.data.category_course)

          this.categories = response.data.data.category_course;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },


    // get filter courses data from api

    async getData() {

      console.log(this.selectedOptions);
      console.log(this.$refs.slider.getValue());


      try {

        return await this.$axios.get('courses?type=0', {
          params: {
            category: [... this.selectedOptions],
            order: this.order,
            title: this.searchText,
            from_price: this.value_2[0],
            to_price: this.value_2[1]

          }
        }).then(response => {

          this.loading = true;

          console.log(response.data.data)

          this.items = response.data.data;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // methods to change box layout

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
  margin-top: 50px;
  width: 100%
}

.slide_slide {
  margin-top: 40px;
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
