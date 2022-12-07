import { defineConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports";
import removeConsole from "vite-plugin-remove-console";
export default defineConfig({
    plugins: [vue(), VueTypeImports(), removeConsole()],
    build: { sourcemap: false },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@application": path.resolve(__dirname, "./src/application"),
            "@domain": path.resolve(__dirname, "./src/domain"),
            "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@ui": path.resolve(__dirname, "./src/ui"),
            "@assets": path.resolve(__dirname, "./src/ui/assets"),
            "@components": path.resolve(__dirname, "./src/ui/components"),
            "@views": path.resolve(__dirname, "./src/ui/views"),
            "@shared": path.resolve(__dirname, "./src/ui/components/shared"),
            "@layout": path.resolve(__dirname, "./src/ui/components/layout"),
            "@plugins": path.resolve(__dirname, "./src/ui/components/plugins"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@icons": path.resolve(__dirname, "./src/ui/components/icons"),
            "@scss": path.resolve(__dirname, "./src/ui/assets/scss"),
        },
    },
});
