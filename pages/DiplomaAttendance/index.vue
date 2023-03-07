<template>
  <section class="courses_content_before_subscribe diploma_attend">

    <div class="crumb">
      <h3> حضور الدبلوم</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer"> حضور الدبلوم</a></li>
      </ul>
    </div>

    <div class="all_info">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-4 col-12">
            <div class="course_content">

              <div class="box_head qr_code" data-aos="fade-up">

                <div class="all_span">
                  <span>فضلاً قُم بمسح</span>
                  <span class="qr">QR CODE</span>
                  <span>لتتمكن من حضور الدبلوم</span>
                </div>

                <img data-src="@/assets/images/icon-partner-1.png" title="qr" v-lazy-load alt="qr image" width="100%"
                  height="100%" />
              </div>

              <div class="box_content" data-aos="fade-up">
                <h3>محتوى الدبلوم</h3>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <!-- @click="showIcon = !showIcon" -->
                    <b-card-header role="tab">
                      <b-button block v-b-toggle.accordion-1 variant="info">
                        <span> التيرم الاول</span>
                        <span>
                          <font-awesome-icon :icon="icon" />
                        </span>
                      </b-button>
                    </b-card-header>

                    <!-- visible -->
                    <b-collapse id="accordion-1" class="accordion_content" accordion="my-accordion" role="tabpanel">
                      <b-card-header>
                        <b-button block v-b-toggle.collapse-1-inner class="inner-btn">
                          <span>اسم المادة</span>
                          <span>
                            <font-awesome-icon :icon="icon" />
                          </span>
                        </b-button>
                        <b-collapse id="collapse-1-inner" class="mt-2 inner">
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
                      </b-card-header>

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

              <div class="box_content_team" data-aos="fade-up">
                <h3>فريق التدريب</h3>

                <div class="all_trainers">

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

                </div>
              </div>

              <div class="rate_box" data-aos="fade-up">

                <div class="all_information">
                  <div class="percentage">
                    <span class="num">80%</span>
                    <span>اجمالي التقييم</span>
                  </div>

                  <div class="about_rate">
                    <div class="rate">
                      <div class="stars">
                        <div class="full">
                          <font-awesome-icon :icon="['fas', 'star']" />
                        </div>
                        <div class="full">
                          <font-awesome-icon :icon="['fas', 'star']" />
                        </div>
                        <div class="full">
                          <font-awesome-icon :icon="['fas', 'star']" />
                        </div>
                        <div class="full">
                          <font-awesome-icon :icon="['fas', 'star']" />
                        </div>
                        <div class="empty">
                          <font-awesome-icon :icon="['far', 'star']" />
                        </div>
                      </div>
                      <span>يهُمنا تقييمك عن الدورة</span>

                    </div>

                    <div class="add_rate" v-b-modal.modal-1>
                      <font-awesome-icon :icon="['fas', 'plus']" />
                      <p>
                        اضافة تقييم
                      </p>
                    </div>

                    <b-modal id="modal-1" class="rating_modal" size="lg" ok-only v-model="show">

                      <div class="blur"></div>

                      <form action="">
                        <h6 class="main_head">ضع تقييمك عن الدبلوم</h6>

                        <div class="form-row">
                          <p>ما مدى رضاك عن الدبلوم من حيث المحتوي وطريقة سرد المواضيع ومدي تحقيقها للهدف المنشود</p>
                          <div class="all_inputs">
                            <div class="form-group ratte">
                              <input type="radio" name="q" id="q1">
                              <label for="q1">مقبول</label>
                            </div>
                            <div class="form-group ratte">
                              <input type="radio" name="q" id="q2">
                              <label for="q2">مقبول</label>
                            </div>
                            <div class="form-group ratte">
                              <input type="radio" name="q" id="q3">
                              <label for="q3">مقبول</label>
                            </div>
                            <div class="form-group ratte">
                              <input type="radio" name="q" id="q4">
                              <label for="q4">مقبول</label>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <textarea></textarea>
                        </div>


                        <!-- <div class="rate">
                          <div class="full">
                            <font-awesome-icon :icon="['far', 'star']" :class="{ yellow: starClicked }"
                              @click="starClicked = !starClicked" />
                          </div>
                          <div class="full">
                            <font-awesome-icon :icon="['far', 'star']" :class="{ yellow: starClicked }"
                              @click="starClicked = !starClicked" />
                          </div>
                          <div class="full">
                            <font-awesome-icon :icon="['far', 'star']" :class="{ yellow: starClicked }"
                              @click="starClicked = !starClicked" />
                          </div>
                          <div class="empty">
                            <font-awesome-icon :icon="['far', 'star']" :class="{ yellow: starClicked }"
                              @click="starClicked = !starClicked" />
                          </div>
                          <div class="empty">
                            <font-awesome-icon :icon="['far', 'star']" :class="{ yellow: starClicked }"
                              @click="starClicked = !starClicked" />
                          </div>
                        </div> -->
                      </form>

                      <template #modal-footer>
                        <b-button class="main--btn" @click="show = false">
                          ارسال
                        </b-button>
                      </template>
                    </b-modal>

                  </div>

                </div>

                <p>سوف يفعل هذا الخيار عند الانتهاء من الدورة بشكل كامل</p>

              </div>

              <button data-aos="fade-up" class="main--btn d-block w-100">اختبار كامل عن الدورة</button>

              <p data-aos="fade-up" class="hint">سوف يفعل هذا الخيار عند الانتهاء من الدورة بشكل كامل</p>

            </div>
          </div>
          <div class="col-lg-8 col-12">

            <div class="image_video" data-aos="fade-right">
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

            <div class="attachment" data-aos="fade-up">
              <h4 class="main_head">ملحقات الدرس</h4>
              <div class="content">
                <p>يمكنك تحميل كافة الملحقات الخاصة بهذا الدرس من خلال الضغط علي زر تحميل</p>
                <a href="#" target="_self" rel="noopener noreferrer" download>
                  <font-awesome-icon :icon="['fas', 'file']" />
                  <span>حمل ملحقات الدرس</span>
                </a>
              </div>
            </div>

            <div class="bar_prog" data-aos="fade-up">
              <h5 class="main_head">مستوى التقدم</h5>
              <b-progress value="40" max="100" show-progress animated></b-progress>
            </div>

            <div class="comments" data-aos="fade-up">
              <h6 class="main_head">التعليقات</h6>

              <div class="comment_box">
                <textarea v-model="bb" :readonly="!editable"></textarea>

                <div class="actions">

                  <div class="action_right">
                    <span class="update" @click="toggleEditable">تعديل</span>
                    <span class="clear">حذف</span>
                  </div>

                  <div class="add_comment" v-b-modal.modal-10>
                    <font-awesome-icon :icon="['fas', 'plus']" />
                    <p>
                      اضافة تعليق
                    </p>
                  </div>

                  <b-modal id="modal-10" size="lg" ok-only v-model="show2">

                    <div class="blur"></div>

                    <form action="">
                      <div class="form-group">
                        <textarea></textarea>
                      </div>
                    </form>

                    <template #modal-footer>
                      <b-button class="main--btn" @click="show2 = false">
                        ارسال
                      </b-button>
                    </template>
                  </b-modal>

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


export default {

  name: "course_content_before_subscribe",

  layout: 'second-layout',


  // define all properties

  data() {
    return {
      showIcon: false,

      show: false,
      show2: false,

      bb: "fff",
      editable: false,

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

    toggleEditable() {
      this.editable = !this.editable;
    },

  }
}
</script>

<style lang="scss" scoped>
.form {
  .main_head::after {
    z-index: unset;
    bottom: 0
  }
}

.form-row {
  display: flex;
  flex-direction: column;
  border-bottom: #013FCD;
  padding-bottom: 25px;
  margin-bottom: 25px;

  .all_inputs {
    display: flex;
    gap: 40px;
    margin-top: 16px;

    .ratte {
      display: flex;
      gap: 10px;

      label {
        color: #013FCD;
      }

      input[type=radio] {
        width: 18px;
        height: 18px;
      }
    }

  }
}

@media(max-width:575px) {
  .form-row .all_inputs {
    gap: 10px;
    flex-direction: column;
  }
}
</style>
