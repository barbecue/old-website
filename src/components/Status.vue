<script setup>
const props = defineProps({
  status: String
});

const Status = {
  'dnd': 'Do Not Disturb',
  'offline': 'Offline',
  'idle': 'Idle',
  'online': 'Online'
}
const colors = {
  'offline': 'bg-gray-500 border-gray-400',
  'dnd': 'bg-red-400 border-red-300',
  'idle': 'bg-yellow-500 border-yellow-200',
  'online': 'bg-green-400 border-green-200',
}
</script>
<template>
    <div v-tooltip="Status[props.status]" :class="[colors[props.status]]" class="w-4 mr-3 ring-4 ring-neutral-200 dark:ring-neutral-900 h-4 absolute border rounded-full"></div>
</template>

<script>
export default {
  name: "Status"
}
</script>