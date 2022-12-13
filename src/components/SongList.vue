<script setup>
  const {  data, pending, error, refresh } = await useFetch(() => `/api/spotify`);
</script>
<template>
  <div class="grid md:grid-cols-6 md:gap-1.5 gap-4 grid-cols-2 md:place-items-start place-items-center mt-4">
      <a v-if="!pending && !error" :key="song.name" :href="song.external_urls.spotify" target="_blank" v-for="song in data.data" class="flex cursor-pointer flex-col space-y-2.5 text-center justify-center">
        <nuxt-img draggable="false" width="144" height="144" :alt="song.name" quality="50" format="webp" class="rounded-md w-36 h-36 transition select-none transform duration-300 " :src="`${song.image}`"></nuxt-img>
        <div class="w-36 break-all flex flex-col">
          <h1 class="truncate title md:text-left text-center text-neutral-700 dark:text-neutral-400">{{ song.name }}</h1>
          <div class="flex flex-col space-y-0.5">
            <h1 class="title text-sm md:text-left w-36 truncate text-center break-keep text-neutral-400 dark:text-neutral-200">{{ song.artists[0].name }}</h1>
          </div>
        </div>
      </a>
    <button @click="refresh()" aria-label="Refresh Song list" v-if="error" class="p-2 focus:outline-none px-6 bg-neutral-200 hover:bg-neutral-300 transition duration-300 dark:Hover-bg-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-black dark:hover space-x-2.5 items-center justify-center flex flex-row rounded-md">
        <client-only>
        <font-awesome-icon :icon="['fas', 'arrows-rotate']"/>
        </client-only>
        <span>Refresh</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SongList.vue"
}
</script>