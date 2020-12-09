<template>
  <div class="container">
    <div>
      <h1 class="title text-red-500">the-red-world</h1>
      <pre>
        {{ photos }}
      </pre>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    photos() {
      return this.$store.state.curiosity
    },
  },
  created() {
    this.$store.dispatch('getPhotos')
  },
  methods: {
    ...mapActions(['getPhotos']),
  },
}
</script>

<style></style>
