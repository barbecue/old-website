<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData("home", () =>
  queryContent(`/blog/${route.params.slug}`).findOne()
);
useHead({
  title: data.value.title,
});
</script>
<template>
  <div class="relative mx-auto max-w-7xl items-center px-12 md:px-24">
    <div class="flex flex-col items-center justify-center py-6">
      <div class="flex flex-col items-start gap-2 space-y-3">
        <BlogImage :data="data" />
        <BlogInfo :data="data" />
        <h1 class="text-2xl dark:text-white">{{ data.title }}</h1>
        <ContentRenderer :value="data" class="prose" />
        <div class="flex w-full flex-row justify-between">
          <div></div>
          <div>
            <NuxtLink
              to="/"
              aria-label="Refresh Song list"
              class="mt-1 flex flex-row items-center space-x-0.5 rounded-md bg-neutral-200/50 p-2 px-4 text-neutral-500 transition duration-300 hover:bg-neutral-200 hover:text-black dark:bg-neutral-800/50 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <Icon name="material-symbols:home" class="h-4 w-4" />
              <span>Homepage</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
