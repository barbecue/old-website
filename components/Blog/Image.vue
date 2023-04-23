<script setup lang="ts">
const props = defineProps({
  data: { type: Array, required: true },
});
</script>
<template>
  <nuxt-img
    loading="lazy"
    draggable="false"
    format="webp"
    :src="`/assets/images/blog/${props.data.image}`"
    :alt="props.data.title"
    class="h-62 w-full rounded-md md:h-96"
  />
</template>
