<template>
  <DigestTimeline />
</template>

<script setup lang="ts">
import type { DigestYearGroup } from '~/types/digest'

definePageMeta({
  layout: 'subpage',
  title: 'The Digest',
  subtitle: 'Tech insights in brief',
})

const { years, initExpanded } = useDigest()

const { data, error } = await useAsyncData('digests', () =>
  $fetch<DigestYearGroup[]>('/api/digests')
)

if (error.value) {
  console.error('Failed to load digests:', error.value)
}

if (data.value) {
  years.value = data.value
  initExpanded()
}
</script>
