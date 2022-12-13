<script setup>
  const { data, pending, error } = useFetch(() => `/api/spotify`);
</script>
<template>
  <div class="grid md:grid-cols-6 md:gap-1.5 gap-4 grid-cols-2 md:place-items-start place-items-center mt-4">
      <a v-if="!pending && !error" :key="song.name" :href="song.external_urls.spotify" target="_blank" v-for="song in data.data" class="flex cursor-pointer flex-col space-y-2.5 text-center justify-center">
        <nuxt-img width="144" height="144" :alt="song.name" quality="50" format="webp" class="rounded-md w-36 h-36 transition select-none transform duration-300 " :src="`${song.image}`"></nuxt-img>
        <div class="w-36 break-all flex flex-col">
          <h1 class="truncate title md:text-left text-center text-neutral-700 dark:text-neutral-400">{{ song.name }}</h1>
          <div class="flex flex-col space-y-0.5">
            <h1 class="title text-sm md:text-left w-36 truncate text-center break-keep text-neutral-400 dark:text-neutral-200">{{ song.artists[0].name }}</h1>
          </div>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: "SongList.vue"
}
</script>