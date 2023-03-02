<template>
  <div class="my-courses course_rate">

    <div class="boxes_rate">

      <div class="box">
        <div class="head">
          <div class="name">
            <span class="dot"></span>
            <span>اسم الدورة التي قمت بتقييمها</span>
          </div>

          <div class="rate">
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

          <div class="edit_rate" v-b-modal.modal-1>
            <span><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
            <span>تعديل التقييم</span>
          </div>

          <b-modal id="modal-1" size="lg" ok-only v-model="show">

            <div class="blur"></div>

            <form action="">
              <div class="form-group">
                <textarea></textarea>
              </div>

              <!-- <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= rating }">
                <font-awesome-icon :icon="['far', 'star']" />
              </span> -->

              <div class="rate">
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
              </div>
            </form>

            <template #modal-footer>
              <b-button class="main--btn" @click="show = false">
                حفظ التقييم
              </b-button>
            </template>
          </b-modal>

        </div>
        <div class="box_body">
          <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
            التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
            الحضور الي مقرنا او الحضور عن</p>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <div class="name">
            <span class="dot"></span>
            <span>اسم الدورة التي قمت بتقييمها</span>
          </div>

          <div class="rate">
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

          <div class="edit_rate">
            <span><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
            <span>تعديل التقييم</span>
          </div>
        </div>
        <div class="box_body">
          <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
            التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
            الحضور الي مقرنا او الحضور عن</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {


  name: "profile_courses-rate",

  layout: "second-layout",


  data() {
    return {
      starClicked: false,
      show: false,
      rating: 1
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

<style lang="scss" scoped>
svg.yellow {
  color: #F7C553 !important;
}

.star.filled {
  color: gold;
}
</style>
