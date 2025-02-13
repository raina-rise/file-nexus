import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FileNexus",
  description: "File Control System",
  base: "/file-nexus/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
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
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/what-is-file-nexus" },
        ],
        sidebar: [
          {
            text: "Introduction",
            items: [
              {
                text: "What is FileNexus",
                link: "/what-is-file-nexus",
              },
              { text: "Getting Started", link: "/getting-started" },
            ],
          },
        ],
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh" },
          { text: "指南", link: "/zh/what-is-file-nexus" },
        ],
        sidebar: [
          {
            text: "介绍",
            items: [
              {
                text: "什么是FileNexus",
                link: "/zh/what-is-file-nexus",
              },
              { text: "快速开始", link: "/zh/getting-started" },
            ],
          },
        ],
      },
    },
  },
});
