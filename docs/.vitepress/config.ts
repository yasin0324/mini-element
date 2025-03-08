import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mini-element",
  description: "A Vue3 UI Library",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Basic",
        items: [
          {
            text: "Button",
            link: "/components/button",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  base: "/mini-element/",
});
