<template>
  <div class="page">
    <div class="page__content">
      <AppHeader />
      <GalleryGrid />
    </div>
    <footer class="page__footer">
      <a
        href="https://github.com/FengShangWuQi/fengshangwuqi.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="page__footer-link"
      >
        <IconGithub class="page__footer-icon" />
      </a>
      <p class="page__footer-text">The Gallery</p>
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

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page__content {
  width: 100%;
  flex: 1;
}

.page__footer {
  padding: 3rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.page__footer-link {
  color: var(--color-border);
  transition: color 0.2s, transform 0.2s;
  display: inline-block;
}

.page__footer-link:hover {
  color: var(--color-text);
  transform: scale(1.1);
}

.page__footer-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.page__footer-text {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-border);
}

@media (max-width: 768px) {
  .page__footer {
    padding: 2rem 0 1.5rem;
  }
}
</style>
