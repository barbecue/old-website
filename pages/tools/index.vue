<script setup lang="ts">
useHead({
  title: "Tools",
});

const tools = [];
</script>

<template>
  <div
    v-motion-slide-bottom
    class="relative mx-auto mt-10 max-w-7xl items-center px-12 md:px-24"
  >
    <h1 class="text-2xl text-neutral-500">Tools I Made</h1>
    <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
      <ToolCard
        v-for="tool in tools"
        :key="tool.title"
        v-if-="tools.length"
        :data="tool"
      />
      <h2 v-else- class="dark:text-neutral-500">
        Nothing to see here (for now)
      </h2>
    </div>
  </div>
</template>
