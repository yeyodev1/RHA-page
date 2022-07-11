import { createRouter, createWebHashHistory } from "vue-router";

console.log("router");
// COMPONENTS
import Home from "../views/Home.vue";
import services from "../views/Services.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/servicios",
        name: "servicios",
        component: services,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
