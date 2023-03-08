import { createRouter, createWebHistory } from "vue-router";

// COMPONENTS
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Index,
  },
  {
    path: "/servicios",
    name: "servicios",
    component: () => import("./../views/Services.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(to.hash);
      return {
        el: to.hash,
        behavior: "smooth",
        x: 0,
        y: 0,
      };
    }
  },
});

export default router;
