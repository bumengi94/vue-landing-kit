import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vuePlugin()],
	resolve: {
		alias: { "@@": resolve("./src") },
		extensions: [".ts", ".vue"],
	},
});
