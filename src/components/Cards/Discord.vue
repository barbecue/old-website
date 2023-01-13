<script setup>
const runtimeConfig = useRuntimeConfig()
const { data, pending, error, refresh } = await useFetch(() => `https://api.lanyard.rest/v1/users/${runtimeConfig.public.discord_id}`);
</script>
<template>
  <div class="bg-neutral-200 dark:bg-neutral-900 rounded-md p-5 px-32 flex flex-col items-center space-y-2">
    <div v-if="!pending && !error" class="flex justify-end items-end">
      <nuxt-img draggable="false" :src="`https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.${data.data.discord_user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`" :alt="`${data.data.discord_user.username}#${data.data.discord_user.discriminator}`" class="relative w-24 h-24 rounded-full"></nuxt-img>
      <Status :status="data.data.discord_status"/>
    </div>
    <div v-else class="flex justify-end items-end">
      <div class="relative bg-neutral-300 dark:bg-neutral-800 animate-pulse w-24 h-24 rounded-full"></div>
      <Status :loading="true" :status="'offline'"/>
    </div>
    <h1 v-if="!pending && !error" class="title text-neutral-800 dark:text-neutral-200 text-lg">{{ data.data.discord_user.username }}#{{ data.data.discord_user.discriminator }}</h1>
    <div v-else class="w-32 h-6 bg-neutral-300 animate-pulse rounded-md dark:bg-neutral-800"></div>
  </div>
</template>

<script>
export default {
  name: "Discord"
}
</script>