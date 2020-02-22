import Handlebars from "handlebars";

export const views = {
	engines: {
		html: Handlebars
	},
	relativeTo: __dirname,
	path: "./templates",
	layout: true,
	layoutPath: "./templates/layout",
	helpersPath: "./templates/helpers"
};
