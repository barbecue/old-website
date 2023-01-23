<template>
  <div class="relative max-w-7xl mx-auto items-center px-12 md:px-24">
    <div class="flex flex-col md:flex-row justify-between items-center md:space-x-12 py-6 md:py-12">
      <div class="py-12 flex flex-col space-y-2.5">
        <h1 class="text-2xl md:text-3xl text-black dark:text-white title">Full-Stack web developer.</h1>
        <p class="text-neutral-700 md:text-lg">Hi 👋, my name is Tuna, I am living in Turkey and I am a web developer. I
          building <span class="line-through">lovely</span> websites.</p>
      </div>
      <CardsDiscord/>
    </div>
    <div class="py-4">
      <h1 class="text-2xl text-neutral-600 title">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 mt-4">
        <CardsProject v-for="project in projects"
                 :key="project.title"
                 :data="project"
        />
      </div>
    </div>
    <div class="py-4">
      <h1 class="text-2xl text-neutral-600 title">Recently Listened Songs</h1>
      <LazyListsSongs/>
    </div>
    <div class="py-4">
      <h1 class="text-2xl text-neutral-600 title">Recently Watched Animes</h1>
      <LazyListsAnimes/>
    </div>
    <div class="py-4">
      <h1 class="text-2xl text-neutral-600 title">Technologies</h1>
      <div v-for="category in technologies"
           :key="category.title.toLowerCase()"
           class="flex flex-col space-y-3 mt-6 rounded-md">
        <h1 class="text-neutral-700">{{ category.title }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 mt-4">
          <CardsSkill
              v-for="item in category.items"
              :key="item.title"
              :data="item"
              :category="category.title.toLowerCase()"
          />
        </div>
      </div>
    </div>
    <div class="py-4">
      <h1 class="text-2xl text-neutral-600 title">Contact</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 mt-4">
        <CardsContact
            v-for="contact in contacts"
            :key="contact.title"
            :data="contact"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Codesty',
    url: 'https://codesty.org/',
    description: 'Community project engaged in creating competitive atmosphere for users and servers, chosen by its newest design & powerful structure.',
    external: true
  },
  {
    title: 'Atmosfer',
    url: 'https://discord.com/invite/atmosfer',
    description: 'A platform where you can get updates and news about Discord in advance.',
    external: true
  },
  {
    title: 'This Website',
    url: 'https://github.com/barbecue/website',
    description: 'Please don't forget to star!',
    external: true
  }
]

const contacts = [
  {
    title: 'Discord',
    url: 'https://discord.com/users/298888568279924746',
    external: true,
    image: 'discord.svg',
    backgroundColor: 'rgba(67,98,246,0.13)'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/b2rbecue',
    external: true,
    image: 'twitter.svg',
    backgroundColor: 'rgba(0,216,255,0.13)'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/b2rbecue',
    external: true,
    image: 'instagram.svg',
    backgroundColor: 'rgba(255,67,220,0.13)'
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/c/barbeku',
    external: true,
    image: 'youtube.svg',
    backgroundColor: 'rgba(255,67,67,0.13)'
  },
  {
    title: 'Twitch',
    url: 'https://twitch.tv/dkpf',
    external: true,
    image: 'twitch.svg',
    backgroundColor: 'rgba(116,0,255,0.13)'
  },
]

const technologies = [
  {
    title: 'Development',
    items: [
      {
        title: 'JavaScript',
        url: 'https://wikipedia.org/wiki/JavaScript',
        external: true,
        image: 'javascript.svg',
        backgroundColor: '#af953e21'
      },
      {
        title: 'Node.JS',
        url: 'https://nodejs.org/',
        external: true,
        image: 'nodejs.svg',
        backgroundColor: '#67af3e21'
      },
      {
        title: 'Nuxt.JS',
        url: 'https://nuxt.com/',
        external: true,
        image: 'nuxt.svg',
        backgroundColor: '#3eaf7d21'
      },
      {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        external: true,
        image: 'tailwind.svg',
        backgroundColor: '#3e77af21'
      },
      {
        title: 'HTML5',
        url: 'https://wikipedia.org/wiki/HTML5',
        external: true,
        image: 'html5.svg',
        backgroundColor: '#e1711221'
      },
      {
        title: 'Sass',
        url: 'https://sass-lang.com/',
        external: true,
        image: 'sass.svg',
        backgroundColor: '#8d14a821'
      },
    ]
  },
  {
    title: 'Services',
    items: [
      {
        title: 'GitHub',
        url: 'https://github.com/',
        external: true,
        image: 'github.svg',
        backgroundColor: 'rgba(62,77,175,0.13)'
      },
      {
        title: 'MongoDB',
        url: 'https://mongodb.com/',
        external: true,
        image: 'mongodb.svg',
        backgroundColor: 'rgba(58,255,0,0.13)'
      },
      {
        title: 'Firebase',
        url: 'https://firebase.google.com/',
        external: true,
        image: 'firebase.svg',
        backgroundColor: 'rgba(255,114,0,0.13)'
      }
    ]
  },
  {
    title: 'Applications',
    items: [
      {
        title: 'WebStorm',
        url: 'https://jetbrains.com/',
        external: true,
        image: 'webstorm.svg',
        backgroundColor: 'rgba(62,77,175,0.13)'
      },
      {
        title: 'Figma',
        url: 'https://figma.com/',
        external: true,
        image: 'figma.svg',
        backgroundColor: 'rgba(59,50,50,0.13)'
      },
      {
        title: 'Adobe Apps',
        url: 'https://adobe.com/',
        external: true,
        image: 'adobe.svg',
        backgroundColor: 'rgba(175,62,62,0.13)'
      }
    ]
  }
]
</script>

<script>

export default {
  name: "Index",
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>
