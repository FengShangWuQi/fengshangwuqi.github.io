<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex-1 flex items-center justify-center">
      <HeroBgGrid />
      <div class="relative text-center px-6">
        <p
          class="text-0.75rem font-500 tracking-0.3em uppercase text-text-muted mb-4 hero-fade-in md:text-0.85rem"
        >
          {{ t('Welcome') }}
        </p>
        <h1
          class="text-[clamp(2.5rem,8vw,5rem)] font-800 tracking-tight leading-tight mb-4 bg-clip-text hero-fade-in hero-delay-1"
          style="
            background-image: linear-gradient(
              135deg,
              var(--color-text) 0%,
              var(--color-text-light) 50%,
              var(--color-text) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
        >
          {{ t("FengShangWuQi's Personal Site") }}
        </h1>
        <div
          class="w-10 h-0.75 rounded-sm mx-auto mb-6 hero-fade-in hero-delay-1"
          style="
            background: linear-gradient(
              90deg,
              transparent,
              var(--color-text-muted),
              transparent
            );
          "
        />
        <p
          class="text-1rem text-text-muted max-w-md mx-auto mb-12 hero-fade-in hero-delay-2 md:text-1.1rem"
        >
          {{ t('Capturing moments, curating insights.') }}
        </p>
        <div
          class="flex flex-col gap-4 max-w-sm mx-auto sm:flex-row sm:max-w-lg sm:gap-5"
        >
          <HeroSectionCard
            :title="t('Gallery')"
            :description="t('A curated photo collection')"
            to="/gallery"
            class="flex-1 hero-fade-in hero-delay-3"
          >
            <template #icon>
              <IconGallery class="w-6 h-6" />
            </template>
          </HeroSectionCard>
          <HeroSectionCard
            :title="t('Digest')"
            :description="t('Tech insights in brief')"
            coming
            class="flex-1 hero-fade-in hero-delay-3"
          >
            <template #icon>
              <IconBook class="w-6 h-6" />
            </template>
          </HeroSectionCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { t } = useLocale()
</script>

<style scoped>
.hero-fade-in {
  opacity: 0;
  translate: 0 20px;
  animation: hero-enter 0.8s ease-out forwards;
}

.hero-delay-1 {
  animation-delay: 0.15s;
}
.hero-delay-2 {
  animation-delay: 0.3s;
}
.hero-delay-3 {
  animation-delay: 0.45s;
}

@keyframes hero-enter {
  to {
    opacity: 1;
    translate: none;
  }
}
</style>
