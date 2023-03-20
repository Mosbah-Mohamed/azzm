<template>
  <div class="my-courses course_rate">

    <div class="boxes_rate">

      <div class="box" v-for="(rate, index) in rates" :key="index">
        <div class="head">
          <div class="name">
            <span class="dot"></span>
            <span>{{ rate.diploma }}</span>
          </div>

          <div class="rate">
            <no-ssr>
              <star-rating :rating="rate.diploma_rate" :star-size="20" :read-only="true"
                :show-rating="false"></star-rating>
            </no-ssr>
          </div>

          <div class="edit_rate" v-b-modal="'modal-' + rate.diploma_id">
            <!-- {{ rate.diploma_id }} -->
            <span><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
            <span>{{ $t('courses.Modify_evaluation') }}</span>
          </div>

          <b-modal :id="'modal-' + rate.diploma_id" size="lg" ok-only v-model="modalVisible['modal-' + rate.diploma_id]">

            <div class="blur"></div>

            <form action="">

              <div class="form-group">
                <textarea v-model="rate.note"></textarea>
              </div>

              <div class="rate">
                <no-ssr>
                  <star-rating :rating="rate.diploma_rate" :star-size="20" :show-rating="true"
                    @rating-selected="setRating"></star-rating>
                  <!-- {{ rating }} -->
                </no-ssr>
              </div>

            </form>

            <template #modal-footer>
              <b-button class="main--btn" @click="updateRates(rate.diploma_id, rate.note)">
                {{ $t('courses.Save_evaluation') }}
              </b-button>
            </template>
          </b-modal>

        </div>
        <div class="box_body">
          <p>{{ rate.note }}</p>
        </div>
      </div>

      <div class="flex-center m-5" v-if="!loading">
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
      </div>


    </div>

  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {

  components: {
    StarRating
  },
  name: "profile_courses-rate",

  layout: "second-layout",

  middleware: 'auth-user',


  data() {
    return {

      loading: false,

      // rate data

      rates: [],
      rating: 0,

      // show and hide modal

      modalVisible: {}
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

    // get stars number

    setRating(rating) {
      this.rating = rating;
    },

    // get rates

    async getData() {
      try {
        return await this.$axios.get(`user/rates`).then(response => {

          this.loading = true;

          this.rates = response.data.data;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },


    // update rates

    async updateRates(rate_id, rate_note) {
      try {
        return await this.$axios.post(`rate/update`, { diploma_id: `${rate_id}`, diploma_rate: `${this.rating}`, note: `${rate_note}` }).then(response => {


          this.modalVisible[`modal-${rate_id}`] = false;

          this.getData();

          // this.rates = response.data.data;

          this.$swal.fire({
            position: 'center',
            type: 'success',
            text: `${response.data.msg}`,
            showConfirmButton: false,
            timer: 2000
          })

        }).catch(error => {
          console.log(error)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data.message}`,
            timer: 2000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

  },
}
</script>

<style lang="scss" scoped>
svg.yellow {
  color: #F7C553 !important;
}

.star.filled {
  color: gold;
}
</style>
