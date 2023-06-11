<script setup lang="ts">
defineProps({
  projects: { type: Array, required: true },
});
</script>
<template>
  <div v-motion-slide-visible-once-bottom class="py-4">
    <h2 class="text-2xl text-neutral-500">Projects I am working on</h2>
    <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-1">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :data="project"
      />
    </div>
  </div>
</template>
