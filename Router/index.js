import { createRouter, createWebHashHistory } from "vue-router";

// COMPONENTS
import home from "../src/App.vue";
import services from "../src/Pages/Services/Index.vue";

const routes = [
    {
        path: "/",
        component: home,
    },
    {
        path: "./services",
        component: services,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
