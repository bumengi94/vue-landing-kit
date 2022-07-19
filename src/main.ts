import { ViteSSG } from "vite-ssg";
import App from "@@/App";

export const createApp = ViteSSG(App, {
	routes: [
		{
			name: "Home",
			path: "/",
			component: () => import("@@/pages/index"),
		},
	],
});

createApp(false);
