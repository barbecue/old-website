<script setup lang="ts">
import moment from "moment";

const props = defineProps({
  data: { type: Object, required: true },
});
</script>
<template>
  <div
    class="flex w-full flex-col justify-center gap-4 rounded-md border border-neutral-300 p-2 py-3 transition duration-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-black md:flex-row"
  >
    <div class="flex flex-row items-center gap-0.5 text-sm text-neutral-400">
      <Icon name="material-symbols:calendar-month" class="h-4 w-4" />
      <span>{{ moment(data.createdAt).format("L") }}</span>
    </div>
    <div class="flex flex-row items-center gap-0.5 text-sm text-neutral-400">
      <Icon
        name="material-symbols:nest-clock-farsight-analog"
        class="h-4 w-4"
      />
      <span>{{ data.readingTime.text }}</span>
    </div>
    <div class="flex flex-row items-center gap-0.5 text-sm text-neutral-400">
      <Icon name="ri:hashtag" class="h-4 w-4" />
      <span
        v-for="tag in data.tags"
        :key="tag"
        class="w-16 truncate rounded-md bg-neutral-300 p-1 px-2 text-[10px] text-black dark:bg-neutral-900/20 dark:text-white md:w-32"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>
