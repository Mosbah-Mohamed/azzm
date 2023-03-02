<template>
  <div class="my-courses">

    <div class="boxes">
      <div class="box">

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
      </div>
      <div class="box box_current">

        <div class="head current">
          <h5>الدورات الحالية</h5>
        </div>

        <div class="all_course_detail">
          <div class="course_detail">
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
          </div>
          <div class="course_detail">
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
          </div>
        </div>


      </div>

      <div class="box">

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
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "profile_courses",

  layout: "second-layout",

  data() {
    return {
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
