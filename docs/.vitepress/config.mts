import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FileNexus",
  description: "File Control System",
  base: '/file-nexus/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/what-is-file-nexus" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is file nexus",
            link: "/what-is-file-nexus",
          },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/raina-rise/file-nexus",
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
