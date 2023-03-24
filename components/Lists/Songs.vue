<script setup>
const { data, pending, error, refresh } = useFetch(() => `/api/spotify`);
if (error) {
  refresh();
}
</script>
<template>
  <div
    class="grid md:grid-cols-6 md:gap-1.5 gap-4 grid-cols-2 md:place-items-start place-items-center mt-4"
  >
    <a
      v-if="!pending && !error"
      :key="song.name"
      :href="song.external_urls.spotify"
      target="_blank"
      v-for="song in data.data"
      class="flex focus:outline-none cursor-pointer flex-col space-y-2.5 text-center justify-center"
    >
      <nuxt-img
        draggable="false"
        width="144"
        height="144"
        :alt="song.name"
        quality="50"
        format="webp"
        class="rounded-md w-36 h-36 transition select-none transform duration-300"
        :src="`${song.image}`"
      ></nuxt-img>
      <div class="w-36 break-all flex flex-col">
        <h1
          class="truncate title md:text-left text-center text-neutral-700 dark:text-neutral-400"
        >
          {{ song.name }}
        </h1>
        <div class="flex flex-col space-y-0.5">
          <h1
            class="title text-sm md:text-left w-36 truncate text-center break-keep text-neutral-400 dark:text-neutral-200"
          >
            {{ song.artists[0].name }}
          </h1>
        </div>
      </div>
    </a>
    <a
      v-if="pending && !error"
      target="_blank"
      v-for="index in 6"
      class="flex animate-pulse focus:outline-none cursor-pointer flex-col space-y-2.5 text-center justify-center"
    >
      <div
        draggable="false"
        class="rounded-md w-[144px] h-[144px] bg-neutral-800 transition select-none transform duration-300"
      ></div>
      <div class="w-36 break-all flex flex-col">
        <div
          class="truncate w-full rounded-md h-6 md:text-left text-center bg-neutral-400 dark:bg-neutral-800"
        ></div>
      </div>
    </a>
    <button
      @click="refresh()"
      aria-label="Refresh Song list"
      v-if="error"
      class="p-2 focus:outline-none px-6 bg-neutral-200 hover:bg-neutral-300 transition duration-300 dark:Hover-bg-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-black dark:hover space-x-2.5 items-center justify-center flex flex-row rounded-md"
    >
      <Icon
        name="ic:baseline-refresh"
        class="w-5 h-5 hover:rotate-180 transition duration-300"
      />
      <span>Refresh</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SongList.vue",
};
</script>
