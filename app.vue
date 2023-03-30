<template>
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <div :key="$route.fullPath">
        <NuxtPage class="mb-20" />
      </div>
    </Transition>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(7.5px);
}
</style>
