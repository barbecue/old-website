<script setup lang="ts">
const data = (await queryContent("/blog").find())
  .sort((post1, post2) => post2.createdAt - post1.createdAt)
  .slice(0, 3);
</script>
<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <nuxt-link
      v-for="post in data"
      :key="post.title"
      :to="post._path"
      class="mt-2 flex cursor-pointer rounded-md border border-gray-300 p-4 text-white duration-300 hover:bg-gray-200 dark:border-neutral-800 dark:hover:bg-neutral-900"
    >
      <div
        class="flex flex-col items-center justify-center space-y-1.5 text-center md:items-start md:justify-start md:text-left"
      >
        <nuxt-img
          loading="lazy"
          draggable="false"
          format="webp"
          :src="post.thumbnail"
          :alt="post.title"
          class="h-48 w-full rounded-md"
        />
        <span
          class="text-center text-black dark:text-white md:text-left md:text-lg"
        >
          {{ post.title }}
        </span>
        <p
          class="w-64 truncate text-center text-[13px] leading-5 text-neutral-600 md:w-full md:overflow-visible md:text-clip md:whitespace-normal md:text-left"
        >
          {{ post.description }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>
