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
    :class="[visible() ? 'flex' : 'hidden']"
    class="fixed right-0 bottom-0 z-10 p-4"
  >
    <div
      class="flex flex-col items-start gap-2 rounded-md border border-neutral-500/20 bg-neutral-800/90 p-4 shadow-xl md:bg-neutral-800/70"
    >
      <div class="flex flex-row items-center justify-between gap-4">
        <span
          class="bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-lg font-semibold text-transparent"
        >
          Support this website on github!</span
        >
        <button
          class="items-center text-white focus:outline-none"
          @click="disable"
        >
          <Icon name="ri:close-fill" class="h-5 w-5" />
        </button>
      </div>
      <nuxt-link
        to="https://github.com/barbecue/website"
        target="_blank"
        class="flex items-center gap-1.5 rounded-md border border-zinc-700/50 bg-neutral-800/90 p-2 px-4 text-white backdrop-blur-3xl transition duration-300 hover:bg-neutral-700/50 focus:outline-none"
      >
        <Icon name="ri:github-fill" />
        <span>View On Github</span>
      </nuxt-link>
    </div>
  </div>
</template>
