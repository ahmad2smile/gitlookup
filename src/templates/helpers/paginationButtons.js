const MAX_BUTTONS = 5;

exports.paginationButtons = (page, totalPages) => {
	// show less than MAX_BUTTONS if less pages
	const currentMaxButtons = Math.min(MAX_BUTTONS, totalPages);

	return Array.from({ length: currentMaxButtons }, (_value, index) => {
		const buttonIndex = index + 1; // 1 based index to display

		const diffFromLastButton = currentMaxButtons - buttonIndex;
		const diffFromAbsoluteLastPage = totalPages - diffFromLastButton;

		const normalCurrentButtonLabel = page - 1 + buttonIndex; // 1 based index for page in query

		// button shouldn't go beyond max mages
		return Math.min(normalCurrentButtonLabel, diffFromAbsoluteLastPage);
	});
};
