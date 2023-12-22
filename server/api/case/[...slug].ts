import { CaseItemDocument, CaseItemQuery } from "~/generated-types";
import { request } from "~/ressources/datocms";

export default defineEventHandler(async (event) => {
	const slug = event.context.params?.slug;

	const document = await request<CaseItemQuery>(CaseItemDocument, { slug }, "caseItem" + slug, useRuntimeConfig());

	if (!document?.allCases[0]) {
		throw new Error("Page not found");
	}

	return {
		...document?.allCases[0],
	};
});
