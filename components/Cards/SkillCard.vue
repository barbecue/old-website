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
  category: { type: String; required: true };
}>();
</script>

<template>
  <nuxt-link
    :to="props.data.url"
    :target="`${props.data.external ? '_blank' : '_self'}`"
    class="flex cursor-pointer flex-row items-center justify-start space-x-2.5 rounded-md border border-gray-300 p-2 text-white duration-300 hover:bg-gray-200 focus:outline-none dark:border-neutral-800 dark:hover:bg-neutral-900"
  >
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
    <div>
      <span class="text-lg text-black dark:text-white">{{
        props.data.title
      }}</span>
    </div>
  </nuxt-link>
</template>
