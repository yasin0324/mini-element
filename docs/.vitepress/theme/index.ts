import DefaultTheme from "vitepress/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@vitepress-demo-preview/component/dist/style.css";

import miniElement from "../../../src/index";
import "../../../src/styles/index.css";
import "./custom.css";

library.add(fas);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(miniElement);
  },
};
