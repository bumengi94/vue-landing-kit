import { RouterOptions, ViteSSG, ViteSSGContext } from "vite-ssg";
import App from "@@/App";
import routes from "@@/plugins/routes";
import i18n from "@@/plugins/i18n";

const routerOptions: RouterOptions = {
	routes,
};
const fn = (context: ViteSSGContext) => {
	const { app } = context;
	app.use(i18n);
};

export const createApp = ViteSSG(App, routerOptions, fn);
