import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@views/App.vue";
import router from "./router";
import { core } from "./core";

createApp(App).use(core).use(createPinia()).use(router).mount("#app");
