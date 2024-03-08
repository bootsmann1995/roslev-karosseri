export const splitSlugParts = (inputString: string) => {
	const parts = inputString.split("/");
	const filteredParts = parts.filter((part) => part && !/^\d+$/.test(part));
	return filteredParts;
};
