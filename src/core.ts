/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import VueAxios from "vue-axios";
import "./ui/assets/main.css";
import { VtPagination } from "@nanaaikinson24/vt-pagination";
import "@nanaaikinson24/vt-pagination/dist/style.css";
export const core: any = (app: any) => {
    return app.use(VueAxios, axios).component("v-pagination", VtPagination);
};
