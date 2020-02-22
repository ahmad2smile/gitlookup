export const previousPage = (page: number): number => {
	return Math.max(page - 1, 1);
};
