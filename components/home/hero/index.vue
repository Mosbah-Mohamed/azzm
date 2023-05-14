<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">

          <!-- <div>
            <button @click="generatePdf">Generate PDF</button>
          </div> -->

          <!-- <div v-for="checkbox in checkboxes" :key="checkbox.id">
            <label>
              <input type="checkbox" :id="checkbox.id" :value="checkbox.id" v-model="checkbox.value"
                :checked="checkbox.value == checkbox.user_answer" @input="checkboxVal = $event.target.value">
              {{ checkbox.label }}
            </label>
          </div> -->

          <div class="hero_content" id="pdf-content">
            <span class="name">{{ name }}</span>
            <h1 class="main_head">{{ title1 }}</h1>
            <p v-html="description"></p>

            <nuxt-link :to="localePath('/about-us')">
              <button aria-label="join" title="join" class="main--btn">
                {{ $t('buttons.join') }}
              </button>
            </nuxt-link>


          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="all_images">
            <div class="hero_image">
              <img :data-src="image" title="hero" onerror="this.src='@/assets/images/trainer.png'" v-lazy-load alt=""
                width="100%" height="100%" />
            </div>

            <div class="image_back">
              <img src="@/assets/images/flower.png" title="flower" data-not-lazy loading="lazy" alt="hero image"
                width="100%" height="100%" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="image-right">
      <img data-src="@/assets/images/flower.png" title="flower" v-lazy-load alt="hero image" width="100%" height="100%" />
    </div>

    <div class="flex-center m-5" v-if="!loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>

    <div class="staticis">
      <div class="trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-group']" />
        </div>
        <div class="info">
          <span>{{ traineesCount }}</span>
          <span>{{ $t('hero.trainee') }}</span>
        </div>
      </div>
      <div class="trainer trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-tie']" />
        </div>
        <div class="info">
          <span>{{ trainersCount }}</span>
          <span>{{ $t('hero.trainer') }}</span>
        </div>
      </div>
      <div class="course trainee">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'object-group']" />
        </div>
        <div class="info">
          <span>{{ courseCount }}</span>
          <span>{{ $t('hero.course') }}</span>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "hero-component",


  data() {
    return {
      delay: -1,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        enableScrollSpy: true,
        scrollSpyDelay: 200,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },

      loading: false,

      // data from api

      name: '',
      title1: '',
      description: '',
      image: '',
      trainersCount: '',
      traineesCount: '',
      courseCount: '',

      // test

      // checkboxes: [
      //   { id: 1, label: 'Option 1', user_answer: 1, value: 1 },
      //   { id: 2, label: 'Option 2', user_answer: 0, value: 0 },
      //   { id: 3, label: 'Option 3', user_answer: 1, value: 1 }
      // ],

      // checkboxVal: ''

    }
  },

  // get description data in hero section

  async fetch() {
    try {
      return await this.$axios.get(`setting/description`).then(response => {
        this.loading = true;
        this.name = response.data.data.name;
        this.title1 = response.data.data.title;
        this.description = response.data.data.short_description;
        this.image = response.data.data.image;
        this.trainersCount = response.data.data.trainersCount;
        this.traineesCount = response.data.data.traineesCount;
        this.courseCount = response.data.data.courseCount;
        // console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log("catch : " + error)
    }
  },

  mounted() {
  },

  methods: {
    // generatePdf() {
    //   const element = document.getElementById('pdf-content')
    //   const options = {
    //     margin: 1,
    //     filename: 'example.pdf',
    //     image: { type: 'jpeg', quality: 0.98 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //   }

    //   this.$html2pdf().from(element).set(options).save()
    // }

  }
}
</script>

<style lang="scss" scoped></style>
