const { postDeNormalizer } = require("./deNormalizer/routes");
const { indexViewRoute, errorPage } = require("./templates/routes");

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

exports.routes = [postDeNormalizer, indexViewRoute, ...staticRoutes, errorPage];
