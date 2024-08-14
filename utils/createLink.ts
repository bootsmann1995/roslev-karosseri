export const createLink = (link: any) => {
	let url = "";
	if (!link || !link.__typename) {
		return "/";
	}
	switch (link.__typename) {
		case "ProductPageRecord":
			url = "/produkter/" + url;
			break;
		case "CaseRecord":
			url = "/nyheder/" + url;
			break;
		default:
			url = "/";
			break;
	}

	if (link.parent) url = `${url}${link.parent.slug}/`;

	if (link.slug) url += link.slug;

	return url;
};
