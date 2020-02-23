import { postDeNormalizeValidator, validateChildrenLevel } from "./validators";
import { NormalizedMenu } from "../models/NormalizedMenu";

describe("de-Normalize Validation", () => {
	test("Valid schema", () => {
		const payload = {
			0: [
				{
					id: 10,
					title: "House",
					level: 0,
					children: [],
					parent_id: null
				}
			]
		};

		const result = postDeNormalizeValidator.validate(payload);

		expect(result.error).toBeUndefined();
		expect(result.errors).toBeUndefined();
		expect(result.warning).toBeUndefined();
		expect(result.value).toStrictEqual(payload);
	});

	test("InValid schema Id is not Number", () => {
		const payload = {
			0: [
				{
					id: "invalid-key",
					title: "House",
					level: 0,
					children: [],
					parent_id: null
				}
			]
		};

		const result = postDeNormalizeValidator.validate(payload);

		expect(result.error?.message).toBe('"0[0].id" must be a number');
		expect(result.error?.name).toBe("ValidationError");
		expect(result.value).toStrictEqual(payload);
	});

	test("validateChildrenLevel with Valid schema", () => {
		const payload: NormalizedMenu = {
			1: [
				{
					id: 123,
					title: "House",
					level: 1,
					children: [],
					parent_id: null
				}
			]
		};

		expect(() => validateChildrenLevel(payload)).not.toThrow();
	});

	test("validateChildrenLevel with Dangerous 'level' value", () => {
		const payload = ({
			'require("child_process").exec(arguments[0],console.log)': [
				{
					id: 123,
					title: "House",
					level: 1,
					children: [],
					parent_id: null
				}
			]
		} as unknown) as NormalizedMenu;

		expect(() => validateChildrenLevel(payload)).toThrow(
			"Entity has Invalid parent 'key'"
		);
	});

	test("validateChildrenLevel with child 'level' value is not same as Parent key", () => {
		const payload: NormalizedMenu = {
			0: [
				{
					id: 123,
					title: "House",
					level: 1,
					children: [],
					parent_id: null
				}
			]
		};

		expect(() => validateChildrenLevel(payload)).toThrow(
			"Parent key should match child property 'level' value"
		);
	});
});
