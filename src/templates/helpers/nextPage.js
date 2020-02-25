exports.nextPage = (page, totalPages) => {
	return Math.min(page + 1, totalPages);
};
