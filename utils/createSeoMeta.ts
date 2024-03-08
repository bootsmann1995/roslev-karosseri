type seoMetaQuery = Array<{
	__typename: "Tag";
	tag: string;
	attributes?: Record<string, string> | null;
	content?: string | null;
}>;

export const createSeoMeta = (seoMetaQuery: seoMetaQuery) => {
	const seo: { [key: string]: string } = {};

	seoMetaQuery.forEach((meta) => {
		if (meta.tag === "title") {
			seo.title = meta.content ?? "";
		}
		if (meta.attributes && "name" in meta.attributes) {
			seo[meta.attributes.name] = meta.attributes.content;
		}
		if (meta.attributes && "property" in meta.attributes) {
			seo[meta.attributes.property] = meta.attributes.content;
		}
	});

	return seo;
};
