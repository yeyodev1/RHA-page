import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import store from "../store/Index";
import router from "../Router/index";

const app = createApp(App);

// STORE
app.use(store);
// ROUTER
app.use(router);

app.mount("#app");
