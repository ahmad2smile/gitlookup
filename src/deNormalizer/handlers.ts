import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";

export const postDeNormalize = (
	request: Request,
	h: ResponseToolkit
): ResponseObject => {
	return h.response(request.payload).code(200);
};
