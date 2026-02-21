<template>
  <div class="gallery-item" @click="$emit('click')">
    <NuxtImg
      :src="image.src"
      :alt="image.title"
      :width="image.width"
      :height="image.height"
      loading="lazy"
      class="gallery-item__img"
    />
    <div class="gallery-item__overlay">
      <span class="gallery-item__title">{{ image.title }}</span>
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
.gallery-item {
  position: relative;
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  background: var(--color-surface);
}

.gallery-item__img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.gallery-item__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.gallery-item:hover .gallery-item__img {
  transform: scale(1.03);
}

.gallery-item:hover .gallery-item__overlay {
  opacity: 1;
}

.gallery-item__title {
  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .gallery-item {
    border-radius: 0.5rem;
  }

  .gallery-item__overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, transparent 40%);
    padding: 0.75rem;
  }

  .gallery-item__title {
    font-size: 0.75rem;
  }
}
</style>
