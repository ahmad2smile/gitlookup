import * as Hapi from "@hapi/hapi";

import { routes } from "./routes";
import { plugins } from "./plugins";
import { views } from "./views";

const init = async (): Promise<void> => {
	const port = process.env.PORT || 3005;

	const server = new Hapi.Server({ port });

	await server.register(plugins);

	server.route(routes);

	server.views(views);

	await server.start();

	console.log(`Listening  on port: ${port}`);
};

init();
