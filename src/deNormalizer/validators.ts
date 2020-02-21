import Joi from "@hapi/joi";

const entityValidator = Joi.object({
	id: Joi.number(),
	title: Joi.string(),
	level: Joi.number(),
	children: Joi.array().items(Joi.link("#child")),
	parent_id: Joi.number().allow(null)
}).id("child");

export const postDeNormalizeValidator = Joi.object().pattern(
	Joi.number(),
	Joi.array().items(entityValidator)
);
