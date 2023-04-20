<script setup lang="ts">
useHead({
  title: "Posts",
});
</script>

<template>
  <div
    v-motion-slide-bottom
    class="relative mx-auto max-w-7xl items-center px-12 md:px-24"
  >
    <span class="text-2xl text-neutral-600">Articles I wrote</span>
    <BlogList :query-limit="0" />
  </div>
</template>
