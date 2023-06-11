<template>
  <div
    v-motion-slide-visible-once-bottom
    class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-x-12 md:py-12 md:py-6"
  >
    <div class="flex flex-col space-y-2.5 md:py-12">
      <h1 class="text-2xl text-black dark:text-white md:text-3xl">Tuna</h1>
      <p class="text-neutral-500 md:text-lg">
        Hello! I am a student interested in web development and database
        management. I work with frameworks like Node.js and Vue.js. I enjoy
        creating user-friendly and functional web applications.
      </p>
    </div>
    <client-only>
      <LazyDiscordCard />
    </client-only>
  </div>
</template>
