<script setup>
const { data, pending, error, refresh } = useFetch(() => `/api/mal`);
if (error) {
  refresh();
}
</script>
<template>
  <div>
    <div
      v-if="!pending && !error"
      class="mt-4 grid grid-cols-2 place-items-center gap-4 md:grid-cols-6 md:place-items-start md:gap-1.5"
    >
      <nuxt-link
        v-for="anime in data.data"
        :key="anime.animeTitle"
        :to="`https://myanimelist.net/${anime.animeUrl}`"
        target="_blank"
        class="flex cursor-pointer flex-col justify-center space-y-2.5 text-center focus:outline-none"
      >
        <nuxt-img
          draggable="false"
          width="144"
          height="204"
          format="webp"
          quality="100"
          :alt="anime.animeTitle"
          class="h-42 w-36 transform select-none rounded-md transition duration-300"
          :src="`${anime.animeImagePath}`"
        ></nuxt-img>
        <div class="flex w-36 flex-col break-all">
          <h1
            class="title truncate text-center text-neutral-700 dark:text-neutral-400 md:text-left"
          >
            {{ anime.animeTitle }}
          </h1>
          <div class="flex flex-col space-y-0.5">
            <h1
              class="title break-keep text-center text-sm text-neutral-400 dark:text-neutral-200 md:text-left"
            >
              {{ anime.score }}/10 Score
            </h1>
            <h1
              class="title break-keep text-center text-sm text-neutral-400 dark:text-neutral-200 md:text-left"
            >
              {{ anime.numWatchedEpisodes }}/{{
                anime.animeNumEpisodes === 0 ? "?" : anime.animeNumEpisodes
              }}
              Epsiodes Watched
            </h1>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div
      v-if="pending && !error"
      class="mt-4 grid grid-cols-2 place-items-center gap-4 md:grid-cols-6 md:place-items-start md:gap-1.5"
    >
      <a
        v-for="index in 6"
        :key="index"
        target="_blank"
        class="flex animate-pulse cursor-pointer flex-col justify-center space-y-2.5 text-center focus:outline-none"
      >
        <div
          class="h-[204px] w-[144px] transform rounded-md bg-neutral-400 transition duration-300 dark:bg-neutral-800"
        ></div>
        <div class="flex w-36 flex-col gap-2 break-all">
          <div
            class="h-6 w-full truncate rounded-md bg-neutral-400 dark:bg-neutral-800"
          ></div>
        </div>
      </a>
    </div>
    <div v-else-if="!pending && error">
      <button
        aria-label="Refresh Anime List"
        class="dark:Hover-bg-neutral-900 dark:hover flex flex-row items-center justify-center space-x-2.5 rounded-md bg-neutral-200 p-2 px-6 text-neutral-600 transition duration-300 hover:bg-neutral-300 hover:text-black focus:outline-none dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        @click="refresh()"
      >
        <Icon
          name="ic:baseline-refresh"
          class="h-5 w-5 transition duration-300 hover:rotate-180"
        />
        <span>Refresh</span>
      </button>
    </div>
  </div>
</template>
