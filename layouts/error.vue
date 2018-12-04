<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">[{{ error.statusCode }}] {{ error.message }}</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: function() {
        return { statusCode: 0, message: '' }
      },
    },
  },
  layout: 'blog',
}
</script>

<style scoped>
</style>
