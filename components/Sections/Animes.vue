<template>
  <div v-motion-slide-visible-once-bottom class="py-4">
    <h2 class="text-2xl text-neutral-500">Recently Watched Animes</h2>
    <client-only>
      <LazyAnimeList />
    </client-only>
  </div>
</template>
