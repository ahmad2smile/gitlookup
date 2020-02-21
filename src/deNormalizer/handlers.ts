import { Request, ResponseToolkit } from "@hapi/hapi";

export const postDeNormalize = function(request: Request, h: ResponseToolkit) {
	return h.response({ message: "Hello World!" }).code(200);
};
