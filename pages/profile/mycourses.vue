<template>
  <div class="my-courses">

    <div class="boxes">
      <div class="box">

        <div class="head">
          <h5>{{ $t('profile.course_complete') }}</h5>
        </div>

        <ul>
          <li v-for="(diploma, index) in current" :key="index">
            <span class="dot"></span>
            <span>{{ diploma.diploma }}</span>
          </li>
        </ul>
      </div>
      <div class="box box_current">

        <div class="head current">
          <h5>{{ $t('profile.current_courses') }}</h5>
        </div>

        <div class="all_course_detail">
          <div class="course_detail" v-for="(single, index) in finished" :key="'b' + index">
            <div class="image">
              <img :data-src="diploma_logo" title="partner" v-lazy-load alt="partner image" width="100%" height="100%" />
            </div>

            <div class="info">
              <h6>{{ single.diploma_title }}</h6>
              <div class="gress">
                <!-- show-progress -->
                <b-progress :value="single.progress" max="100" animated variant="warning"></b-progress>
                <span>50</span>
              </div>

              <div class="course_link">
                <nuxt-link :to="localePath({ path: `/DiplomaAttendance/${single.id}` })">
                  <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                    <span>الدخول للدورة</span>
                    <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                  </a></nuxt-link>
              </div>

            </div>
          </div>
          <!-- <div class="course_detail">
            <div class="image">
              <img data-src="@/assets/images/learn.png" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />
            </div>

            <div class="info">
              <h6>عنوان الدورة يوضع هنا</h6>
              <div class="gress">
                <b-progress value="50" max="100" show-progress animated variant="warning"></b-progress>
                <span>50</span>
              </div>

              <div class="course_link">
                <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                  <span>الدخول للدورة</span>
                  <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                </a>
              </div>

            </div>
          </div> -->
        </div>


      </div>

      <!-- <div class="box">

        <div class="head">
          <h5>الدورات المنتهية</h5>
        </div>

        <ul>
          <li>
            <span class="dot"></span>
            <span>اسم الدورة المنتهية</span>
          </li>
          <li>
            <span class="dot"></span>
            <span>اسم الدورة المنتهية</span>
          </li>
        </ul>
      </div> -->


    </div>

  </div>
</template>

<script>
export default {
  name: "profile_courses",

  layout: "second-layout",

  data() {
    return {

      // data from api

      current: [],
      finished: [],
    }
  },

  mounted() {

    this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {

    async getData() {
      try {
        return await this.$axios.get(`subscriptions`).then(response => {

          this.current = response.data.data.current;
          this.finished = response.data.data.finished;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

  },
}
</script>

<style lang="scss" scoped></style>
