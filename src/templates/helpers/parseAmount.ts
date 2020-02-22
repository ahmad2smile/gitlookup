const POSTFIX_K = 1000;

export const parseAmount = (amount: number): string => {
	if (!amount) {
		return "0";
	}

	if (amount < POSTFIX_K) {
		return String(amount);
	}

	const parsedFloatStr = (amount / POSTFIX_K).toFixed(1);

	// remove useless 0 if present at end. 123.0 => 123
	const parsedNumber = Number(parsedFloatStr);

	return `${parsedNumber}k`;
};
