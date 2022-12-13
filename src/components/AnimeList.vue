<script setup>
  const { data, pending, error } = useFetch(() => `/api/mal`);
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 mt-4">
      <a v-if="!pending && !error" :key="anime.animeTitle" :href="`https://myanimelist.net/${anime.animeUrl}`" target="_blank" v-for="anime in data.data" class="flex cursor-pointer flex-col space-y-2.5 text-center justify-center">
        <nuxt-img class="rounded-md w-42 h-42 transition transform duration-300 " :src="`${anime.animeImagePath}`"></nuxt-img>
        <div class="w-42 break-all flex flex-col text-left">
          <h1 class="truncate title text-left text-neutral-700 dark:text-neutral-400">{{ anime.animeTitle }}</h1>
          <div class="title text-sm break-keep text-neutral-400 dark:text-neutral-200">{{ anime.score }}/10 Score, {{ anime.numWatchedEpisodes }}/{{ anime.animeNumEpisodes === 0 ? '?' : anime.animeNumEpisodes }} Epsiodes Watched</div>
        </div>
      </a>
      <a v-else-if="pending" :v-for="index in 5" :key="index" class="flex cursor-pointer flex-col space-y-2.5 text-center justify-center">
        <div class="rounded-md w-42 h-42 bg-neutral-800 animate-pulse transition transform duration-300 "></div>
        <div class="w-42 break-all flex flex-col text-left">
          <h1 class="truncate title text-left text-neutral-700 dark:text-neutral-400">a</h1>
          <div class="title text-sm break-keep text-neutral-400 dark:text-neutral-200">qwe</div>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: "AnimeList.vue"
}
</script>