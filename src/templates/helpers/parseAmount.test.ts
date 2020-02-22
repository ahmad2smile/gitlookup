import { parseAmount } from "./parseAmount";

describe("Parse Amount to Human Readable k", () => {
	test("Amount > 1000 to k", () => {
		const result = parseAmount(123000);

		expect(result).toBe("123k");
	});

	test("Amount < 1000 to original amount", () => {
		const result = parseAmount(123);

		expect(result).toBe("123");
	});

	test("Amount is string > 1000 to k", () => {
		const invalidAmoutn = ("123000" as unknown) as number;
		const result = parseAmount(invalidAmoutn);

		expect(result).toBe("123k");
	});

	test("Amount is string < 1000 to k", () => {
		const invalidAmoutn = ("123" as unknown) as number;
		const result = parseAmount(invalidAmoutn);

		expect(result).toBe("123");
	});

	test("Amount is falsy", () => {
		const invalidAmoutn = (undefined as unknown) as number;
		const result = parseAmount(invalidAmoutn);

		expect(result).toBe("0");
	});
});
