import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import mapRoutes from "./map-routes";

const routes: RouteRecordRaw[] = mapRoutes;

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
