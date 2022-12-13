<script setup>
const props = defineProps({
  error: Object
})
</script>
<template>
  <button @click="handleError" class="p-2">are you lost?</button>
</template>
<script>
const handleError = () => clearError({ redirect: '/' })
</script>
