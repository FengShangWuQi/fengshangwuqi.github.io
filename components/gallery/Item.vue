<template>
  <div
    class="group relative break-inside-avoid mb-4 rounded-2 overflow-hidden cursor-pointer bg-surface md:rounded-3"
    @click="$emit('click')"
  >
    <NuxtImg
      :src="image.src"
      :alt="image.title"
      :width="image.width"
      :height="image.height"
      loading="lazy"
      class="block w-full h-auto transition-transform duration-300 ease-in-out md:group-hover:scale-103"
    />
    <div class="overlay absolute inset-0 flex items-end p-3 opacity-100 transition-opacity duration-300 ease-in-out md:opacity-0 md:group-hover:opacity-100 md:p-4">
      <span class="text-white text-0.75rem font-500 md:text-0.875rem">{{ image.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types/gallery'

defineProps<{
  image: GalleryImage
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, transparent 40%);
}

@media (min-width: 768px) {
  .overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%);
  }
}
</style>
