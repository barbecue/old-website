<script setup>
const { data, pending, error, refresh } = useLazyFetch(() => `/api/mal`);
if (error) {
  refresh();
}
</script>
<template>
  <div>
    <div
      v-if="!pending && !error"
      class="mt-4 grid grid-cols-2 place-items-center gap-9 md:grid-cols-6 md:place-items-start md:gap-1.5"
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
          loading="lazy"
          :alt="anime.animeTitle"
          class="h-52 w-36 transform select-none rounded-md transition duration-300"
          :src="`${anime.animeImagePath}`"
        ></nuxt-img>
        <div class="flex w-36 flex-col break-all">
          <span
            class="truncate text-center text-black dark:text-neutral-300 md:text-left"
          >
            {{ anime.animeTitle }}
          </span>
          <div class="flex flex-col space-y-0.5">
            <span
              class="break-keep text-center text-sm text-neutral-500 dark:text-neutral-400 md:text-left"
            >
              {{ anime.score || "?" }}/10 Score
            </span>
            <span
              class="break-keep text-center text-sm text-neutral-500 dark:text-neutral-400 md:text-left"
            >
              {{ anime.numWatchedEpisodes }}/{{
                anime.animeNumEpisodes === 0 ? "?" : anime.animeNumEpisodes
              }}
              Watched
            </span>
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
        v-if="error"
        aria-label="Refresh Song list"
        class="mt-1 flex flex-row items-center space-x-2.5 rounded-md bg-neutral-200/50 p-2 px-4 text-neutral-500 transition duration-300 hover:bg-neutral-200 hover:text-black dark:bg-neutral-800/50 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
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
