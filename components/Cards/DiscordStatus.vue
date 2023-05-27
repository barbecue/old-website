<script setup lang="ts">
const props = defineProps<{
  status: String;
  loading?: Boolean;
}>();

const Status = {
  dnd: "Do Not Disturb",
  offline: "Offline",
  idle: "Idle",
  online: "Online",
};
const colors = {
  offline: "bg-gray-500 border-gray-400",
  dnd: "bg-red-400 border-red-300",
  idle: "bg-yellow-500 border-yellow-200",
  online: "bg-green-400 border-green-200",
};
</script>

<template>
  <div
    v-tooltip="Status[props.status]"
    :class="[colors[props.status], loading ? 'animate-pulse' : '']"
    class="absolute mr-3 h-4 w-4 rounded-full border ring-4 ring-[#f9f9f9] dark:ring-black"
  ></div>
</template>
