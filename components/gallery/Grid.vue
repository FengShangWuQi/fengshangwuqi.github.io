<template>
  <div
    class="columns-1 gap-4 px-4 pb-8 max-w-1600px mx-auto sm:columns-2 md:columns-3 md:px-6 xl:columns-4 xl:px-8"
    :class="countClass"
  >
    <GalleryItem
      v-for="(image, index) in images"
      :key="image.src"
      :image="image"
      @click="openLightbox(index)"
    />
  </div>
</template>

<script setup lang="ts">
const { images, openLightbox } = useGallery()

const countClass = computed(() => {
  const count = Math.min(images.value.length, 4)
  if (count === 1) return '!columns-1 max-w-600px'
  if (count === 2) return 'max-w-950px sm:!columns-2 md:!columns-2'
  if (count === 3) return 'sm:!columns-2 md:!columns-3'
  return ''
})
</script>
