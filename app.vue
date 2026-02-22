<template>
  <div>
    <HeroBackground class="fixed inset-0 z-0" />
    <a
      href="https://github.com/FengShangWuQi"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed top-5 right-5 z-50 w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/40 bg-[var(--color-white)]/60 backdrop-blur-sm text-text-muted shadow-sm transition-all duration-200 hover:text-text hover:border-border hover:shadow-md md:right-8"
    >
      <IconGithub class="w-5 h-5" />
    </a>
    <div class="relative z-10">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
