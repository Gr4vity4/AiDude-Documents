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
          sidebarDepth: 3,
          children: [
            "corgidude/specification",
            {
              title: "บอร์ด CorgiDude (คอร์กี้ดู๊ด) คืออะไร",
              collapsable: false,
              children: ["corgidude/introduction"],
            },
            {
              title: "เริ่มต้นการใช้งาน",
              collapsable: false,
              children: [
                "installation/document_2",
                "installation/document_3",
                "installation/document_1",
              ],
            },

            // "getting-started",
          ],
        },
        {
          title: "Advance",
          path: "/guide/getting-started/",
          collapsable: false,
          // children: ["advance/tutorial"],
          children: [
            {
              title: "เนื้อหาบทเรียน CorgiDude",
              collapsable: false,
              children: [
                "lessons/ep1",
                "lessons/ep2",
                "lessons/ep3",
                "lessons/ep4",
                "lessons/ep5",
                "lessons/ep6",
                "lessons/ep7",
                "lessons/ep8",
                "lessons/ep9",
                "lessons/ep10",
              ],
            },
            {
              title: "เนื้อหาความสามารถบน CorgiDude",
              collapsable: false,
              children: [
                "advance/gpio/document_1",
                "advance/sdcard/document_1",
                "advance/wifi/document_1",
                "advance/http_request/document_1",
                "advance/mqtt/document_1",
                "advance/iftttt/document_1",
                "advance/line/document_1",
                "advance/thingspeak/document_1",
                "advance/google_vision/document_1",
              ],
            },
            {
              title: "เนื้อหาโมดูลการต่อใช้งานบน CorgiDude",
              collapsable: false,
              children: [
                "modules/button_switch",
                "modules/drive_motor",
                "modules/gpio_input",
                "modules/servo_motor",
              ],
            },
          ],
        },
        {
          title: "Demo Projects",
          description: "Just playing around",
          path: "/guide/getting-started/",
          collapsable: false,
          children: [
            {
              title: "ตัวอย่างโปรเจค Image Classification",
              collapsable: false,
              children: [
                "demo_project/image_classification/document_1",
                "demo_project/image_classification/document_2",
              ],
            },
            {
              title: "ตัวอย่างโปรเจค Object Detection",
              collapsable: false,
              children: [
                "demo_project/object_detection/document_1",
                "demo_project/object_detection/document_2",
                "demo_project/object_detection/document_3",
                "demo_project/object_detection/document_4",
                "demo_project/object_detection/document_5",
                "demo_project/object_detection/document_6",
              ],
            },
            {
              title: "ตัวอย่างโปรเจค Face Recognition",
              collapsable: false,
              children: [
                "demo_project/face_recognition/ep1",
                "demo_project/face_recognition/ep2",
                "demo_project/face_recognition/ep3",
              ],
            },
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
