import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "super file system",
  description: "super file system",
  base: '/file-system-release/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/what-is-super-file-system" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is super file system",
            link: "/what-is-super-file-system",
          },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/raina-rise/file-system-release",
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
    },
  },
});
