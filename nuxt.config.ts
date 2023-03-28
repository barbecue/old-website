import dotenv from "dotenv";
dotenv.config();
const dev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  ssr: !dev,
  components: ["~/components", "~/components/Cards", "~/components/Lists"],
  css: ["~/stylesheets/main.css"],
  modules: [
    "@nuxtjs/eslint-module",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  plugins: ["~/plugins/tooltip"],
  runtimeConfig: {
    client_secret: process.env.CLIENT_SECRET,
    client_id: process.env.CLIENT_ID,
    refresh_token: process.env.REFRESH_TOKEN,
    mal_username: process.env.MAL_USERNAME,
    public: {
      discord_id: process.env.DISCORD_ID,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - tuna.one",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/assets/images/meta/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/assets/images/meta/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/assets/images/meta/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/assets/images/meta/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/assets/images/meta/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/assets/images/meta/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/assets/images/meta/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/assets/images/meta/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/images/meta/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/assets/images/meta/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/images/meta/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/assets/images/meta/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/images/meta/favicon-16x16.png",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "16 years old frontend & backend developer and student from Turkey.",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@b2rbecue" },
        { name: "twitter:site", content: "@b2rbecue" },
        { name: "twitter:title", content: "tuna.one" },
        {
          name: "twitter:description",
          content:
            "16 years old frontend & backend developer and student from Turkey.",
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
            "16 years old frontend & backend developer and student from Turkey.",
        },
        {
          name: "og:image",
          content: "https://tuna.one/assets/images/tuna.png",
        },
        { name: "msapplication-TileImage", content: "#171717" },
        {
          name: "msapplication-TileImage",
          content: "/assets/images/meta/ms-icon-144x144.png",
        },
        { name: "theme-color", content: "#171717" },
      ],
    },
  },
  googleFonts: {
    download: true,
    preconnect: true,
    prefetch: true,
    families: {
      "Roboto+Mono": true,
      "Lexend+Deca": true,
    },
  },
  eslint: {},
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
