<script setup lang="ts">
const cookie = useCookie("support", {
  default: () => true,
  watch: true,
});

function disable() {
  cookie.value = false;
}
function visible() {
  return cookie.value;
}
</script>

<template>
  <div
    v-motion-slide-bottom
    :class="[visible() ? 'flex' : 'hidden']"
    class="fixed bottom-0 right-0 z-10 p-4"
  >
    <div
      class="flex flex-col items-start gap-2 rounded-md border border-neutral-500/20 bg-neutral-200/80 p-4 shadow-xl dark:bg-neutral-800/90 md:bg-neutral-200/90 dark:md:bg-neutral-800/70"
    >
      <div class="flex flex-row items-center justify-between gap-4">
        <span
          class="bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-lg font-semibold text-transparent"
        >
          Support this website on github!</span
        >
        <button
          class="items-center text-black focus:outline-none dark:text-white"
          aria-label="close"
          @click="disable"
        >
          <Icon name="ri:close-fill" class="h-5 w-5" />
        </button>
      </div>
      <nuxt-link
        to="https://github.com/barbecue/website"
        target="_blank"
        class="flex items-center gap-1.5 rounded-md border border-zinc-400/40 bg-neutral-300/40 p-2 px-4 backdrop-blur-3xl transition duration-300 hover:bg-neutral-300 focus:outline-none dark:border-zinc-700/50 dark:bg-neutral-800/90 dark:text-white dark:hover:bg-neutral-700/50"
      >
        <Icon name="ri:github-fill" />
        <span>View On Github</span>
      </nuxt-link>
    </div>
  </div>
</template>
