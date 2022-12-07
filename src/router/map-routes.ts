import { RouteRecordRaw } from "vue-router";
import mapname from "./map-name";
const mapRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: mapname.home,
        component: () => import("@views/home/HomeView.vue"),
    },
];

export default mapRoutes;
