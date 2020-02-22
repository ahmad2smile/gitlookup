import { postDeNormalize } from "./handlers";
import {
	postDeNormalizeValidator,
	normalizedResponseValidator
} from "./validators";
import { ServerRoute, Request, ResponseToolkit } from "@hapi/hapi";
import { boomify } from "@hapi/boom";

export const postDeNormalizer: ServerRoute = {
	method: "POST",
	path: "/api/denormalize",
	handler: postDeNormalize,
	options: {
		description: "De-Normalizer API for Menu Schema",
		tags: ["api"],
		validate: {
			payload: postDeNormalizeValidator,
			failAction: async (
				request: Request,
				h: ResponseToolkit,
				err: Error | undefined
			): Promise<void> => {
				if (err) {
					throw boomify(err);
				}
			}
		},
		response: { schema: normalizedResponseValidator }
	}
};
