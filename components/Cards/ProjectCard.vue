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
    class="flex cursor-pointer rounded-md border border-gray-300 p-4 text-white duration-300 hover:bg-gray-200 focus:outline-none dark:border-neutral-800 dark:hover:bg-neutral-900"
  >
    <div class="flex flex-col space-y-1.5">
      <span class="title text-lg text-black dark:text-white">
        {{ props.data.title }}
      </span>
      <p
        class="w-60 truncate text-[13px] text-neutral-600 md:w-11/12 md:overflow-visible md:text-clip md:whitespace-normal"
      >
        {{ props.data.description }}
      </p>
    </div>
  </nuxt-link>
</template>
