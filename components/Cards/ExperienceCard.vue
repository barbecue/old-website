<script setup lang="ts">
interface Data {
  title: string;
  url: string;
  description: string;
  external: boolean;
}
const props = defineProps<{
  data: Data;
}>();
</script>
<template>
  <nuxt-link
    :to="props.data.url"
    :target="`${props.data.external ? '_blank' : '_self'}`"
    class="flex h-28 transform cursor-pointer items-center rounded-md border border-gray-300 px-4 text-white duration-300 hover:border-neutral-500 hover:bg-gray-200 dark:border-neutral-800 dark:hover:border-neutral-500 dark:hover:bg-black"
  >
    <div class="flex flex-col space-y-1.5">
      <span class="text-lg text-black dark:text-white">
        {{ props.data.title }}
      </span>
      <p
        class="w-60 truncate text-[13px] leading-5 text-neutral-400 md:w-full md:overflow-visible md:text-clip md:whitespace-normal"
      >
        {{ props.data.description }}
      </p>
    </div>
  </nuxt-link>
</template>
