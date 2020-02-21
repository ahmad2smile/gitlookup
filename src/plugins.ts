import { ServerRegisterPluginObject } from "@hapi/hapi";
import * as HapiSwagger from "hapi-swagger";
import Inert, { OptionalRegistrationOptions } from "@hapi/inert";
import Vision, { ServerViewsConfiguration } from "@hapi/vision";
import { RegisterOptions } from "hapi-swagger";

export const plugins: Array<ServerRegisterPluginObject<
	OptionalRegistrationOptions & ServerViewsConfiguration & RegisterOptions
>> = [
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
