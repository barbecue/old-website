<script setup lang="ts">
import moment from "moment";
const route = useRoute();
const data = await queryContent(`/blog/${route.params.slug}`).findOne();
console.log(data);
useHead({
  title: data.title,
});
</script>
<template>
  <div class="flex flex-col items-center justify-center py-6">
    <div class="flex flex-col items-start gap-2">
      <nuxt-img
        loading="lazy"
        draggable="false"
        format="webp"
        :src="data.thumbnail"
        :alt="data.title"
        class="h-96 w-full rounded-md"
      />
      <div
        class="flex w-full flex-row justify-center gap-4 rounded-md border border-neutral-700 bg-neutral-900/60 py-3 transition duration-300 hover:bg-neutral-900"
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
            class="rounded-md bg-neutral-800 p-1 px-2 text-[10px]"
            >{{ tag }}</span
          >
        </div>
      </div>
      <h1 class="text-2xl text-white">{{ data.title }}</h1>
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
</template>
