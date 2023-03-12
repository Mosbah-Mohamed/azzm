<template>
  <div class="profile_guide_component">

    <h5>{{ $t('profile.down_desc') }}</h5>

    <a :href="student_guide" target="_self" rel="noopener noreferrer" download>
      <button class="main--btn" aria-label="download" title="download">
        <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
        <span>{{ $t('profile.download_guide') }}</span>
      </button>
    </a>

  </div>
</template>

<script>
export default {
  name: "profile_guide",

  layout: "second-layout",

  data() {
    return {
      student_guide: ''
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
        return await this.$axios.get(`certificates`).then(response => {

          this.student_guide = response.data.data.student_guide;

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

<style lang="scss" scoped></style>
