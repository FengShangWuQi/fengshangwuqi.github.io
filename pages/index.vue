<template>
  <div class="min-h-screen flex flex-col">
    <div class="w-full flex-1">
      <AppHeader />
      <GalleryGrid />
    </div>
    <footer class="flex flex-col items-center gap-3 pt-12 pb-8 md:pt-8 md:pb-6">
      <a
        href="https://github.com/FengShangWuQi/fengshangwuqi.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-border transition-all duration-200 hover:text-text hover:scale-110"
      >
        <IconGithub class="w-6 h-6" />
      </a>
      <p class="text-0.7rem tracking-0.2em uppercase text-border">The Gallery</p>
    </footer>
    <LightboxOverlay />
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types/gallery'

const { images } = useGallery()

const { data, error } = await useAsyncData('images', () =>
  $fetch<GalleryImage[]>('/api/images')
)

if (error.value) {
  console.error('Failed to load images:', error.value)
}

if (data.value) {
  images.value = data.value
}
</script>
