import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import store from "./store/index";
import router from "./router/index";

const app = createApp(App);

// ROUTER
app.use(router);

// STORE
app.use(store);

app.mount("#app");
