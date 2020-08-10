import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Neo from "./components/Neo.vue";
import Neo2 from "./components/Neo2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Neo },
    { path: "/xxx", component: Neo2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
