import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import store from "../store/Index";

const app = createApp(App);

app.use(store);

app.mount("#app");
