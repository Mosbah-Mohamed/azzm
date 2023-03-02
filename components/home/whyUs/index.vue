<template>
  <section class="why_us">

    <div class="container">

      <h4 class="main_head">لماذا تختارنا</h4>

      <div class="row">
        <div class="col-lg-6 col-12 ">

          <div class="advantages">
            <div class="box">
              <div class="image_advantage">
                <!-- <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
                  height="100%" /> -->
                <font-awesome-icon :icon="['fas', 'user-group']" />
              </div>

              <h5>المجالات التدريبية</h5>
              <p>لعديد من المجالات التدريبية مع محاضرين علي أعلي مستوي</p>
            </div>
            <div class="box">
              <div class="image_advantage green">
                <!-- <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
                  height="100%" /> -->
                <font-awesome-icon :icon="['fas', 'user-group']" />
              </div>

              <h5>المجالات التدريبية</h5>
              <p>لعديد من المجالات التدريبية مع محاضرين علي أعلي مستوي</p>
            </div>
            <div class="box">
              <div class="image_advantage red">
                <!-- <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
                  height="100%" /> -->
                <font-awesome-icon :icon="['fas', 'user-group']" />
              </div>

              <h5>المجالات التدريبية</h5>
              <p>لعديد من المجالات التدريبية مع محاضرين علي أعلي مستوي</p>
            </div>
            <div class="box">
              <div class="image_advantage pink">
                <!-- <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
                  height="100%" /> -->
                <font-awesome-icon :icon="['fas', 'user-group']" />
              </div>

              <h5>المجالات التدريبية</h5>
              <p>لعديد من المجالات التدريبية مع محاضرين علي أعلي مستوي</p>
            </div>
          </div>

        </div>
        <div class="col-lg-6 col-12">

          <div class="image_video">
            <img data-src="@/assets/images/learn.png" title="course" v-lazy-load alt="course image" width="100%"
              height="100%" />

            <div class="video">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'play']" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about-component",

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
