<script setup lang="ts">
useHead({
  title: "Articles",
});
</script>

<template>
  <div
    v-motion-slide-bottom
    class="relative mx-auto max-w-7xl items-center px-12 md:px-24"
  >
    <h1 class="text-2xl text-neutral-500">Articles I wrote</h1>
    <BlogList :query-limit="0" />
  </div>
</template>
