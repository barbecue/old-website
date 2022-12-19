<template>
  <div class="relative max-w-7xl mx-auto flex items-center justify-between px-12 md:px-24 py-7">
    <div class="flex flex-row items-center justify-center space-x-5">
      <h1 class="text-black dark:text-white text-4xl title">tuna.one</h1>
    </div>
    <div class="flex flex-row space-x-3.5">
      <button aria-label="theme-switch" class="rounded-full focus:outline-none p-2 dark:px-2 px-2.5 flex justify-center items-center transition-colors bg-neutral-300 dark:bg-neutral-900 rounded-md" @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'">
        <client-only>
          <font-awesome-icon class="text-neutral-500 text-lg hover:text-black dark:hover:text-white duration-300" :icon="['fas', $colorMode.preference === 'dark' ? 'sun' : 'moon']"/>
        </client-only>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar.vue"
}
</script>