<template>
  <div v-motion-slide-visible-once-bottom class="py-4">
    <h2 class="text-2xl text-neutral-500">Recently Listened Songs</h2>
    <client-only>
      <LazySongList />
    </client-only>
  </div>
</template>
