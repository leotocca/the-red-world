<template>
  <section class="h-full w-full flex flex-col justify-center items-center">
    <h1
      class="w-full lg:w-1/2 text-center text-brandblack uppercase text-4xl font-semibold mt-32"
    >
      Mars rover images
    </h1>
    <p
      class="w-full lg:w-1/2 text-center text-brandblack text-xl font-normal mt-5"
    >
      Checkout the latest images coming in from NASA rovers in Mars.
    </p>
    <p class="w-full lg:w-1/2 text-center text-brandblack text-xl font-normal">
      Pictures from Spirit, Opportunity and Curiosity missions.
    </p>
    <div class="w-5/6 flex justify-around items-center mt-32 mb-36">
      <NuxtLink
        to="/curiosity"
        class="w-1/4 flex justify-center border border-gray-100 shadow rounded-lg bg-gray-100 py-10 hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
      >
        <h2 class="text-gray-800 font-semibold text-xl">
          Images from Curiosity
        </h2>
      </NuxtLink>
      <NuxtLink
        to="/opportunity"
        class="w-1/4 flex justify-center border border-gray-100 shadow rounded-lg bg-gray-100 py-10 hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
      >
        <h2 class="text-gray-800 font-semibold text-xl">
          Images from Opportunity
        </h2>
      </NuxtLink>
      <NuxtLink
        to="/spirit"
        class="w-1/4 flex justify-center border border-gray-100 shadow rounded-lg bg-gray-100 py-10 hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
      >
        <h2 class="text-gray-800 font-semibold text-xl">Images from Spirit</h2>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
