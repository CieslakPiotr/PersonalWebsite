import { createApp } from "vue";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import vuetify from "./plugins/vuetify";
import router from "./router";
import App from "./App.vue";
import "./styles.css";

createApp(App).use(vuetify).use(router).mount("#app");
