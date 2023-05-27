<script setup>
const runtimeConfig = useRuntimeConfig();
const { data, pending, error, refresh } = useFetch(
  () => `https://api.lanyard.rest/v1/users/${runtimeConfig.public.discord_id}`
);
if (error) {
  refresh();
}
</script>

<template>
  <div
    class="flex w-full flex-col items-center space-y-2 rounded-md border border-neutral-200 p-5 px-32 dark:border-neutral-900 md:w-auto"
  >
    <div
      v-if="!pending && !error"
      class="flex w-max items-end justify-end md:w-auto"
    >
      <nuxt-img
        v-if="data.data.discord_user.avatar"
        draggable="false"
        :src="`https://cdn.discordapp.com/avatars/${
          data.data.discord_user.id
        }/${data.data.discord_user.avatar}.${
          data.data.discord_user.avatar.startsWith('a_') ? 'gif' : 'webp'
        }?size=128`"
        :alt="`${data.data.discord_user.username}#${data.data.discord_user.discriminator}`"
        class="relative h-24 w-24 rounded-full"
      ></nuxt-img>
      <nuxt-img
        v-else
        draggable="false"
        src="https://cdn.discordapp.com/embed/avatars/5.png"
        :alt="`${data.data.discord_user.username}#${data.data.discord_user.discriminator}`"
        class="relative h-24 w-24 rounded-full"
      ></nuxt-img>
      <DiscordStatus :status="data.data.discord_status" />
    </div>
    <div v-else class="flex items-end justify-end">
      <div
        class="relative h-24 w-24 animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-800"
      ></div>
      <DiscordStatus :loading="true" :status="'offline'" />
    </div>
    <span
      v-if="!pending && !error"
      class="text-lg text-neutral-800 dark:text-neutral-200"
    >
      {{ data.data.discord_user.username }}#{{
        data.data.discord_user.discriminator
      }}
    </span>
    <div
      v-else
      class="h-6 w-24 animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800"
    ></div>
  </div>
</template>
