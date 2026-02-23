<template>
  <div class="p-4 rounded-xl border border-border/40 bg-white/4 glass shadow-sm md:p-5">
    <a
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-0.95rem font-600 text-text leading-snug no-underline transition-colors duration-200 hover:text-brand-blue md:text-1rem"
    >
      {{ item.title[locale] }}<IconExternalLink class="inline-block w-3.5 h-3.5 ml-1 align-middle -translate-y-px text-text-muted" />
    </a>
    <p class="mt-2 text-0.8rem text-text-muted leading-relaxed md:text-0.85rem">
      {{ item.summary[locale] }}
    </p>
    <div class="flex items-center justify-end gap-1.5 mt-2 text-0.7rem text-text-muted/30">
      <component :is="sourceIcon" class="w-2.5 h-2.5" />
      <span>{{ t(item.source) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DigestItem } from '~/types/digest'

const props = defineProps<{
  item: DigestItem
}>()

const { t, locale } = useLocale()

const sourceIcon = computed(() => {
  if (props.item.source.includes('GitHub')) return resolveComponent('IconGithub')
  if (props.item.source.includes('Web Search')) return resolveComponent('IconGlobe')
  return resolveComponent('IconRss')
})
</script>
