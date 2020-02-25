const { postDeNormalize } = require("./handlers");
const {
	postDeNormalizeValidator,
	normalizedResponseValidator
} = require("./validators");
const { boomify } = require("@hapi/boom");

exports.postDeNormalizer = {
	method: "POST",
	path: "/api/denormalize",
	handler: postDeNormalize,
	options: {
		description: "De-Normalizer API for Menu Schema",
		tags: ["api"],
		validate: {
			payload: postDeNormalizeValidator,
			failAction: async (request, h, err) => {
				if (err) {
					throw boomify(err);
				}
			}
		},
		response: { schema: normalizedResponseValidator }
	}
};
