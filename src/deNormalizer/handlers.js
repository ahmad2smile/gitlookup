const { menuDenormalizer } = require("../utils/menuDenormalizer");
const { validateChildrenLevel } = require("./validators");

exports.postDeNormalize = (request, h) => {
	const normalizedMenu = request.payload;

	validateChildrenLevel(normalizedMenu);

	const menu = menuDenormalizer(normalizedMenu);

	return h.response(menu).code(200);
};
