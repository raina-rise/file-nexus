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
  head: [
    // 添加百度统计的代码
    ['script', { type: 'text/javascript' }, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7a09c5c954896301949a882168885666";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ]
});
