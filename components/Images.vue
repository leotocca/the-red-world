<template functional>
  <div class="w-5/6 flex justify-around flex-wrap mt-10">
    <div
      v-for="(image, index) in props.images"
      :key="'image-' + index"
      class="w-full lg:w-1/4 mx-3 my-10 flex flex-col items-center justify-center"
    >
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
</template>

<script>
export default {
  name: 'Images',
}
</script>
