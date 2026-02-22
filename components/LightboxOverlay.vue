<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-1000 bg-black/92 flex items-center justify-center outline-none"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
        @keydown.escape="closeLightbox"
        @keydown.left="prevImage"
        @keydown.right="nextImage"
        tabindex="0"
        ref="lightboxRef"
      >
        <button
          class="absolute top-2 right-3 bg-transparent border-none text-white cursor-pointer leading-none opacity-80 z-1 transition-opacity duration-200 hover:opacity-100 md:top-4 md:right-6"
          @click="closeLightbox"
          aria-label="Close"
        >
          <svg class="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <button
          class="absolute top-1/2 left-2 -translate-y-1/2 bg-transparent border-none text-white cursor-pointer p-3 opacity-70 z-1 transition-opacity duration-200 hover:opacity-100 md:left-2 md:p-4"
          @click="prevImage"
          aria-label="Previous"
        >
          <svg class="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div
          class="max-w-100vw max-h-80vh flex items-center justify-center md:max-w-90vw md:max-h-85vh"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <Transition name="lightbox-img" mode="out-in">
            <img
              :key="currentImage.src"
              :src="baseURL + currentImage.src.replace(/^\//, '')"
              :alt="currentImage.title"
              class="max-w-100vw max-h-80vh object-contain rounded-0 md:max-w-90vw md:max-h-85vh md:rounded-2"
            />
          </Transition>
        </div>

        <button
          class="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent border-none text-white cursor-pointer p-3 opacity-70 z-1 transition-opacity duration-200 hover:opacity-100 md:right-2 md:p-4"
          @click="nextImage"
          aria-label="Next"
        >
          <svg class="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-0.75rem tabular-nums md:bottom-6 md:text-0.875rem">
          {{ lightboxIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { images, lightboxOpen, lightboxIndex, closeLightbox, nextImage, prevImage } = useGallery()

const baseURL = useRuntimeConfig().app.baseURL

const lightboxRef = ref<HTMLElement | null>(null)

const currentImage = computed(() => images.value[lightboxIndex.value])

let touchStartX = 0

const onTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].clientX
}

const onTouchEnd = (e: TouchEvent) => {
  const delta = e.changedTouches[0].clientX - touchStartX
  const threshold = Math.max(50, window.innerWidth * 0.12)
  if (Math.abs(delta) > threshold) {
    delta > 0 ? prevImage() : nextImage()
  }
}

watch(lightboxOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    nextTick(() => lightboxRef.value?.focus())
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style>
/* Vue transition classes — must remain in CSS */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-img-enter-active,
.lightbox-img-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-img-enter-from,
.lightbox-img-leave-to {
  opacity: 0;
}
</style>
