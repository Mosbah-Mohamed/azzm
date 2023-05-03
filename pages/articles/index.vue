<template>
  <section class="courses_component articles articles_page">

    <div class="crumb">
      <h3>{{ $t('navbar.articles') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="articles" target="_blank" rel="noopener"><nuxt-link :to="localePath('/articles')">{{
          $t('navbar.articles') }}</nuxt-link></a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">
        <div class="row justify-content-center">

          <div class="col-lg-3 col-md-6 col-12" v-for="(item, index) in items" :key="index">
            <div class="card_course" data-aos="fade-up">
              <div class="image_course">
                <img :data-src="item.image" title="article" v-lazy-load alt="article image" width="100%" height="100%" />
              </div>

              <div class="card_content">
                <h3 class="text-ellipsis-1">{{ item.title }}</h3>

                <div class="appoint">
                  <div class="calender">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    <span>{{ item.created_at }}</span>
                  </div>
                </div>

                <div class="course_link">

                  <nuxt-link :to="localePath({ path: `/articles/${item.id}` })">

                    <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                      <span>{{ $t('pages.course_detail') }}</span>
                      <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>

                    </a></nuxt-link>


                </div>

              </div>

            </div>
          </div>

        </div>

        <!-- <div class="row">
          <div class="paginate">
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fas', 'angles-right']" />
                </a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">
                  3
                </a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">
                  2
                </a></li>
              <li><a class="active" href="#" target="_blank" rel="noopener noreferrer">
                  1
                </a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fas', 'angles-left']" />
                </a></li>
            </ul>
          </div>
        </div> -->

      </div>
    </div>

  </section>
</template>

<script>


export default {

  name: "termsPage",

  layout: 'second-layout',

  head() {
    return {
      title: "Articles",
    }
  },


  // define all properties

  data() {
    return {

      items: []

    }
  },

  async asyncData({ $axios }) {

    try {

      return $axios.get('setting/articles').then(response => {
        return {
          items: response.data.data
        }
      }).catch(error => {
        console.error(error)
      })

    } catch (error) {

      console.log("catch :" + error)

    }

  },

  created() {

  },


  computed: {
  },

  //  when component load

  mounted() {

    // this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    // async getData() {
    //   try {
    //     return await this.$axios.get(`setting/articles`).then(response => {
    //       this.items = response.data.data;
    //       console.log(response.data.data)
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
