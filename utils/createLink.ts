export const createLink = (link: any) => {
	let url = "";
	switch (link.__typename) {
		case "ProductPageRecord":
			url = "/produkter/" + url;
			break;
		case "CaseRecord":
			url = "/cases/" + url;
			break;
		default:
			url = "/";
			break;
	}

	if (link.parent) url = `${url}${link.parent.slug}/`;

	if (link.slug) url += link.slug;

	return url;
};
