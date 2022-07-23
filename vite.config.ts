import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vuePlugin()],
	resolve: {
		alias: { "@@": resolve("./src") },
		extensions: [".ts", ".vue"],
	},
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: false,
	},
});
