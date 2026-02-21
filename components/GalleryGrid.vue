<template>
  <div
    class="gallery-grid"
    :class="`gallery-grid--count-${Math.min(images.length, 4)}`"
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
</script>

<style scoped>
.gallery-grid {
  column-count: 1;
  column-gap: 1rem;
  padding: 0 1rem 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

@media (min-width: 480px) {
  .gallery-grid {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .gallery-grid {
    column-count: 3;
    padding: 0 1.5rem 2rem;
  }
}

@media (min-width: 1280px) {
  .gallery-grid {
    column-count: 4;
    padding: 0 2rem 2rem;
  }
}

/* Cap columns to image count when few images */
.gallery-grid--count-1 {
  column-count: 1;
  max-width: 600px;
}

.gallery-grid--count-2 {
  max-width: 1000px;
}

@media (min-width: 480px) {
  .gallery-grid--count-2,
  .gallery-grid--count-3 {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .gallery-grid--count-2 {
    column-count: 2;
  }

  .gallery-grid--count-3 {
    column-count: 3;
  }
}
</style>
