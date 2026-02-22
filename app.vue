<template>
  <div>
    <div v-if="route.path !== '/'" class="page-ambient" />
    <a
      href="https://github.com/FengShangWuQi"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed top-5 right-5 z-50 w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/40 bg-white/6 glass shadow-sm text-text-muted transition-all duration-200 hover:text-text hover:border-border/70 hover:shadow-md md:right-8"
    >
      <IconGithub class="w-5 h-5" />
    </a>
    <div class="relative">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.page-ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 40% at 20% 0%, rgba(90, 110, 220, 0.12), transparent 60%),
    radial-gradient(ellipse 50% 35% at 80% 10%, rgba(160, 100, 220, 0.1), transparent 55%);
}
</style>
