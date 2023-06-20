import { createRouter, createWebHistory } from "vue-router";
import { RouteNames } from "@/router/router.types";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: RouteNames.home,
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/about",
            name: RouteNames.about,
            component: () => import("@/views/AboutView.vue"),
        },
    ],
});

export default router;

