import { ServerRoute } from "@hapi/hapi";

import { postDeNormalizer } from "./deNormalizer/routes";

export const registerRoutes = (): Array<ServerRoute> => {
	return [postDeNormalizer];
};
