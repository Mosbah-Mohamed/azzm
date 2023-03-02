<template>
  <div class="profile_guide_component">

    <h5>يمكنك الإطلاع علي كافة البنود داخل الدليل بعد تحميله</h5>

    <button class="main--btn" aria-label="download" title="download">
      <span> <font-awesome-icon :icon="['fas', 'download']" /> </span>
      <span>تحميل الدليل</span>
    </button>

  </div>
</template>

<script>
export default {
  name: "profile_guide",

  layout: "second-layout",

  data() {
    return {
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

<style lang="scss" scoped></style>
