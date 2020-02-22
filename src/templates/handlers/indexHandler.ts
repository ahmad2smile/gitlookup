import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { repositorySearch } from "../../github/services";

const PER_PAGE = 10;

export const indexHandler = async (
	request: Request,
	h: ResponseToolkit
): Promise<ResponseObject> => {
	const page = Number(request.query.page) || 1;

	try {
		const results = await repositorySearch("nodejs", page);

		const totalPages = Math.floor(results.total_count / PER_PAGE);

		return h.view("index", { results, page, totalPages });
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		return h.view("error", { message });
	}
};
