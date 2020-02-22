export const formatDate = (date: string): string => {
	return new Intl.DateTimeFormat("en-US").format(new Date(date));
};
