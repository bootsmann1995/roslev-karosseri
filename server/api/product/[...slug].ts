import { ContactPageDocument, ContactPageQuery, ProductPageDocument, ProductPageQuery } from "~/generated-types";
import { request } from "~/ressources/datocms";
import { createLink } from "~/utils/createLink";
import { splitSlugParts } from "~/utils/splitSlugParts";

export default defineEventHandler(async (event) => {
	let slugParam = getRouterParam(event, "slug");
	let slug = "";
	if (!slugParam?.startsWith("/")) {
		slugParam = `/${slugParam}`;
	}
	if (slugParam) {
		const slugParts = splitSlugParts(slugParam);
		slug = slugParts[slugParts.length - 1];
	}
	const config = useRuntimeConfig();
	const document = await request<ProductPageQuery>(ProductPageDocument, { slug }, "productPage" + slug, config);
	const contactPageDocument = await request<ContactPageQuery>(ContactPageDocument, {}, "contactPage", config);

	const page = document.allProductPages[0];

	return { ...page, contactPageUrl: `/${contactPageDocument.contactPage?.slug}/` };
});
