<script setup>
const { data, pending, error, refresh } = useFetch(() => `/api/spotify`);
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
        v-for="song in data.data"
        :key="song.name"
        :to="song.external_urls.spotify"
        target="_blank"
        class="flex cursor-pointer flex-col justify-center space-y-2.5 text-center focus:outline-none"
      >
        <nuxt-img
          draggable="false"
          width="144"
          height="144"
          :alt="song.name"
          quality="50"
          format="webp"
          class="h-36 w-36 transform select-none rounded-md transition duration-300"
          :src="`${song.image}`"
        ></nuxt-img>
        <div class="flex w-36 flex-col break-all">
          <h1
            class="title truncate text-center text-neutral-700 dark:text-neutral-400 md:text-left"
          >
            {{ song.name }}
          </h1>
          <div class="flex flex-col space-y-0.5">
            <h1
              class="title w-36 truncate break-keep text-center text-sm text-neutral-400 dark:text-neutral-200 md:text-left"
            >
              {{ song.artists[0].name }}
            </h1>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div
      v-if="pending && !error"
      class="mt-4 grid grid-cols-2 place-items-center gap-4 md:grid-cols-6 md:place-items-start md:gap-1.5"
    >
      <div
        v-for="index in 6"
        :key="index"
        class="flex animate-pulse cursor-pointer flex-col justify-center space-y-2.5 text-center focus:outline-none"
        target="_blank"
      >
        <div
          draggable="false"
          class="h-[144px] w-[144px] transform select-none rounded-md bg-neutral-800 transition duration-300"
        ></div>
        <div class="flex w-36 flex-col break-all">
          <div
            class="h-6 w-full truncate rounded-md bg-neutral-400 text-center dark:bg-neutral-800 md:text-left"
          ></div>
        </div>
      </div>
    </div>
    <button
      v-if="error"
      aria-label="Refresh Song list"
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
</template>
