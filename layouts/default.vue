<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <Navbar />
    <div class="w-full h-full mt-12">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style></style>
