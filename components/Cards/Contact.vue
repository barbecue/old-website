<script setup lang="ts">
const props = defineProps({
  data: {
    url: String,
    external: Boolean,
    title: String,
    icon: String,
    backgroundColor: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="`${data.url}`"
    :target="`${data.external ? '_blank' : '_self'}`"
    class="flex p-2 border hover:bg-gray-200 focus:outline-none dark:hover:bg-neutral-900 cursor-pointer duration-300 border-gray-300 dark:border-neutral-800 rounded-md text-white"
  >
    <div class="flex flex-row items-center space-x-3">
      <div
        v-if="data.icon"
        :style="{ 'background-color': data.backgroundColor }"
        class="bg-opacity-50 p-2 rounded-md"
      >
        <Icon :alt="data.title" :name="data.icon" class="w-7 h-7"></Icon>
      </div>
      <h1 class="text-lg dark:text-white text-black">{{ props.data.title }}</h1>
    </div>
  </a>
</template>
