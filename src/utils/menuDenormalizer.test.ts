import { menuDenormalizer } from "./menuDenormalizer";
import { NormalizedMenu } from "../models/NormalizedMenu";
import { Menu } from "../models/Menu";

describe("de-Normalize Menu Utility", () => {
	let normalizedMenu: NormalizedMenu;
	let expectedResults: Menu;
	let dangerousNormalizedMenu: NormalizedMenu;
	let stackOverflowNormalizedMenu: NormalizedMenu;

	beforeEach(() => {
		normalizedMenu = {
			"0": [
				{
					id: 10,
					title: "House",
					level: 0,
					children: [],
					parent_id: null
				}
			],
			"1": [
				{
					id: 12,
					title: "Red Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{
					id: 18,
					title: "Blue Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{ id: 13, title: "Wall", level: 1, children: [], parent_id: 10 }
			],
			"2": [
				{
					id: 17,
					title: "Blue Window",
					level: 2,
					children: [],
					parent_id: 12
				},
				{
					id: 16,
					title: "Door",
					level: 2,
					children: [],
					parent_id: 13
				},
				{
					id: 15,
					title: "Red Window",
					level: 2,
					children: [],
					parent_id: 12
				}
			]
		};

		expectedResults = [
			{
				id: 10,
				title: "House",
				level: 0,
				children: [
					{
						id: 12,
						title: "Red Roof",
						level: 1,
						children: [
							{
								id: 17,
								title: "Blue Window",
								level: 2,
								children: [],
								parent_id: 12
							},
							{
								id: 15,
								title: "Red Window",
								level: 2,
								children: [],
								parent_id: 12
							}
						],
						parent_id: 10
					},
					{
						id: 18,
						title: "Blue Roof",
						level: 1,
						children: [],
						parent_id: 10
					},
					{
						id: 13,
						title: "Wall",
						level: 1,
						children: [
							{
								id: 16,
								title: "Door",
								level: 2,
								children: [],
								parent_id: 13
							}
						],
						parent_id: 10
					}
				],
				parent_id: null
			}
		];

		dangerousNormalizedMenu = {
			"0": [
				{
					id: 10,
					title: "House",
					level: 0,
					children: [],
					parent_id: null
				}
			],
			"1": [
				{
					id: 12,
					title: "Red Roof",
					level: ('require("child_process").exec(arguments[0],console.log)' as unknown) as number,
					children: [],
					parent_id: 10
				},
				{
					id: 18,
					title: "Blue Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{ id: 13, title: "Wall", level: 1, children: [], parent_id: 10 }
			]
		};

		stackOverflowNormalizedMenu = {
			"0": [
				{
					id: 10,
					title: "House",
					level: 0,
					children: [],
					parent_id: null
				}
			],
			"1": [
				{
					id: 12,
					title: "Red Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{
					id: 18,
					title: "Blue Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{ id: 13, title: "Wall", level: 1, children: [], parent_id: 10 }
			],
			"2": [
				{
					id: 12,
					title: "Red Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{
					id: 18,
					title: "Blue Roof",
					level: 1,
					children: [],
					parent_id: 10
				},
				{ id: 13, title: "Wall", level: 1, children: [], parent_id: 10 }
			]
		};
	});

	test("Denormalize", () => {
		const result = menuDenormalizer(normalizedMenu);

		expect(result[0].id).toBe(10);
		expect(result[0].children.length).toBe(3);
		expect(result[0].children[0].children.length).toBe(2);
		expect(result[0].children[1].children.length).toBe(0);
		expect(result[0].children[2].children.length).toBe(1);
	});

	test("Expected Results", () => {
		const result = menuDenormalizer(normalizedMenu);

		expect(result).toStrictEqual(expectedResults);
	});

	test("Throws Dangrous value of 'level' property", () => {
		expect(() => menuDenormalizer(dangerousNormalizedMenu)).toThrow(
			"Entity has Invalid property 'level'"
		);
	});

	test("Throws Manual Computation terminal error", () => {
		expect(() => menuDenormalizer(stackOverflowNormalizedMenu)).toThrow(
			"Mannual computation termination of request"
		);
	});
});
