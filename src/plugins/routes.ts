import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		name: "App",
		path: "/",
		component: () => import("@@/pages/index"),
	},
	{
		name: "NotFound",
		path: "/:pathMatch(.*)*",
		component: () => import("@@/pages/404"),
	},
];

export default routes;
