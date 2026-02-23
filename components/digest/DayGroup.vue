<template>
  <div>
    <div class="flex items-center gap-3 mb-3 md:mb-4">
      <span class="w-7.5 h-7.5 rounded-full bg-white/6 border border-border/40 flex items-center justify-center text-0.7rem font-600 text-text-light tabular-nums shrink-0">{{ formatDayNumber(day.date) }}</span>
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
import { formatDayNumber } from '~/utils/format-date'

defineProps<{
  day: DigestDayGroup
}>()
</script>
