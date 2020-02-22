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
		return new Promise((resolve, reject) =>
			indexHandler(request, h)
				.then(resolve)
				.catch(reject)
		);
	}
};
