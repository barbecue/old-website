<template>
  <div
    class="relative mx-auto flex max-w-7xl items-center justify-between px-12 py-7 md:px-24"
  >
    <div class="flex flex-row items-center justify-center space-x-5">
      <h1 class="title text-4xl text-black dark:text-white">tuna.one</h1>
    </div>
    <div class="flex flex-row space-x-3.5">
      <button
        aria-label="theme-switch"
        class="flex items-center justify-center rounded-md bg-neutral-300 p-2 px-2.5 transition-colors focus:outline-none dark:bg-neutral-900"
        @click="
          $colorMode.preference === 'light'
            ? ($colorMode.preference = 'dark')
            : ($colorMode.preference = 'light')
        "
      >
        <Icon
          class="text-lg text-neutral-500 duration-300 hover:text-black dark:hover:text-white"
          :name="
            $colorMode.preference === 'dark'
              ? 'material-symbols:light-mode'
              : 'material-symbols:dark-mode'
          "
        />
      </button>
    </div>
  </div>
</template>
