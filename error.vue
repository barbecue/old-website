<script setup>
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <button class="p-2 text-black dark:text-white" @click="handleError">
    are you lost?
  </button>
</template>
