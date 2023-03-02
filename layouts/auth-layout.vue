<template>
  <client-only>
    <main class="auth_layout">
      <LazyLayoutNavbar />
      <Nuxt />
      <!-- <nuxt :nuxt-child-key="$route.fullPath" /> -->
      <LazyLayoutFooter />
    </main>
  </client-only>
</template>

<script>
export default {
  name: "auth-layout",
}
</script>

<style lang="scss">
.auth_layout {
  // @include backgroundImage;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/images/auth_bacck.png);

  .auth_lay {
    display: none !important;
  }
}
</style>
