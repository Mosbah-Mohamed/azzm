<template>
  <client-only>
    <main class="second_layout">
      <LazyLayoutNavbar />

      <Nuxt />
      <LazyLayoutFooter />
    </main>
  </client-only>
</template>

<script>
export default {
  name: "second-layout",
}
</script>

<style lang="scss">

</style>
