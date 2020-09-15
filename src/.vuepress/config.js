const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "AiDude.io",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Shop",
        link: "https://aiiotshop.com",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          path: "/guide/getting-started/",
          collapsable: false,
          sidebarDepth: 2,
          activeHeaderLinks: false,
          children: [
            "corgidude/specification",
            "introduction",
            "getting-started",
          ],
        },
        {
          title: "Advance",
          path: "/guide/getting-started/",
          collapsable: false,
          children: ["advance/tutorial"],
        },
        {
          title: "Demo Projects",
          description: "Just playing around",
          path: "/guide/getting-started/",
          collapsable: false,
          children: [
            "demo_project/image_classification",
            "demo_project/object_detection",
          ],
        },
        {
          title: "Downloads",
          path: "/guide/downloads/",
          collapsable: false,
          children: ["downloads/firmware", "downloads/model"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
