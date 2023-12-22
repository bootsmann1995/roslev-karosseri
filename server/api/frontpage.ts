import { FrontpageDocument, FrontpageQuery, ProductsDocument, ProductsQuery } from "../../generated-types";
import { request } from "../../ressources/datocms";

export default defineCachedEventHandler(async () => {
	const config = useRuntimeConfig();
	const data = await request<FrontpageQuery>(FrontpageDocument, {}, "frontpage", config);
	const products = await request<ProductsQuery>(ProductsDocument, {}, "products", config);

	return {
		products: products.allProductPages,
		...data.forside,
	};
});
