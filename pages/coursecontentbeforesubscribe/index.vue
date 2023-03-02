<template>
  <section class="courses_content_before_subscribe">

    <div class="crumb">
      <h3>عنوان الدورة</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">قسم الدورات</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">عنوان الدورة</a></li>
      </ul>
    </div>

    <div class="all_info">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-4 col-12">
            <div class="course_content">

              <div class="box_head">
                <p>فضلاً قُم بالدخول للإختبار القبلي لتحديد مستواك والبدء للدروة وفقاً للنسبة التي حصلت عليها</p>
                <button class="main--btn">اختبر الأن لتحديد المستوى</button>
              </div>

              <div class="box_content">
                <h3>محتوى الدورة</h3>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <!-- @click="showIcon = !showIcon" -->
                    <b-card-header role="tab">
                      <b-button block v-b-toggle.accordion-1 variant="info">
                        <span>المستوى الأول</span>
                        <span>
                          <font-awesome-icon :icon="icon" />
                        </span>
                      </b-button>
                    </b-card-header>

                    <!-- visible -->
                    <b-collapse id="accordion-1" class="accordion_content" accordion="my-accordion" role="tabpanel">
                      <div class="lessons">
                        <div class="lesson">
                          <span><font-awesome-icon :icon="['fas', 'book']" /></span>
                          <span>مقدمة عن اسس التصميم</span>
                        </div>
                        <span class="discover">تصفح</span>
                        <!-- <span class="lock">
                          <font-awesome-icon :icon="['fas', 'lock']" />
                        </span> -->
                      </div>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header role="tab">
                      <b-button block v-b-toggle.accordion-2 variant="info">
                        <span>المستوى الأول</span>
                        <span>
                          <font-awesome-icon :icon="icon" />
                        </span>
                      </b-button>
                    </b-card-header>

                    <!-- visible -->
                    <b-collapse id="accordion-2" class="accordion_content" accordion="my-accordion" role="tabpanel">
                      <div class="lessons">
                        <div class="lesson">
                          <span><font-awesome-icon :icon="['fas', 'book']" /></span>
                          <span>مقدمة عن اسس التصميم</span>
                        </div>
                        <span class="discover">تصفح</span>
                        <!-- <span class="lock">
                          <font-awesome-icon :icon="['fas', 'lock']" />
                        </span> -->
                      </div>
                    </b-collapse>
                  </b-card>
                  <b-card no-body class="mb-1">
                    <b-card-header role="tab">
                      <b-button block v-b-toggle.accordion-3 variant="info">
                        <span>المستوى الأول</span>
                        <span>
                          <font-awesome-icon :icon="icon" />
                        </span>
                      </b-button>
                    </b-card-header>

                    <!-- visible -->
                    <b-collapse id="accordion-3" class="accordion_content" accordion="my-accordion" role="tabpanel">
                      <div class="lessons">
                        <div class="lesson">
                          <span><font-awesome-icon :icon="['fas', 'book']" /></span>
                          <span>مقدمة عن اسس التصميم</span>
                        </div>
                        <span class="discover">تصفح</span>
                        <!-- <span class="lock">
                          <font-awesome-icon :icon="['fas', 'lock']" />
                        </span> -->
                      </div>
                    </b-collapse>
                  </b-card>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-8 col-12">

            <div class="image_video">
              <img data-src="@/assets/images/learn.png" title="learn" v-lazy-load alt="partner image" width="100%"
                height="100%" />

              <div class="video">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'play']" />
                </div>
              </div>

              <div class="overlay">
                <span>الدرس الرابع : الأسس والمعايير العامة للتصميم الداخلي والديكورات</span>
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

  name: "course_content_before_subscribe",

  layout: 'second-layout',


  // define all properties

  data() {
    return {
      showIcon: false

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

    icon() {
      if (this.showIcon) {
        return ['fas', 'chevron-up']
      } else {
        return ['fas', 'chevron-down']
      }
    }

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


  }
}
</script>

<style lang="scss" scoped></style>
