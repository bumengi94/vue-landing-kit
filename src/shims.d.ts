/// <reference types="vite-plugin-pages/client" />

declare module "*.vue" {
	import { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "@@/*" {
	import { defineComponent } from "vue";

	export default defineComponent;
}
