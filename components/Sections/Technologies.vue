<script setup lang="ts">
defineProps({
  technologies: { type: Array, required: true },
});
</script>
<template>
  <div v-motion-slide-visible-once-bottom class="py-4">
    <h2 class="text-2xl text-neutral-500">Technologies</h2>
    <div
      v-for="category in technologies"
      :key="category.title.toLowerCase()"
      class="mt-6 flex flex-col space-y-3 rounded-md"
    >
      <span class="text-neutral-600">{{ category.title }}</span>
      <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4">
        <SkillCard
          v-for="item in category.items"
          :key="item.title"
          :data="item"
          :category="category.title.toLowerCase()"
        />
      </div>
    </div>
  </div>
</template>
