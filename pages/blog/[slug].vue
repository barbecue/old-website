<script setup lang="ts">
import moment from "moment";
const route = useRoute();
const { data } = await useAsyncData("home", () =>
  queryContent(`/blog/${route.params.slug}`).findOne()
);
useHead({
  title: data.value.title,
});
</script>
<template>
  <div class="relative mx-auto max-w-7xl items-center px-12 md:px-24">
    <div class="flex flex-col items-center justify-center py-6">
      <div class="flex flex-col items-start gap-2 space-y-3">
        <nuxt-img
          loading="lazy"
          draggable="false"
          format="webp"
          :src="`/assets/images/blog/${data.image}`"
          :alt="data.title"
          class="h-62 w-full rounded-md md:h-96"
        />
        <div
          class="flex w-full flex-col justify-center gap-4 rounded-md border border-neutral-300 p-2 py-3 transition duration-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 md:flex-row"
        >
          <div
            class="flex flex-row items-center gap-0.5 text-sm text-neutral-400"
          >
            <Icon name="material-symbols:calendar-month" class="h-4 w-4" />
            <span>{{ moment(data.createdAt).format("L") }}</span>
          </div>
          <div
            class="flex flex-row items-center gap-0.5 text-sm text-neutral-400"
          >
            <Icon
              name="material-symbols:nest-clock-farsight-analog"
              class="h-4 w-4"
            />
            <span>{{ data.readingTime.text }}</span>
          </div>
          <div
            class="flex flex-row items-center gap-0.5 text-sm text-neutral-400"
          >
            <Icon name="ri:hashtag" class="h-4 w-4" />
            <span
              v-for="tag in data.tags"
              :key="tag"
              class="w-16 truncate rounded-md bg-neutral-300 p-1 px-2 text-[10px] text-black dark:bg-neutral-800 dark:text-white md:w-32"
              >{{ tag }}</span
            >
          </div>
        </div>
        <h1 class="text-2xl dark:text-white">{{ data.title }}</h1>
        <ContentRenderer :value="data" class="prose" />
        <div class="flex w-full flex-row justify-between">
          <div></div>
          <div>
            <NuxtLink
              to="/"
              aria-label="Refresh Song list"
              class="mt-1 flex flex-row items-center space-x-0.5 rounded-md bg-neutral-200/50 p-2 px-4 text-neutral-500 transition duration-300 hover:bg-neutral-200 hover:text-black dark:bg-neutral-800/50 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <Icon name="material-symbols:home" class="h-4 w-4" />
              <span>Homepage</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
