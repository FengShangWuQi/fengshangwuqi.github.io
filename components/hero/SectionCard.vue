<template>
  <component
    :is="coming ? 'div' : NuxtLink"
    :to="coming ? undefined : to"
    class="block relative p-6 rounded-xl border border-border/40 bg-white/5 glass shadow-sm transition-all duration-300 no-underline group"
    :class="coming ? 'cursor-default' : 'hover:-translate-y-1 hover:bg-white/8 hover:border-border/60 hover:shadow-lg'"
  >
    <div v-if="coming" class="absolute top-3 right-3 text-0.65rem font-600 tracking-wide uppercase text-text-muted bg-white/8 border border-border/60 px-2 py-0.5 rounded-full">
      {{ t('Soon') }}
    </div>
    <div :class="coming && 'opacity-60'">
      <div class="mb-3 text-text-muted transition-colors duration-200" :class="!coming && 'group-hover:text-text'">
        <slot name="icon" />
      </div>
      <h3 class="text-1.1rem font-700 text-text mb-1">{{ title }}</h3>
      <p class="text-0.85rem text-text-muted leading-relaxed">{{ description }}</p>
    </div>
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const { t } = useLocale()

defineProps<{
  title: string
  description: string
  to?: string
  coming?: boolean
}>()
</script>
