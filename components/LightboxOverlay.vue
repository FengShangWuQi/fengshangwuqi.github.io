<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
        @keydown.escape="closeLightbox"
        @keydown.left="prevImage"
        @keydown.right="nextImage"
        tabindex="0"
        ref="lightboxRef"
      >
        <button class="lightbox__close" @click="closeLightbox" aria-label="Close">
          &times;
        </button>

        <button class="lightbox__nav lightbox__nav--prev" @click="prevImage" aria-label="Previous">
          &#8249;
        </button>

        <div
          class="lightbox__content"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <Transition name="lightbox-img" mode="out-in">
            <img
              :key="currentImage.src"
              :src="baseURL + currentImage.src.replace(/^\//, '')"
              :alt="currentImage.title"
              class="lightbox__img"
            />
          </Transition>
        </div>

        <button class="lightbox__nav lightbox__nav--next" @click="nextImage" aria-label="Next">
          &#8250;
        </button>

        <div class="lightbox__counter">
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
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.lightbox__content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 0.5rem;
}

.lightbox__close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;
  z-index: 1;
}

.lightbox__close:hover {
  opacity: 1;
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 3rem;
  cursor: pointer;
  padding: 1rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  z-index: 1;
}

.lightbox__nav:hover {
  opacity: 1;
}

.lightbox__nav--prev {
  left: 0.5rem;
}

.lightbox__nav--next {
  right: 0.5rem;
}

.lightbox__counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 768px) {
  .lightbox__content {
    max-width: 100vw;
    max-height: 80vh;
  }

  .lightbox__img {
    max-width: 100vw;
    max-height: 80vh;
    border-radius: 0;
  }

  .lightbox__close {
    top: 0.5rem;
    right: 0.75rem;
    font-size: 2rem;
  }

  .lightbox__nav {
    font-size: 2rem;
    padding: 0.75rem;
  }

  .lightbox__counter {
    bottom: 1rem;
    font-size: 0.75rem;
  }
}

/* Overlay transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Image swap transition */
.lightbox-img-enter-active,
.lightbox-img-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-img-enter-from,
.lightbox-img-leave-to {
  opacity: 0;
}
</style>
