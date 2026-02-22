<template>
  <div class="min-h-screen">
    <!-- Top bar -->
    <div class="flex items-center justify-between px-5 pt-6 md:px-8 md:pt-8">
      <NuxtLink
        to="/"
        class="text-1.2rem font-800 tracking-tight no-underline bg-clip-text transition-opacity duration-200 hover:opacity-70 md:text-1.4rem"
        style="background-image: linear-gradient(135deg, var(--color-text) 0%, var(--color-brand-blue) 50%, var(--color-brand-purple) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
      >
        fengshangwuqi
      </NuxtLink>
      <a
        href="https://github.com/FengShangWuQi/fengshangwuqi.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="text-text-muted transition-all duration-200 hover:text-text hover:scale-110"
      >
        <IconGithub class="w-5 h-5" />
      </a>
    </div>

    <!-- Page header -->
    <header class="pt-6 pb-6 px-4 text-center md:pt-10 md:pb-8 md:px-6">
      <p class="text-0.7rem font-500 tracking-0.25em uppercase text-text-muted mb-2 md:text-0.8rem md:tracking-0.35em">
        Curated Collection
      </p>
      <h1
        class="text-[clamp(2.2rem,6vw,3.5rem)] font-800 tracking-tight leading-tight bg-clip-text"
        style="background-image: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-light) 50%, var(--color-text) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
      >
        The Gallery
      </h1>
      <div
        class="w-8 h-0.75 rounded-sm mx-auto mt-4 md:w-12 md:mt-5"
        style="background: linear-gradient(90deg, transparent, var(--color-text), transparent)"
      />
    </header>

    <GalleryGrid />
    <LightboxOverlay />
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types/gallery'

definePageMeta({ layout: false })

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
