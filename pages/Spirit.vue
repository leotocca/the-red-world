<template>
  <section class="w-full h-full flex flex-col items-center justify-center">
    <h1
      class="w-full lg:w-1/2 text-center text-brandblack text-3xl font-semibold mt-16"
    >
      Spirit rover
    </h1>

    <Images :images="images" />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import Images from '~/components/Images'

export default {
  components: {
    Images,
  },
  computed: {
    images() {
      return this.$store.state.spirit
    },
  },
  created() {
    this.$store.dispatch('getImages', { rover: 'spirit' })
  },
  methods: {
    ...mapActions(['getImages']),
  },
}
</script>

<style></style>
