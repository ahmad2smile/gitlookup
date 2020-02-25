const Joi = require("@hapi/joi");
const { badRequest } = require("@hapi/boom");

const entityValidator = Joi.object({
	id: Joi.number().required(),
	title: Joi.string().required(),
	level: Joi.number().required(),
	children: Joi.array()
		.items(Joi.link("#child"))
		.required(),
	parent_id: Joi.number()
		.allow(null)
		.required()
}).id("child");

exports.postDeNormalizeValidator = Joi.object()
	.min(1)
	.max(100)
	.message("Head not found in the payload")
	.label("Head")
	.pattern(
		Joi.number().required(),
		Joi.array()
			.items(entityValidator)
			.has(entityValidator)
			.message("Head must have at least one child")
	);

exports.normalizedResponseValidator = Joi.array()
	.items(entityValidator)
	.has(entityValidator);

exports.validateChildrenLevel = schema => {
	const schemaKeys = Object.keys(schema).map(Number);

	schemaKeys.forEach(k => {
		if (isNaN(k)) {
			throw badRequest("Entity has Invalid parent 'key'");
		}

		// NOTE: Protected by Joi validation and isNaN
		// eslint-disable-next-line security/detect-object-injection
		if (schema[k].some(child => child.level !== k)) {
			throw badRequest(
				"Parent key should match child property 'level' value"
			);
		}
	});
};
