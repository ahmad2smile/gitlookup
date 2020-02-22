import axios from "axios";

import { RepositorySearch } from "./RepositorySearch";

const baseURL = "hhttps://api.github.com";

const githubApi = axios.create({
	baseURL
});

export const repositorySearch = async (
	search: string,
	page: number
): Promise<RepositorySearch> => {
	const response = await githubApi.get(
		`/search/repositories?q=${search}&sort=stars&order=desc&page=${page}`
	);

	return response.data;
};
