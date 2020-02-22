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
	helpersPath: "./templates/helpers"
};
