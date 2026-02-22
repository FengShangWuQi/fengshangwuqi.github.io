<template>
  <component
    :is="coming ? 'div' : NuxtLink"
    :to="coming ? undefined : to"
    class="block relative p-6 rounded-xl border border-border/40 bg-[var(--color-white)]/60 backdrop-blur-sm transition-all duration-300 no-underline group"
    :class="coming ? 'opacity-50 cursor-default' : 'hover:-translate-y-1 hover:border-border hover:shadow-lg'"
  >
    <div v-if="coming" class="absolute top-3 right-3 text-0.65rem font-600 tracking-wide uppercase text-text-muted bg-surface px-2 py-0.5 rounded-full">
      Soon
    </div>
    <div class="mb-3 text-text-muted transition-colors duration-200" :class="!coming && 'group-hover:text-text'">
      <slot name="icon" />
    </div>
    <h3 class="text-1.1rem font-700 text-text mb-1">{{ title }}</h3>
    <p class="text-0.85rem text-text-muted leading-relaxed">{{ description }}</p>
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

defineProps<{
  title: string
  description: string
  to?: string
  coming?: boolean
}>()
</script>
