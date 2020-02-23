import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { NormalizedMenu } from "../models/NormalizedMenu";
import { menuDenormalizer } from "../utils/menuDenormalizer";
import { validateChildrenLevel } from "./validators";

export const postDeNormalize = (
	request: Request,
	h: ResponseToolkit
): ResponseObject => {
	const normalizedMenu = request.payload as NormalizedMenu;

	validateChildrenLevel(normalizedMenu);

	const menu = menuDenormalizer(normalizedMenu);

	return h.response(menu).code(200);
};
