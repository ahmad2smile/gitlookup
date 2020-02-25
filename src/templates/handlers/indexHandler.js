const { ResponseToolkit, ResponseObject, Request } = require("@hapi/hapi");
const { repositorySearch } = require("../../github/services");

const PER_PAGE = 10;

exports.indexHandler = async (request, h) => {
	const page = Number(request.query.page) || 1;

	try {
		const results = await repositorySearch("nodejs", page);

		const totalPages = Math.floor(results.total_count / PER_PAGE);

		return h.view("index", { results, page, totalPages });
	} catch (error) {
		const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message;

		return h.view("error", { message });
	}
};
