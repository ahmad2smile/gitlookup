import { postDeNormalizeValidator } from "./validators";

describe("de-Normalize Validation", () => {
	test("Valid schema", () => {
		const payload = {
			"0": [
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

	test("InValid schema", () => {
		const payload = {
			"0": [
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
});
