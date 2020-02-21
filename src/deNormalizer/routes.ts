import { postDeNormalize } from "./handlers";

export const postDeNormalizer = {
	method: "POST",
	path: "/api/denormalize",
	handler: postDeNormalize
};
