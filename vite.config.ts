import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import { resolve } from "path";
import Pages from "vite-plugin-pages";

export default defineConfig({
	plugins: [vuePlugin(), Pages()],
	resolve: {
		alias: { "@@": resolve("./src") },
		extensions: [".ts", ".vue"],
	},
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: false,
	},
});
