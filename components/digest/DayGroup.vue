<template>
  <div>
    <div class="flex items-center gap-3 text-0.8rem font-600 text-text-light uppercase tracking-wide mb-3 md:text-0.85rem md:mb-4">
      {{ formatDate(day.date, locale) }}
      <div class="flex-1 h-px bg-border/30" />
    </div>
    <div class="flex flex-col gap-4">
      <DigestArticleCard
        v-for="item in day.items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DigestDayGroup } from '~/types/digest'
import { formatDate } from '~/utils/format-date'

defineProps<{
  day: DigestDayGroup
}>()

const { locale } = useLocale()
</script>
