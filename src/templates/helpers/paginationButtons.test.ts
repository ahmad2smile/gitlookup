import { paginationButtons } from "./paginationButtons";

describe("Pagination Buttons Values", () => {
	test("Return 1 to 5 pages array", () => {
		const result = paginationButtons(1, 100);

		expect(result).toStrictEqual([1, 2, 3, 4, 5]);
	});

	test("Return 1 to 3 pages array when less than 5 pages", () => {
		const result = paginationButtons(1, 3);

		expect(result).toStrictEqual([1, 2, 3]);
	});

	test("Return 1 to 6 pages array on page 2", () => {
		const result = paginationButtons(2, 100);

		expect(result).toStrictEqual([2, 3, 4, 5, 6]);
	});

	test("Return 96 to 100 pages array on 1 page before last page", () => {
		const result = paginationButtons(99, 100);

		expect(result).toStrictEqual([96, 97, 98, 99, 100]);
	});

	test("Return 96 to 100 pages array on last page", () => {
		const result = paginationButtons(100, 100);

		expect(result).toStrictEqual([96, 97, 98, 99, 100]);
	});
});
