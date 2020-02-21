import * as Hapi from "@hapi/hapi";

import { routes } from "./routes";
import { plugins } from "./plugins";

const init = async (): Promise<void> => {
	const port = process.env.PORT || 3005;

	const server = new Hapi.Server({ port });

	server.route(routes);

	await server.register(plugins);

	await server.start();

	console.log(`Listening  on port: ${port}`);
};

init();
