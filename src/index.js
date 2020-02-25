const Hapi = require("@hapi/hapi");
const Path = require("path");

const { routes } = require("./routes");
const { plugins } = require("./plugins");
const { views } = require("./views");

const init = async () => {
	const port = process.env.PORT || 3005;

	const server = new Hapi.Server({
		port,
		routes: {
			files: {
				relativeTo: Path.join(__dirname, "../", "public")
			}
		}
	});

	await server.register(plugins);

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
