<template>
  <div>
    <div v-if="route.path !== '/'" class="page-ambient" />
    <div class="fixed top-5 right-5 z-50 flex items-center gap-2 md:right-8">
      <button
        class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/40 bg-white/6 glass shadow-sm text-text-muted transition-all duration-200 hover:text-text hover:border-border/70 hover:shadow-md cursor-pointer"
        @click="switchLocale"
      >
        <span class="text-0.8rem font-600">{{ locale === 'en' ? '中' : 'EN' }}</span>
      </button>
      <a
        :href="SOCIAL_LINKS.github"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/40 bg-white/6 glass shadow-sm text-text-muted transition-all duration-200 hover:text-text hover:border-border/70 hover:shadow-md"
      >
        <IconGithub class="w-5 h-5" />
      </a>
    </div>
    <div class="relative">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants'

const route = useRoute()
const { locale, t, switchLocale } = useLocale()

useHead({
  title: () => t("FengShangWuQi's Personal Site"),
})
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
