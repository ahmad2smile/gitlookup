# Git-Lookup [![Build Status](https://github.com/ahmad2smile/gitlookup/workflows/Build/badge.svg)]() [![Tests](https://github.com/ahmad2smile/gitlookup/workflows/Tests/badge.svg)]()[Coverage](https://user-images.githubusercontent.com/6108922/75101547-e67a0800-55ff-11ea-96e6-1d01e1f8445d.png)

API has 2 endpoints:

1. `api/denormalize`

    Validate and Denormalize given JSON schema.

2. GitHub Search API

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
-   Tail Call Optimization in Recursion for `menuDenormalizer`
-   ~~Security Audit and implement common [Security guidlines](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)~~
-   ~~Setup GitHub Actions CI/CD~~
-   Setup Test and Converage with GitHub Actions
