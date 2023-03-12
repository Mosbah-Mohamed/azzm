
<template>
  <div class="my-courses course_certificate">

    <div class="boxes_cert">

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="box">
            <div class="image">
              <img data-src="@/assets/images/certificate.png" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />
            </div>
            <h3>شهادة الدوره الاولي</h3>

            <p v-b-modal.modal-2>عرض الشهادة</p>

            <button class="main--btn" aria-label="download" title="download">
              <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
              <span>تحميل الدليل</span>
            </button>

            <b-modal id="modal-2" size="lg">


              <img data-src="@/assets/images/certificate.png" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />

              <template #modal-footer>
                <button class="main--btn" aria-label="download" title="download">
                  <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
                  <span>تحميل الدليل</span>
                </button>
              </template>
            </b-modal>


          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="box">
            <div class="image">
              <img data-src="@/assets/images/certificate.png" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />

            </div>
            <h3>شهادة الدوره الاولي</h3>
            <p>عرض الشهادة</p>
            <button class="main--btn" aria-label="download" title="download">
              <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
              <span>تحميل الدليل</span>
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="box">
            <div class="image">
              <img data-src="@/assets/images/certificate.png" title="partner" v-lazy-load alt="partner image" width="100%"
                height="100%" />

            </div>
            <h3>شهادة الدوره الاولي</h3>
            <p>عرض الشهادة</p>
            <button class="main--btn" aria-label="download" title="download">
              <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
              <span>تحميل الدليل</span>
            </button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {


  name: "profile_courses-certificate",

  layout: "second-layout",


  data() {
    return {
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
        return await this.$axios.get(`profile`).then(response => {

          this.name = response.data.data.name;
          this.avatar = response.data.data.avatar;

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

<style lang="scss" scoped>
svg.yellow {
  color: #F7C553 !important;
}

.star.filled {
  color: gold;
}
</style>
