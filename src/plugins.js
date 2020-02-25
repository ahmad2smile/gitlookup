const HapiSwagger = require("hapi-swagger");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");

exports.plugins = [
	{
		plugin: Inert
	},
	{
		plugin: Vision
	},
	{
		plugin: HapiSwagger
	}
];
