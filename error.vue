<script setup>
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <button class="p-2" @click="handleError">are you lost?</button>
</template>
