<script setup lang="ts">
interface Data {
  url: string;
  external: boolean;
  title: string;
  icon: string;
  backgroundColor: string;
}
const props = defineProps<{
  data: Data;
}>();
</script>

<template>
  <nuxt-link
    :to="props.data.url"
    :target="`${props.data.external ? '_blank' : '_self'}`"
    class="flex cursor-pointer rounded-md border border-gray-300 p-2 text-white duration-300 hover:bg-gray-200 focus:outline-none dark:border-neutral-800 dark:hover:bg-neutral-900"
  >
    <div class="flex flex-row items-center space-x-3">
      <div
        v-if="props.data.icon"
        :style="{ 'background-color': props.data.backgroundColor }"
        class="rounded-md bg-opacity-50 p-2"
      >
        <Icon
          :alt="props.data.title"
          :name="props.data.icon"
          class="h-7 w-7"
        ></Icon>
      </div>
      <span class="text-lg text-black dark:text-white">{{
        props.data.title
      }}</span>
    </div>
  </nuxt-link>
</template>
