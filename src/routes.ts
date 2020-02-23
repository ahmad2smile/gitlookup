import { ServerRoute } from "@hapi/hapi";

import { postDeNormalizer } from "./deNormalizer/routes";
import { indexViewRoute, errorPage } from "./templates/routes";

const staticRoutes = [
	{
		method: "GET",
		path: "/css/{path*}",
		handler: {
			directory: {
				path: "css"
			}
		}
	},
	{
		method: "GET",
		path: "/img/{path*}",
		handler: {
			directory: {
				path: "img"
			}
		}
	}
];

export const routes: Array<ServerRoute> = [
	postDeNormalizer,
	indexViewRoute,
	...staticRoutes,
	errorPage
];
