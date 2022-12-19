<script setup>
const { data, pending, error, refresh } = await useFetch(() => `https://api.lanyard.rest/v1/users/298888568279924746`);
</script>
<template>
  <div class="bg-neutral-200 dark:bg-neutral-900 rounded-md p-5 px-32 flex flex-col items-center space-y-2">
    <div v-if="!pending" class="flex justify-end items-end">
      <nuxt-img draggable="false" :src="`https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.${data.data.discord_user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`" :alt="`${data.data.discord_user.username}#${data.data.discord_user.discriminator}`" class="relative w-24 h-24 rounded-full"></nuxt-img>
      <Status :status="data.data.discord_status"/>
    </div>
    <div v-else class="flex animate-pulse justify-end items-end">
      <div class="relative dark:bg-neutral-800 w-24 h-24 rounded-full"></div>
      <Status :status="'offline'"/>
    </div>
    <h1 v-if="!pending" class="title text-neutral-800 dark:text-neutral-200 text-lg">{{ data.data.discord_user.username }}#{{ data.data.discord_user.discriminator }}</h1>
    <div v-else class="title w-42 rounded-md bg-neutral-200 text-lg"></div>
  </div>
</template>

<script>
export default {
  name: "Discord"
}
</script>