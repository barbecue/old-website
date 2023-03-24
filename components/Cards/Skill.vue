<script setup>
const props = defineProps({
  data: {
    url: String,
    external: Boolean,
    title: String,
    icon: String,
    backgroundColor: String,
    class: Array,
    required: true,
  },
  category: String,
});
</script>

<template>
  <a
    :href="`${props.data.url}`"
    :target="`${props.data.external ? '_blank' : '_self'}`"
    class="flex flex-row items-center space-x-2.5 justify-start p-2 focus:outline-none border hover:bg-gray-200 dark:hover:bg-neutral-900 cursor-pointer duration-300 border-gray-300 dark:border-neutral-800 rounded-md text-white"
  >
    <div
      v-if="props.data.icon"
      :style="{ 'background-color': props.data.backgroundColor }"
      class="bg-opacity-50 p-2 rounded-md"
    >
      <Icon
        :alt="props.data.title"
        :name="props.data.icon"
        class="w-7 h-7"
      ></Icon>
    </div>
    <div>
      <h1 class="text-lg dark:text-white text-black">{{ props.data.title }}</h1>
    </div>
  </a>
</template>

<script>
export default {
  name: "Skill",
};
</script>

<style scoped></style>
