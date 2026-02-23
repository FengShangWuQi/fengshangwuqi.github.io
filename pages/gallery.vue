<template>
  <GalleryGrid />
  <GalleryLightboxOverlay />
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types/gallery'

definePageMeta({
  layout: 'subpage',
  title: 'The Gallery',
  subtitle: 'Curated photo collection',
})

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
