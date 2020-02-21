import { ServerRoute } from "@hapi/hapi";

import { postDeNormalizer } from "./deNormalizer/routes";

export const routes: Array<ServerRoute> = [postDeNormalizer];
