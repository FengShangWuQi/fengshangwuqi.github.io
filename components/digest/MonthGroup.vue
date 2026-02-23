<template>
  <div>
    <button
      class="flex items-center gap-3 w-full cursor-pointer group"
      @click="toggleMonth(monthGroup.month)"
    >
      <div
        class="w-3 h-3 rounded-full border-2 shrink-0 transition-colors duration-200"
        :class="expanded ? 'border-brand-blue bg-brand-blue/20' : 'border-border bg-surface'"
      />
      <IconChevronRight
        class="w-4 h-4 text-text-muted transition-transform duration-200"
        :class="expanded && 'rotate-90'"
      />
      <span class="text-0.9rem font-600 text-text md:text-0.95rem">
        {{ formatMonth(monthGroup.month, locale) }}
      </span>
      <span class="text-0.75rem text-text-muted">
        {{ articleCount }} {{ t('articles') }}
      </span>
    </button>

    <div v-if="expanded" class="relative ml-1.5 pl-6 border-l border-border/60 mt-4 pb-2 md:pl-8">
      <div class="flex flex-col gap-8 md:gap-10">
        <DigestDayGroup
          v-for="day in monthGroup.days"
          :key="day.date"
          :day="day"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DigestMonthGroup } from '~/types/digest'
import { formatMonth } from '~/utils/format-date'

const props = defineProps<{
  monthGroup: DigestMonthGroup
}>()

const { t, locale } = useLocale()
const { toggleMonth, isMonthExpanded } = useDigest()

const expanded = computed(() => isMonthExpanded(props.monthGroup.month))

const articleCount = computed(() =>
  props.monthGroup.days.reduce((sum, day) => sum + day.items.length, 0)
)
</script>
