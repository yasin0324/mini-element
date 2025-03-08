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
    logo: "/img/logo.jpg",
    nav: [
      { text: "安装", link: "/components" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Basic 基础组件",
        items: [
          {
            text: "Button 按钮",
            link: "/components/button",
          },
        ],
      },
      {
        text: "Feedback 反馈组件",
        items: [
          {
            text: "Alert 提示",
            link: "/components/alert",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/yasin0324/mini-element" }],
    outline: [2, 3],
  },
  base: "/mini-element/",
});
