<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex-1 flex items-center justify-center">
      <HeroBackground />
      <div class="relative z-10 text-center px-6">
        <p class="text-0.75rem font-500 tracking-0.3em uppercase text-text-muted mb-4 hero-fade-in md:text-0.85rem">
          Welcome
        </p>
        <h1
          class="text-[clamp(2.5rem,8vw,5rem)] font-800 tracking-tight leading-tight mb-4 bg-clip-text hero-fade-in hero-delay-1"
          style="background-image: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-light) 50%, var(--color-text) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
        >
          fengshangwuqi
        </h1>
        <div
          class="w-10 h-0.75 rounded-sm mx-auto mb-6 hero-fade-in hero-delay-1"
          style="background: linear-gradient(90deg, transparent, var(--color-text-muted), transparent)"
        />
        <p class="text-1rem text-text-muted max-w-md mx-auto mb-12 hero-fade-in hero-delay-2 md:text-1.1rem">
          A space for visual stories and curated ideas.
        </p>
        <div class="flex flex-col gap-4 max-w-sm mx-auto hero-fade-in hero-delay-3 sm:flex-row sm:max-w-lg sm:gap-5">
          <SectionCard
            title="Gallery"
            description="A curated photo collection"
            to="/gallery"
            class="flex-1"
          >
            <template #icon>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </template>
          </SectionCard>
          <SectionCard
            title="Digest"
            description="Tech insights & readings"
            coming
            class="flex-1"
          >
            <template #icon>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
              </svg>
            </template>
          </SectionCard>
        </div>
      </div>
    </div>
    <a
      href="https://github.com/FengShangWuQi"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed top-5 right-5 z-50 text-text-muted transition-all duration-200 hover:text-text hover:scale-110 md:right-8"
    >
      <IconGithub class="w-5 h-5" />
    </a>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<style scoped>
.hero-fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: hero-enter 0.8s ease-out forwards;
}

.hero-delay-1 { animation-delay: 0.15s; }
.hero-delay-2 { animation-delay: 0.3s; }
.hero-delay-3 { animation-delay: 0.45s; }

@keyframes hero-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
