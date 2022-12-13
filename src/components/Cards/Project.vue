<script setup>
const props = defineProps({
  data: {
    url: String,
    external: Boolean,
    title: String,
    image: String,
    backgroundColor: String,
    required: true
  }
});
</script>
<template>
  <a
     :href="`${props.data.url}`"
     :target="`${props.data.external ? '_blank' : '_self' }`"
     class="flex p-4 border hover:bg-gray-200 dark:hover:bg-neutral-900 cursor-pointer duration-300 border-gray-300 dark:border-neutral-800 rounded-md text-white"
  >
    <div class="flex flex-col space-y-1.5">
      <h1 class="text-lg dark:text-white text-black title">{{ props.data.title }}</h1>
      <p class="text-[13px] w-60 md:w-11/12 md:text-clip md:overflow-visible md:whitespace-normal truncate text-neutral-600">
        {{ props.data.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "Project"
}
</script>
