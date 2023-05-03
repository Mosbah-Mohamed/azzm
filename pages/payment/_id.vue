<template>
  <section class="payment">

    <div class="crumb">
      <h3>{{ $t('navbar.payment') }}</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener"><nuxt-link :to="localePath('/')">{{
          $t('navbar.home') }}</nuxt-link></a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="payment" target="_blank" rel="noopener">{{
          $t('navbar.payment') }}</a></li>
      </ul>
    </div>

    <div class="all_pay">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-lg-7 col-12">

            <div class="pay_method">

              <label>
                <input type="radio" name="option" value="option1" v-model="selectedOption">

                <div class="input_content">
                  <span>paypal</span>
                  <div class="paypal">
                    <img src="@/assets/images/paypal.png" alt="paypal" title="paypal">
                  </div>
                </div>

              </label>

              <transition name="fade">

                <div class="options" v-show="showOption1">

                  <form action="">

                    <div class="form-group">
                      <input type="text" placeholder="الاسم">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="رقم الكارد">
                    </div>

                    <div class="row">

                      <div class="col-lg-3 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="سنة">
                        </div>
                      </div>
                      <div class="col-lg-3 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="شهر">
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="رمز التحقق">
                        </div>
                      </div>

                    </div>

                    <div class="form-group">
                      <button type="button" class="main--btn" @click="pay">ادفع الأن</button>
                    </div>

                  </form>

                </div>

              </transition>


              <label>
                <input type="radio" name="option" value="option2" v-model="selectedOption">
                <div class="input_content">
                  <span>visa</span>
                  <div class="visa">
                    <img src="@/assets/images/visa.png" alt="visa" title="visa">
                  </div>
                </div>
              </label>



              <transition name="fade">

                <div class="options" v-show="showOption2">

                  <form action="">

                    <div class="form-group">
                      <input type="text" placeholder="الاسم">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="رقم الكارد">
                    </div>

                    <div class="row">

                      <div class="col-lg-3 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="سنة">
                        </div>
                      </div>
                      <div class="col-lg-3 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="شهر">
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input type="text" placeholder="رمز التحقق">
                        </div>
                      </div>

                    </div>

                    <div class="form-group">
                      <button class="main--btn">ادفع الأن</button>
                    </div>

                  </form>

                </div>

              </transition>


            </div>

          </div>

          <div class="col-lg-5 col-12">
            <div class="pay_info">

              <div class="price_box">

                <span class="num">{{ price }}</span>
                <span>{{ $t('courses.ryal') }}</span>

              </div>

              <div class="course_info">
                <span>{{ title }}</span>

                <div class="course_hours">

                  <div class="hours">
                    <span>{{ duration_houres }}</span>
                    <span>{{ $t('courses.hour') }}</span>
                  </div>
                  <div class="days">
                    <span>{{ duration_days }}</span>
                    <span>{{ $t('courses.day') }}</span>
                  </div>

                </div>

              </div>

            </div>

            <div class="hint">
              <span>يمكنك وضع الكوبون هنا للحصول علي الخصم</span>
              <!-- <badge>50%</badge> -->
            </div>

            <form action="">
              <div class="form-group d-flex gap-5">
                <input type="text" v-model="cobone_code">
                <button class="main--btn" type="button" @click="coupon">{{ $t('contact.send') }}</button>
              </div>
            </form>

          </div>

        </div>


        <!-- modal -->

        <b-modal id="modal-2" size="md" hide-footer ref="modee">

          <div class="success-modal">
            <img data-src="@/assets/images/icon.svg" title="partner" v-lazy-load alt="partner image" width="100%"
              height="100%" />

            <h2>{{ $t('pages.success_pay') }}</h2>

            <p>{{ $t('courses.put_coupon') }}</p>


            <nuxt-link v-if="type == 1" :to="localePath({ path: `/DiplomaAttendance/${diploma_or_course_id}` })">
              الدخول للدبلومه
            </nuxt-link>
            <nuxt-link v-else :to="localePath({ path: `/courseattendance/${diploma_or_course_id}` })">
              الدخول للدورة
            </nuxt-link>

          </div>

        </b-modal>


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

      selectedOption: 'option1',

      // payment

      cobone_code: null,
      marketer_code: null,
      enrollment_id: '',

      // get data from api


      title: '',
      duration_houres: '',
      duration_days: '',
      price: '',


      type: '',
      diploma_or_course_id: ''


    }
  },


  created() {

  },


  computed: {
    showOption1() {
      return this.selectedOption === 'option1'
    },
    showOption2() {
      return this.selectedOption === 'option2'
    }
  },

  //  when component load

  mounted() {

    this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    // store comments

    async pay() {

      try {
        await this.$axios.$post('payment', { enrollment_id: `${this.$route.params.id}`, cobone_code: this.cobone_code, marketer_code: this.marketer_code }).then(response => {


          this.diploma_or_course_id = response.data.diploma_or_course_id;
          this.type = response.data.type;


          // this.$router.push(this.localePath({ path: `/DiplomaAttendance/${response.data.id}` }));

          this.cobone_code = '';

          this.$refs['modee'].show()


          // this.$swal.fire({
          //   position: 'center',
          //   type: 'success',
          //   // title: 'message sent Successfully',
          //   text: `${response.msg}`,
          //   showConfirmButton: false,
          //   timer: 3000
          // })



        }).catch(error => {

          // this.$refs['modee'].show()

          console.log(error.response.msg)


          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

    // coupon

    async coupon() {

      try {
        await this.$axios.$post('coubone', { enrollment_id: `${this.$route.params.id}`, cobone_code: this.cobone_code, marketer_code: this.marketer_code }).then(response => {

          this.cobone_code = '';

          this.price = response.data.price_after_cobone


          this.$swal.fire({
            position: 'center',
            type: 'success',
            // title: 'message sent Successfully',
            text: `${response.msg}`,
            showConfirmButton: false,
            timer: 3000
          })


        }).catch(error => {

          console.log(error.response.msg)


          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.msg}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

    // get data from api

    async getData() {
      try {
        // ${this.$route.params.id}
        return await this.$axios.get(`payment/diploma_course/info/${this.$route.params.id}`).then(response => {

          this.title = response.data.data.title;
          this.duration_houres = response.data.data.duration_houres;
          this.duration_days = response.data.data.duration_days;
          this.price = response.data.data.price;


          console.log(response.data.data)

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
