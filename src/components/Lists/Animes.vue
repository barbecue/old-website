<script setup>
  const { data, pending, error, refresh } = await useFetch(() => `/api/mal`);
</script>
<template>
  <div class="grid md:grid-cols-6 md:gap-1.5 gap-4 grid-cols-2 md:place-items-start place-items-center mt-4">
      <a v-if="!pending && !error" :key="anime.animeTitle" :href="`https://myanimelist.net/${anime.animeUrl}`" target="_blank" v-for="anime in data.data" class="flex cursor-pointer flex-col space-y-2.5 text-center justify-center">
        <nuxt-img draggable="false" width="144" height="204" format="webp" quality="100" :alt="anime.animeTitle"  class="rounded-md w-36 h-42 transition select-none transform duration-300" :src="`${anime.animeImagePath}`"></nuxt-img>
        <div class="w-36 break-all flex flex-col">
          <h1 class="truncate title md:text-left text-center text-neutral-700 dark:text-neutral-400">{{ anime.animeTitle }}</h1>
          <div class="flex flex-col space-y-0.5">
            <h1 class="title text-sm md:text-left text-center break-keep text-neutral-400 dark:text-neutral-200">{{ anime.score }}/10 Score</h1>
            <h1 class="title text-sm md:text-left text-center break-keep text-neutral-400 dark:text-neutral-200">{{ anime.numWatchedEpisodes }}/{{ anime.animeNumEpisodes === 0 ? '?' : anime.animeNumEpisodes }} Epsiodes Watched</h1>
          </div>
        </div>
      </a>
    <button @click="refresh()" aria-label="Refresh Anime List" v-if="error" class="p-2 focus:outline-none px-6 bg-neutral-200 hover:bg-neutral-300 transition duration-300 dark:Hover-bg-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-black dark:hover space-x-2.5 items-center justify-center flex flex-row rounded-md">
      <client-only>
        <font-awesome-icon :icon="['fas', 'arrows-rotate']"/>
      </client-only>
      <span>Refresh</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AnimeList.vue"
}
</script>