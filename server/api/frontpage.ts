import {
	FrontpageDocument,
	FrontpageQuery,
	LatestCasesDocument,
	LatestCasesQuery,
	ProductsDocument,
	ProductsQuery,
} from "../../generated-types";
import { request } from "../../ressources/datocms";

export default defineCachedEventHandler(async () => {
	const config = useRuntimeConfig();
	const data = await request<FrontpageQuery>(FrontpageDocument, {}, "frontpage", config);
	const products = await request<ProductsQuery>(ProductsDocument, {}, "fpproducts", config);
	const latestCases = await request<LatestCasesQuery>(LatestCasesDocument, {}, "fpcases", config);

	return {
		products: products.allProductPages,
		latestCases,
		...data.forside,
	};
});
