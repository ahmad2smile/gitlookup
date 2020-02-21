import { postDeNormalize } from "./handlers";
import { postDeNormalizeValidator } from "./validators";
import { ServerRoute, Request, ResponseToolkit } from "@hapi/hapi";

export const postDeNormalizer: ServerRoute = {
	method: "POST",
	path: "/api/denormalize",
	handler: postDeNormalize,
	options: {
		tags: ["api"],
		validate: {
			payload: postDeNormalizeValidator,
			failAction: async (
				request: Request,
				h: ResponseToolkit,
				err: Error | undefined
			): Promise<void> => {
				throw err;
			}
		}
	}
};
