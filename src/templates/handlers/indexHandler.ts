import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { repositorySearch } from "../../github/services";

export const indexHandler = async (
	request: Request,
	h: ResponseToolkit
): Promise<ResponseObject> => {
	const results = await repositorySearch("nodejs");

	return h.view("index", { results });
};
