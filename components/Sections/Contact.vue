<script setup lang="ts">
defineProps({
  contacts: { type: Array, required: true },
});
</script>
<template>
  <div v-motion-slide-visible-once-bottom class="py-4">
    <h2 class="text-2xl text-neutral-500">Contact</h2>
    <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.title"
        :data="contact"
      />
    </div>
  </div>
</template>
