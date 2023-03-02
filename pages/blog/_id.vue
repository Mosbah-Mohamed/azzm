

<template>
  <div>
    <h1>hello from id param page {{ $route.params.id }} in blog folder</h1>
    <nuxt-child />
  </div>
</template>

<script>
export default {

  validate(context) {
    return context
  }

}
</script>

<style lang="scss" scoped>

</style>
