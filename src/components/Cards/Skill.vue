<script setup>
const props = defineProps({
  data: {
    url: String,
    external: Boolean,
    title: String,
    image: String,
    backgroundColor: String,
    required: true
  },
  category: String
});
</script>

<template>
  <a
      :href="`${props.data.url}`"
      :target="`${props.data.external ? '_blank' : '_self' }`"
      class="flex flex-row items-center space-x-2.5 justify-start p-2 focus:outline-none border hover:bg-gray-200 dark:hover:bg-neutral-900 cursor-pointer duration-300 border-gray-300 dark:border-neutral-800 rounded-md text-white">
      <div v-if="props.data.image" :style="{ 'background-color' : props.data.backgroundColor }"
           class="bg-opacity-50 p-2 rounded-md">
        <nuxt-img :alt="props.data.title" :src="`/assets/images/technologies/${props.category.toLowerCase()}/${props.data.image}`"
                  class="w-7 h-7"></nuxt-img>
      </div>
      <div>
        <h1 class="text-lg dark:text-white text-black">{{ props.data.title }}</h1>
      </div>
  </a>
</template>

<script>
export default {
  name: "Skill"
}
</script>

<style scoped>

</style>