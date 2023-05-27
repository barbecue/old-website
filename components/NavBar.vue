<script setup lang="ts">
const menu = ref(false);
const items = [
  {
    title: "Home",
    icon: "solar:home-2-bold-duotone",
    to: "/",
  },
  {
    title: "Tools",
    icon: "solar:sledgehammer-bold-duotone",
    to: "/tools",
  },
  {
    title: "Blog",
    icon: "solar:document-bold",
    to: "/blog",
  },
];
const scrollPosition = ref();

function updateScroll() {
  scrollPosition.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>
<template>
  <div
    class="navbar sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-md px-12 py-4 transition-all duration-300 md:px-24"
  >
    <div class="flex flex-row items-center justify-center space-x-5">
      <NuxtLink to="/" class="text-4xl text-black dark:text-white"
        ><nuxt-img
          src="/assets/images/logo.svg"
          class="duration h-14 w-14 transform transition hover:scale-110"
      /></NuxtLink>
    </div>
    <div class="hidden flex-row items-center space-x-3.5 md:flex">
      <BLink
        v-for="item in items"
        :key="item.title.toLowerCase()"
        :to="item.to"
        class="flex flex-row items-center justify-center space-x-1 rounded-md bg-neutral-300 px-4 py-1 text-neutral-500 transition duration-300 hover:text-black focus:outline-none dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white"
        ><Icon :name="item.icon"></Icon> <span>{{ item.title }}</span></BLink
      >
      <button
        aria-label="theme-switch"
        class="flex flex-row items-center justify-center space-x-1 rounded-md bg-neutral-300 px-4 py-1 text-neutral-500 transition duration-300 hover:text-black focus:outline-none dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white"
        @click="
          $colorMode.preference === 'light'
            ? ($colorMode.preference = 'dark')
            : ($colorMode.preference = 'light')
        "
      >
        <Icon
          class="text-lg text-neutral-500 duration-300 hover:text-neutral-800 dark:hover:text-white"
          :name="
            $colorMode.preference === 'dark'
              ? 'solar:sun-fog-bold-duotone'
              : 'solar:moon-fog-bold-duotone'
          "
        />
        <span>{{ $colorMode.preference === "dark" ? "Light" : "Dark" }}</span>
      </button>
    </div>
    <button aria-label="menu-icon" class="flex md:hidden" @click="menu = !menu">
      <Icon
        class="h-6 w-6 text-lg text-neutral-500 transition duration-300 duration-300 hover:text-neutral-800 dark:hover:text-white"
        :name="
          menu ? 'radix-icons:cross-1' : 'heroicons:bars-3-bottom-right-solid'
        "
      />
    </button>
  </div>
  <div class="mx-auto max-w-7xl items-center px-12 pb-4 md:px-24">
    <div v-if="menu" class="flex flex-col gap-2 md:hidden">
      <BLink
        v-for="item in items"
        :key="item.title.toLowerCase()"
        :to="item.to"
        class="flex flex-row items-center justify-center space-x-1 rounded-md bg-neutral-300 px-2.5 py-1 text-neutral-500 transition duration-300 hover:text-black focus:outline-none dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white"
        ><Icon :name="item.icon"></Icon> <span>{{ item.title }}</span></BLink
      >
      <button
        aria-label="theme-switch"
        class="flex flex-row items-center justify-center space-x-1 rounded-md bg-neutral-300 px-2.5 py-1 text-neutral-500 transition duration-300 hover:text-black focus:outline-none dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white"
        @click="
          $colorMode.preference === 'light'
            ? ($colorMode.preference = 'dark')
            : ($colorMode.preference = 'light')
        "
      >
        <Icon
          class="text-lg text-neutral-500 duration-300 hover:text-neutral-800 dark:hover:text-white"
          :name="
            $colorMode.preference === 'dark'
              ? 'solar:sun-fog-bold-duotone'
              : 'solar:moon-fog-bold-duotone'
          "
        />
        <span>{{ $colorMode.preference === "dark" ? "Light" : "Dark" }}</span>
      </button>
    </div>
  </div>
</template>
