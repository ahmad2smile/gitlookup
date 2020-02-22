import { ServerRoute } from "@hapi/hapi";

import { postDeNormalizer } from "./deNormalizer/routes";
import { indexViewRoute } from "./templates/routes";

export const routes: Array<ServerRoute> = [postDeNormalizer, indexViewRoute];
