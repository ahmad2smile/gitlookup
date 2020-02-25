const { indexHandler } = require("./handlers/indexHandler");
const {
	ServerRoute,
	Request,
	ResponseObject,
	ResponseToolkit
} = require("@hapi/hapi");

exports.indexViewRoute = {
	method: "GET",
	path: "/",
	handler: (request, h) => {
		return indexHandler(request, h);
	}
};

exports.errorPage = {
	method: "*",
	path: "/{any*}",
	handler: (request, h) => {
		return h.view("error").code(400);
	}
};
