import dotenv from "dotenv";
import dynamicRoutes from "./helpers/dynamicRoutes";
dotenv.config();
const dev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  ssr: !dev,
  components: [
    "~/components",
    "~/components/Cards",
    "~/components/Lists",
    "~/components/Sections",
  ],
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  css: ["~/stylesheets/main.css"],
  modules: [
    ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
    "@nuxt/image-edge",
    "@nuxt/content",
    "@nuxtjs/critters",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "nuxt-vercel-analytics",
    "nuxt-windicss",
    "nuxt-icon",
  ],
  plugins: ["~/plugins/tooltip"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - tuna.one",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/images/meta/apple-touch-icon.png?v=2",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/images/meta/favicon-32x32.png?v=2",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/images/meta/favicon-16x16.png?v=2",
        },
        {
          rel: "manifest",
          href: "/assets/images/meta/site.webmanifest?v=2",
        },
        {
          rel: "mask-icon",
          color: "#171717",
          href: "/assets/images/meta/safari-pinned-tab.svg?v=2",
        },
        {
          rel: "shortcut icon",
          color: "/assets/images/meta/favicon.ico?v=2",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "17 years old frontend & backend developer and student from Turkey.",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@b2rbecue" },
        { name: "twitter:title", content: "tuna.one" },
        {
          name: "twitter:description",
          content:
            "17 years old frontend & backend developer and student from Turkey.",
        },
        {
          name: "twitter:image",
          content: "https://tuna.one/assets/images/tuna.png",
        },
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "tuna.one" },
        {
          name: "og:description",
          content:
            "17 years old frontend & backend developer and student from Turkey.",
        },
        {
          name: "og:image",
          content: "https://tuna.one/assets/images/tuna.png",
        },
        { name: "msapplication-TileColor", content: "#171717" },
        {
          name: "msapplication-config",
          content: "/assets/images/meta/browserconfig.xml?v=2",
        },
        { name: "theme-color", content: "#171717" },
      ],
    },
  },
  /*
    ENVIROMENT VARIABLES
  */
  runtimeConfig: {
    client_secret: process.env.CLIENT_SECRET,
    client_id: process.env.CLIENT_ID,
    refresh_token: process.env.REFRESH_TOKEN,
    mal_username: process.env.MAL_USERNAME,
    public: {
      discord_id: process.env.DISCORD_ID,
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  /*
    MODULE CONFIGURATIONS
  */
  content: {
    useCache: true,
    dir: "content",
    liveEdit: false,
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  sitemap: {
    hostname: "https://tuna.one",
    routes: dynamicRoutes,
    cacheTime: 1,
    defaults: {
      changefreq: "daily",
      priority: 1,
    },
  },
  googleFonts: {
    download: true,
    preconnect: true,
    prefetch: true,
    families: {
      Poppins: true,
      "Roboto+Mono": true,
      "Lexend+Deca": true,
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },
  eslint: {
    lintOnStart: false,
  },
});
