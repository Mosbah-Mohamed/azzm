<template>
  <section class="courses_before_subcribe">

    <div class="crumb">
      <h3>الدورات قبل الإشتراك</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الدورات قبل الإشتراك</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">دليل الدورة</a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-8 col-12">

            <div class="course_info">
              <h3>فضلاً يوضع عنوان الدورة هنا بشكل واضح ومفصل</h3>
              <p>ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
                للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
                طبيعياَ </p>
            </div>

            <b-tabs>
              <b-tab title="دليل الدورة" active>

                <div class="course_guide">

                  <div class="about_course">
                    <h4 class="main_head">حول الدبلوم</h4>
                    <p>ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل
                      الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
                      تعطي توزيعاَ طبيعياَ -إ</p>
                  </div>

                  <div class="about_course">
                    <h4 class="main_head">الأهداف العامة من الدبلوم</h4>

                    <ul>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                    </ul>

                  </div>

                  <div class="about_course">
                    <h4 class="main_head">شروط القبول والتسجيل</h4>

                    <ul>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                      <li>
                        <span><font-awesome-icon :icon="['far', 'circle-check']" /></span>
                        <span>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى</span>
                      </li>
                    </ul>

                  </div>


                  <div class="about_course container table-responsive py-5">
                    <h4 class="main_head">حول الدبلوم</h4>
                    <table class="table table-bordered table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col">اسم الدبلومة</th>
                          <th scope="col">الساعات</th>
                          <th scope="col">مدة الدراسة</th>
                          <th scope="col">نمط الدراسة</th>
                          <th scope="col">مقر الدراسة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>علوم الحاسب</th>
                          <td>80 ساعه</td>
                          <td>سنتان ونصف</td>
                          <td>دوام كامل / مسائي</td>
                          <td>الرياض</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </b-tab>
              <b-tab title="محتويات الدورة">
                <p>I'm the second tab</p>
              </b-tab>
              <b-tab title="عن المدرب">
                <p>I'm the first tab</p>
              </b-tab>
              <b-tab title="تقييم الدورة">
                <p>I'm the second tab</p>
              </b-tab>

            </b-tabs>

          </div>
          <div class="col-lg-4 col-12">
            <div class="side_info">
              <div class="image_video">
                <img data-src="@/assets/images/learn.png" title="learn" v-lazy-load alt="partner image" width="100%"
                  height="100%" />

                <div class="video">
                  <div class="icon">
                    <font-awesome-icon :icon="['fas', 'play']" />
                  </div>
                </div>

              </div>

              <div class="price">
                <span class="num">250</span>
                <span class="ryal">ريال</span>
              </div>

              <button class="main--btn" aria-label="subscribe" title="subscribe">اشترك في الدورة</button>

              <ul>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    <span>تبدأ الدورة في</span>
                  </div>
                  <span class="result">2022 / 2 / 3</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>عدد ايام الدورة</span>
                  </div>
                  <div class="results">
                    <span class="result">10</span>
                    <span class="result">ايام</span>
                  </div>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    <span>عدد ساعات الدورة</span>
                  </div>
                  <div class="results">
                    <span class="result">20</span>
                    <span class="result">ساعه</span>
                  </div>

                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                    <span>اسم المدرب</span>
                  </div>
                  <span class="result">محمد احمد</span>
                </li>
                <li>
                  <div class="detail">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    <span>مكان الدورة</span>
                  </div>
                  <a href="#" aria-label="Twitter" target="_blank" rel="noopener" class="result">لينك جوجل ماب</a>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>


export default {

  name: "course_before_subscribe",

  layout: 'second-layout',


  // define all properties

  data() {
    return {


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


  }
}
</script>

<style lang="scss" scoped></style>
