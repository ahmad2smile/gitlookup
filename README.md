# Git-Lookup [![Build Status](https://github.com/ahmad2smile/gitlookup/workflows/Build/badge.svg)]() [![Tests](https://github.com/ahmad2smile/gitlookup/workflows/Tests/badge.svg)]() [![Coverage](https://user-images.githubusercontent.com/6108922/75101547-e67a0800-55ff-11ea-96e6-1d01e1f8445d.png)]()

## Details

A [Hapi JS](hapi.dev/) Web Application and API.

**DeNormalizer Schema :**

**POST** `api/denormalize` endpoint with JSON Body Schema

Validation is done using [@Hapi/Joi](https://hapi.dev/family/joi/) Plugin.

Body:

<details>
<summary>Input Schema</summary>

```json
{
	"0": [
		{
			"id": 10,
			"title": "House",
			"level": 0,
			"children": [],
			"parent_id": null
		}
	],
	"1": [
		{
			"id": 12,
			"title": "Red Roof",
			"level": 1,
			"children": [],
			"parent_id": 10
		},
		{
			"id": 18,
			"title": "Blue Roof",
			"level": 1,
			"children": [],
			"parent_id": 10
		},
		{
			"id": 13,
			"title": "Wall",
			"level": 1,
			"children": [],
			"parent_id": 10
		}
	],
	"2": [
		{
			"id": 17,
			"title": "Blue Window",
			"level": 2,
			"children": [],
			"parent_id": 12
		},
		{
			"id": 16,
			"title": "Door",
			"level": 2,
			"children": [],
			"parent_id": 13
		},
		{
			"id": 15,
			"title": "Red Window",
			"level": 2,
			"children": [],
			"parent_id": 12
		}
	]
}
```

</details>
Response:
<details>
<summary>Output Schema</summary>

```json
[
	{
		"id": 10,
		"title": "House",
		"level": 0,
		"children": [
			{
				"id": 12,
				"title": "Red Roof",
				"level": 1,
				"children": [
					{
						"id": 17,
						"title": "Blue Window",
						"level": 2,
						"children": [],
						"parent_id": 12
					},
					{
						"id": 15,
						"title": "Red Window",
						"level": 2,
						"children": [],
						"parent_id": 12
					}
				],
				"parent_id": 10
			},
			{
				"id": 18,
				"title": "Blue Roof",
				"level": 1,
				"children": [],
				"parent_id": 10
			},
			{
				"id": 13,
				"title": "Wall",
				"level": 1,
				"children": [
					{
						"id": 16,
						"title": "Door",
						"level": 2,
						"children": [],
						"parent_id": 13
					}
				],
				"parent_id": 10
			}
		],
		"parent_id": null
	}
]
```

</details>

Swagger Docs:

[/documentation](gitlookup.azurewebsites.net/documentation)

**GitHub Repository Search :**

Node JS Respository Search Results Dashboard with Pagination using [Handlebars JS](handlebarsjs.com/) as Templating Engine.

[Browse](http://gitlookup.azurewebsites.net/)

## Usage

#### Install:

```bash
npm i
```

#### Run:

```bash
npm run dev
```

#### TODOs:

Possible improvments/refactors.

-   ~~Improve Validation on `/api/denormalize` with Dynamic Validation~~
-   ~~Improve Swagger Docs~~
-   ~~Tail Call Optimization in Recursion for `menuDenormalizer`~~ (Node dropped the support for TCO [Chromium Issue](https://bugs.chromium.org/p/v8/issues/detail?id=4698))
-   ~~Security Audit and implement common [Security guidlines](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)~~
-   ~~Setup GitHub Actions CI/CD~~
-   ~~Setup Test and Converage with GitHub Actions~~
