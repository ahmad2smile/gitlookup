import * as Hapi from "@hapi/hapi";
import Path from "path";

import { routes } from "./routes";
import { plugins } from "./plugins";
import { views } from "./views";

const init = async (): Promise<void> => {
	const port = process.env.PORT || 3005;

	const server = new Hapi.Server({
		port,
		routes: {
			files: {
				relativeTo: Path.join(__dirname, "public")
			}
		}
	});

	await server.register(plugins);

	server.route({
		method: "GET",
		path: "/css/{path*}",
		handler: {
			directory: {
				path: "css"
			}
		}
	});

	server.route(routes);

	server.views(views);

	await server.start();

	console.log(`Listening  on port: ${port}`);
};

process.on("unhandledRejection", err => {
	console.log(err);
	process.exit(1);
});

init();
