import { indexHandler } from "./handlers/indexHandler";
import {
	ServerRoute,
	Request,
	ResponseObject,
	ResponseToolkit
} from "@hapi/hapi";

export const indexViewRoute: ServerRoute = {
	method: "GET",
	path: "/",
	handler: (
		request: Request,
		h: ResponseToolkit
	): Promise<ResponseObject> => {
		return indexHandler(request, h);
	}
};

export const errorPage: ServerRoute = {
	method: "*",
	path: "/{any*}",
	handler: (request: Request, h: ResponseToolkit): ResponseObject => {
		return h.view("error").code(400);
	}
};
