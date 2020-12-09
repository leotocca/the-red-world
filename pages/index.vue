<template>
  <Home />
</template>

<script>
import { mapActions } from 'vuex'
import Home from '~/components/Home'

export default {
  components: {
    Home,
  },
  computed: {
    photos() {
      return this.$store.state.curiosity
    },
  },
  created() {
    this.$store.dispatch('getImages', { rover: 'curiosity' })
  },
  methods: {
    ...mapActions(['getImages']),
  },
}
</script>
