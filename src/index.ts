import * as Hapi from "@hapi/hapi";

import { registerRoutes } from "./routes";

const init = async (): Promise<void> => {
	const port = process.env.PORT || 3005;

	const server = new Hapi.Server({ port });

	server.route(registerRoutes());

	await server.start();

	console.log(`Listening  on port: ${port}`);
};

init();
