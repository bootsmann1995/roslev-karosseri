export const extractLastPartOfUrl = (url: string): string | null => {
	console.log("test", url.indexOf("/"));
	if (url.indexOf("/") !== -1) {
		return url;
	}
	// Define a regex pattern to match the last part of the slug
	const pattern = /\/([^/]+)\/?$/;

	// Use RegExp.exec to find the match in the URL
	const match = pattern.exec(url);
	console.log(match);
	// Check if a match was found
	return match ? match[1] : null;
};
