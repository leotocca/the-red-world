<template functional>
  <div v-if="props.images" class="w-5/6 mt-10">
    <XyzTransitionGroup
      appear
      class="w-full flex justify-around flex-wrap"
      xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0"
    >
      <div
        v-for="(image, index) in props.images"
        :key="'image-' + index"
        class="w-full lg:w-1/4 mx-3 my-10"
      >
        <div class="w-full flex flex-col items-center justify-center">
          <img
            :src="image.img_src"
            :alt="`${image.rover.name} - ${image.camera.full_name}`"
            class="object-cover"
          />
          <div
            class="w-11/12 sm:w-2/3 md:w-1/2 lg:w-5/6 bg-brandwhite px-5 py-4 mx-auto -mt-12 border border-gray-100 shadow rounded-lg select-none"
          >
            <p class="text-brandblack text-sm">
              {{ image.camera.full_name }}
            </p>
            <p class="text-brandblack text-2xl font-semibold mt-1">
              {{ image.rover.name }}
            </p>
            <p class="text-brandblack text-sm mt-2">
              Mission status: {{ image.rover.status }}
            </p>
            <p class="text-brandblack text-sm">Date: {{ image.earth_date }}</p>
          </div>
        </div>
      </div>
    </XyzTransitionGroup>
  </div>
</template>

<script>
export default {
  name: 'Images',
}
</script>
