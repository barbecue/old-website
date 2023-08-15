<script setup lang="ts">
useHead({
  title: "Home",
});

const experiences = [
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
    title: "Email",
    url: "mailto:contact@tuna.one",
    external: true,
    icon: "ic:round-email",
    backgroundColor: "rgba(56,40,40,0.13)",
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
        title: "ExpressJS",
        url: "https://expressjs.com/",
        external: true,
        icon: "simple-icons:express",
        backgroundColor: "rgba(0,0,0,0.13)",
      },
      {
        title: "Nest.JS",
        url: "https://nestjs.com/",
        external: true,
        icon: "logos:nestjs",
        backgroundColor: "rgba(255,0,0,0.13)",
      },
      {
        title: "VueJS",
        url: "https://vuejs.org/",
        external: true,
        icon: "logos:vue",
        backgroundColor: "#49AF3E21",
      },
      {
        title: "Nuxt",
        url: "https://nuxt.com/",
        external: true,
        icon: "logos:nuxt-icon",
        backgroundColor: "#3eaf7d21",
      },
      {
        title: "React.JS",
        url: "https://react.dev/",
        external: true,
        icon: "logos:react",
        backgroundColor: "#3E66AF21",
      },
      {
        title: "Next.JS",
        url: "https://nextjs.org/",
        external: true,
        icon: "logos:nextjs-icon",
        backgroundColor: "rgba(255,235,235,0.13)",
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
        title: "CSS3",
        url: "https://en.wikipedia.org/wiki/CSS#CSS_3",
        external: true,
        icon: "logos:css-3",
        backgroundColor: "rgba(77,94,255,0.13)",
      },
      {
        title: "MySQL",
        url: "https://www.mysql.com/",
        external: true,
        icon: "logos:mysql",
        backgroundColor: "rgba(161,169,255,0.13)",
      },
      {
        title: "PostgreSQL",
        url: "https://www.postgresql.org/",
        external: true,
        icon: "logos:postgresql",
        backgroundColor: "rgba(11,255,255,0.13)",
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
      {
        title: "Supabase",
        url: "https://supabase.com/",
        external: true,
        icon: "logos:supabase-icon",
        backgroundColor: "rgba(17,255,0,0.13)",
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
    <Landing />
    <Experiences :experiences="experiences" />
    <Articles />
    <Songs />
    <Animes />
    <Technologies :technologies="technologies" />
    <Contact :contacts="contacts" />
  </div>
</template>
