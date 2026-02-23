<template>
  <div v-if="years.length" class="max-w-2xl mx-auto px-4 pb-12 md:px-6 md:pb-16">
    <div class="flex flex-col gap-10">
      <DigestYearSection
        v-for="yearGroup in years"
        :key="yearGroup.year"
        :year-group="yearGroup"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { years } = useDigest()
</script>
