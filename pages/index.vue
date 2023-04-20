<script setup lang="ts">
useHead({
  title: "Home",
});

const projects = [
  {
    title: "OdinBoost",
    url: "https://odinboost.com/",
    description:
      "Premium boosting solutions for League of Legends, VALORANT, Wild Rift & TFT. Chat with the booster, fair prices, and fast delivery.",
    external: true,
  },
  {
    title: "n3tz",
    url: "https://n3tz.io/",
    description:
      "At n3tz, you can find all the latest web3 options under one roof. Our company is committed to offering clients and companies the newest digital innovations and technologies.",
    external: true,
  },
  {
    title: "Codesty",
    url: "https://codesty.org/",
    description:
      "Community project engaged in creating competitive atmosphere for users and servers, chosen by its newest design & powerful structure.",
    external: true,
  },
  {
    title: "Atmosfer",
    url: "https://discord.com/invite/atmosfer",
    description:
      "A platform where you can get updates and news about Discord in advance.",
    external: true,
  },
  {
    title: "This Website",
    url: "https://github.com/barbecue/website",
    description: "Please don't forget to star!",
    external: true,
  },
];

const contacts = [
  {
    title: "Discord",
    url: "https://discord.com/users/298888568279924746",
    external: true,
    icon: "logos:discord-icon",
    backgroundColor: "rgba(67,98,246,0.13)",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/b2rbecue",
    external: true,
    icon: "logos:twitter",
    backgroundColor: "rgba(0,216,255,0.13)",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/b2rbecue",
    external: true,
    icon: "skill-icons:instagram",
    backgroundColor: "rgba(255,67,220,0.13)",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/c/barbeku",
    external: true,
    icon: "logos:youtube-icon",
    backgroundColor: "rgba(255,67,67,0.13)",
  },
  {
    title: "Twitch",
    url: "https://twitch.tv/dkpf",
    external: true,
    icon: "logos:twitch",
    backgroundColor: "rgba(116,0,255,0.13)",
  },
];

const technologies = [
  {
    title: "Development",
    items: [
      {
        title: "JavaScript",
        url: "https://wikipedia.org/wiki/JavaScript",
        external: true,
        icon: "logos:javascript",
        backgroundColor: "#af953e21",
      },
      {
        title: "Node.JS",
        url: "https://nodejs.org/",
        external: true,
        icon: "logos:nodejs-icon",
        backgroundColor: "#67af3e21",
      },
      {
        title: "Nuxt.JS",
        url: "https://nuxt.com/",
        external: true,
        icon: "logos:nuxt-icon",
        backgroundColor: "#3eaf7d21",
      },
      {
        title: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        external: true,
        icon: "logos:tailwindcss-icon",
        backgroundColor: "#3e77af21",
      },
      {
        title: "HTML5",
        url: "https://wikipedia.org/wiki/HTML5",
        external: true,
        icon: "logos:html-5",
        backgroundColor: "#e1711221",
      },
      {
        title: "Sass",
        url: "https://sass-lang.com/",
        external: true,
        icon: "logos:sass",
        backgroundColor: "#8d14a821",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "GitHub",
        url: "https://github.com/",
        external: true,
        icon: "skill-icons:github-light",
        backgroundColor: "rgba(255,255,255,0.13)",
      },
      {
        title: "MongoDB",
        url: "https://mongodb.com/",
        external: true,
        icon: "logos:mongodb-icon",
        backgroundColor: "rgba(58,255,0,0.13)",
      },
      {
        title: "Firebase",
        url: "https://firebase.google.com/",
        external: true,
        icon: "logos:firebase",
        backgroundColor: "rgba(255,114,0,0.13)",
      },
    ],
  },
  {
    title: "Applications",
    items: [
      {
        title: "WebStorm",
        url: "https://jetbrains.com/",
        external: true,
        icon: "logos:webstorm",
        backgroundColor: "rgba(62,77,175,0.13)",
      },
      {
        title: "Figma",
        url: "https://figma.com/",
        external: true,
        icon: "logos:figma",
        backgroundColor: "rgba(59,50,50,0.13)",
      },
      {
        title: "Adobe Apps",
        url: "https://adobe.com/",
        external: true,
        icon: "bx:bxl-adobe",
        backgroundColor: "rgba(175,62,62,0.13)",
      },
    ],
  },
];
</script>

<template>
  <div class="relative mx-auto max-w-7xl items-center px-12 md:px-24">
    <div
      class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-x-12 md:py-12 md:py-6"
    >
      <div class="flex flex-col space-y-2.5 md:py-12">
        <span class="text-2xl text-black dark:text-white md:text-3xl">
          Full-Stack web developer.
        </span>
        <p class="text-neutral-700 md:text-lg">
          Hello. My name is Tuna and I'm 17 years old. I'm interested in web
          development.
        </p>
      </div>
      <DiscordCard />
    </div>
    <div class="py-4">
      <span class="text-2xl text-neutral-600">Projects I am working on</span>
      <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :data="project"
        />
      </div>
    </div>
    <div v-motion-slide-visible-bottom class="py-4">
      <span class="text-2xl text-neutral-600">Recently Posted Articles</span>
      <BlogList />
    </div>
    <div v-motion-slide-visible-bottom class="py-4">
      <span class="text-2xl text-neutral-600">Recently Listened Songs</span>
      <SongList />
    </div>
    <div v-motion-slide-visible-bottom class="py-4">
      <span class="text-2xl text-neutral-600">Recently Watched Animes</span>
      <AnimeList />
    </div>
    <div v-motion-slide-visible-bottom class="py-4">
      <span class="text-2xl text-neutral-600">Technologies</span>
      <div
        v-for="category in technologies"
        :key="category.title.toLowerCase()"
        class="mt-6 flex flex-col space-y-3 rounded-md"
      >
        <span class="text-neutral-700">{{ category.title }}</span>
        <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4">
          <SkillCard
            v-for="item in category.items"
            :key="item.title"
            :data="item"
            :category="category.title.toLowerCase()"
          />
        </div>
      </div>
    </div>
    <div v-motion-slide-visible-bottom class="py-4">
      <span class="text-2xl text-neutral-600">Contact</span>
      <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4">
        <ContactCard
          v-for="contact in contacts"
          :key="contact.title"
          :data="contact"
        />
      </div>
    </div>
  </div>
</template>
