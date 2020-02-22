import Joi from "@hapi/joi";

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

export const postDeNormalizeValidator = Joi.object()
	.min(1)
	.message("Head not found in the payload")
	.label("Head")
	.pattern(
		Joi.number().required(),
		Joi.array()
			.items(entityValidator)
			.has(entityValidator)
			.message("Head must have at least one child")
	);

export const normalizedResponseValidator = Joi.array()
	.items(entityValidator)
	.has(entityValidator);
