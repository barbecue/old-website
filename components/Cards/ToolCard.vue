<script setup lang="ts">
interface Data {
  title: string;
  description: string;
  icon: string;
  url: string;
}
const props = defineProps<{
  data: Data;
}>();
</script>
<template>
  <nuxt-link
    :to="props.data.url"
    class="flex max-h-36 cursor-pointer items-center rounded-md border border-gray-300 px-4 py-6 text-white duration-300 hover:bg-gray-200 dark:border-neutral-800 dark:hover:bg-neutral-900 md:py-0"
  >
    <div class="flex items-center justify-between gap-5">
      <Icon :name="props.data.icon" class="h-26 w-26"></Icon>
      <div class="flex flex-col space-y-1.5">
        <span class="text-lg text-black dark:text-white">
          {{ props.data.title }}
        </span>
        <p class="hidden text-[13px] leading-5 text-neutral-500">
          {{ props.data.description.slice(0, 120) }}...
        </p>
        <p class="text-[15px] leading-5 text-neutral-500">
          {{ props.data.description.slice(0, 50) }}...
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
