import { FrontpageDocument, FrontpageQuery } from "../../generated-types";
import { request } from "../../ressources/datocms";

export default defineCachedEventHandler(async () => {
	const data = await request<FrontpageQuery>(FrontpageDocument);

	return {
		...data.forside,
	};
});
