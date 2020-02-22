import Handlebars from "handlebars";
import { ServerViewsConfiguration } from "@hapi/vision";

export const views: ServerViewsConfiguration = {
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
