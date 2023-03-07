<template>
  <section class="terms single_article">

    <div class="crumb">
      <h3>{{ $t('navbar.articles') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="articles" target="_blank" rel="noopener"><nuxt-link :to="localePath('/articles')">{{
          $t('navbar.articles') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">{{ $t('pages.article_title')
        }}</a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12">
            <div class="content">

              <div class="image_course" data-aos="fade-up">
                <img :data-src="image" title="course" v-lazy-load alt="learn image" width="100%" height="100%" />
              </div>

              <div class="date" data-aos="fade-up">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                <span>{{ created_at }}</span>
              </div>

              <h2 data-aos="fade-up">{{ title }}</h2>
              <p data-aos="fade-up" v-html="content"></p>


            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>


export default {

  name: "termsPage",

  layout: 'second-layout',


  // define all properties

  data() {
    return {
      title: '',
      content: '',
      short_description: '',
      image: '',
      created_at: ''

    }
  },


  created() {

  },


  computed: {
  },

  //  when component load

  mounted() {

    this.getData();

    console.log(this.$route.params.id)

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

  },


  // All methods and logic

  methods: {

    async getData() {
      try {
        return await this.$axios.get(`articale/${this.$route.params.id}`).then(response => {

          this.title = response.data.data.title;
          this.content = response.data.data.content;
          this.short_description = response.data.data.short_description;
          this.image = response.data.data.image;
          this.created_at = response.data.data.created_at

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
