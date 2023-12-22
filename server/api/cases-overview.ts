import { CasesOverviewDocument, CasesOverviewQuery } from "~/generated-types";
import { request } from "~/ressources/datocms";

export default defineEventHandler(async () => {
	const casesOverview = await request<CasesOverviewQuery>(
		CasesOverviewDocument,
		{},
		"casesOverview",
		useRuntimeConfig()
	);
	const cards = splitArray(casesOverview.allCases);

	if (casesOverview) {
		return {
			page: casesOverview.caseoverview,
			cards,
		};
	} else {
		return null;
	}
});

const splitArray = (originalArray: CasesOverviewQuery["allCases"]) => {
	const array1: CasesOverviewQuery["allCases"] = [];
	const array2: CasesOverviewQuery["allCases"] = [];
	const array3: CasesOverviewQuery["allCases"] = [];

	originalArray.forEach((item, index) => {
		switch (index % 3) {
			case 0:
				array1.push(item);
				break;
			case 1:
				array2.push(item);
				break;
			case 2:
				array3.push(item);
				break;
			default:
				break;
		}
	});

	return [array1, array2, array3];
};
