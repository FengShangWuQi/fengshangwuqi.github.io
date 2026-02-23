<template>
  <div>
    <div class="flex items-center gap-3 mb-5">
      <span class="text-1.1rem font-700 text-text md:text-1.2rem">{{ yearGroup.year }}</span>
      <div class="flex-1 h-px bg-border/50" />
    </div>
    <div class="flex flex-col gap-6">
      <DigestMonthGroup
        v-for="month in yearGroup.months"
        :key="month.month"
        :month-group="month"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DigestYearGroup } from '~/types/digest'

defineProps<{
  yearGroup: DigestYearGroup
}>()
</script>
