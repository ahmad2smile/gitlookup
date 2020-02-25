const axios = require("axios");

const baseURL = "hhttps://api.github.com";

const githubApi = axios.create({
	baseURL
});

exports.repositorySearch = async (search, page) => {
	const response = await githubApi.get(
		`/search/repositories?q=${search}&sort=stars&order=desc&page=${page}`
	);

	return response.data;
};
