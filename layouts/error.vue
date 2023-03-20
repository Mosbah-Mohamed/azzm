<template>
  <client-only>

    <div>
      <!-- <h1 v-if="error.statusCode === 404">{{ pageNotFound + error.statusCode }} </h1> -->
      <!-- <h1 v-else>
          {{ otherError }}
        </h1> -->

      <div class="content">

        <!-- <h1>OOPS!</h1> -->
        <p>{{ $t('pages.not_found') }}</p>

        <nuxt-link to="/">
          <button class="main--btn">{{ $t('pages.back_home') }}</button>
        </nuxt-link>

        <div class="image">
          <img data-src="@/assets/images/Frame.svg" title="error" v-lazy-load alt="error image" width="100"
            height="100" />
        </div>

      </div>
    </div>

  </client-only>
</template>

<script>
export default {
  name: 'errorPage',

  layout: 'auth-layout',

  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">
.content {

  text-align: center;

  button {
    margin: auto;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 15px;
    font-weight: bold;
    color: #4065B9
  }

  p {
    font-size: 32px;
    padding-bottom: 20px;
    color: #4065B9;
  }

  .image {
    margin-top: 50px;
    margin-bottom: 100px;
    margin: 50px 30px 100px;
    height: 470px;
    width: auto;

    img {
      width: 100%;
      height: 100%
    }
  }

}

@media(max-width:575px) {
  .content {

    h1 {
      margin-top: 30px;
      font-size: 30px;

    }

    p {
      font-size: 20px;
    }

    .image {
      height: 55vh;
      margin-top: 10px;
      margin-bottom: 20px;

      img {}
    }
  }
}
</style>
