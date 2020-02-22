const MAX_BUTTONS = 5;

export const paginationButtons = (
	page: number,
	totalPages: number
): Array<number> => {
	// show less than MAX_BUTTONS if less pages
	const currentMaxButtons = Math.min(MAX_BUTTONS, totalPages);

	return Array.from(
		{ length: currentMaxButtons },
		(_value: unknown, index: number) => {
			const buttonIndex = index + 1; // 1 based index to display

			const diffFromLastButton = currentMaxButtons - buttonIndex;
			const diffFromAbsoluteLastPage = totalPages - diffFromLastButton;

			const normalCurrentButtonLabel = page - 1 + buttonIndex; // 1 based index for page in query

			// button shouldn't go beyond max mages
			return Math.min(normalCurrentButtonLabel, diffFromAbsoluteLastPage);
		}
	);
};
