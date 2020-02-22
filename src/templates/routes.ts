import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";

export const indexViewRoute = {
	method: "GET",
	path: "/",
	handler: (request: Request, h: ResponseToolkit): ResponseObject => {
		return h.view("index");
	}
};
