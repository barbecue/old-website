<template>
  <div
    v-motion-slide-visible-once-bottom
    class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-x-12 md:py-12 md:py-6"
  >
    <div class="flex flex-col space-y-2.5 md:py-12">
      <h1 class="text-2xl text-black dark:text-white md:text-3xl">
        Full-Stack web developer.
      </h1>
      <p class="text-neutral-700 md:text-lg">
        Hello. My name is Tuna and I'm 17 years old. I'm interested in web
        development.
      </p>
    </div>
    <client-only>
      <LazyDiscordCard />
    </client-only>
  </div>
</template>
