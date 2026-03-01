<template>
  <NuxtLink
    :to="to"
    class="block p-6 rounded-xl border border-border/40 bg-white/5 glass shadow-sm transition-all duration-300 no-underline group hover:-translate-y-1 hover:bg-white/8 hover:border-border/60 hover:shadow-lg"
  >
    <div class="mb-3 text-text-muted transition-colors duration-200 group-hover:text-text">
      <slot name="icon" />
    </div>
    <h3 class="text-1.1rem font-700 text-text mb-1">{{ title }}</h3>
    <p class="text-0.85rem text-text-muted leading-relaxed">{{ description }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  to: string
}>()
</script>
