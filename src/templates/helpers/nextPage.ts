export const nextPage = (page: number, totalPages: number): number => {
	return Math.min(page + 1, totalPages);
};
