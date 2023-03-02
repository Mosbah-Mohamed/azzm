<template>
  <client-only>
    <main>
      <LazyLayoutNavbar />
      <Nuxt />
      <!-- <nuxt :nuxt-child-key="$route.fullPath" /> -->
      <LazyLayoutFooter />
    </main>
  </client-only>
</template>

<script>
export default {
  name: "defaultPage"
}
</script>

<style lang="scss" scoped></style>
