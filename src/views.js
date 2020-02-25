const Handlebars = require("handlebars");

exports.views = {
	engines: {
		html: Handlebars
	},
	layout: true,
	relativeTo: __dirname,
	path: "./templates",
	layoutPath: "./templates/layout",
	partialsPath: "./templates/partials",
	helpersPath: "./templates/helpers"
};
