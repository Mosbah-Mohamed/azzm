<template>
  <section class="terms">

    <div class="crumb">
      <h3>الشروط والاحكام</h3>
      <ul>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الرئيسية</a></li>
        <li><font-awesome-icon :icon="['fas', 'caret-left']" /></li>
        <li><a href="#" aria-label="breadcrumb" target="_blank" rel="noopener noreferrer">الشروط والاحكام</a></li>
      </ul>
    </div>

    <div class="all_content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12">
            <div class="content" v-for="(item, index) in items" :key="index">
              <h2 class="main_head">{{ item.title }}</h2>
              <p v-html="item.page"></p>
            </div>

            <!-- <div class="content">
              <h2 class="main_head">يوضع عنوان للشرط او السياسة المتبعة هنا</h2>
              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
                تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>
            </div>
            <div class="content">
              <h2 class="main_head">يوضع عنوان للشرط او السياسة المتبعة هنا</h2>
              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
                تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>
            </div>
            <div class="content">
              <h2 class="main_head">يوضع عنوان للشرط او السياسة المتبعة هنا</h2>
              <p>نقوم بتقديم الدورات عن طريق الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات
                التعليمية والتي من خلالها تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم بتقديم الدورات عن طريق
                الحضور الي مقرنا او الحضور عن بعد نقدم افضل الدورات التدريبة في شتئ المجالات التعليمية والتي من خلالها
                تستطيع ان تصبح مطوراً في العلوم الحاسوبية والتجارية نقوم في العلوم الحاسوبية والتجارية</p>
            </div> -->
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
      items: []
    }
  },

  async asyncData({ $axios }) {

    try {

      return $axios.get('setting/pages').then(response => {
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
