import { CompanyInfoDocument, CompanyInfoQuery, ContactPageDocument, ContactPageQuery } from "~/generated-types";
import { request } from "~/ressources/datocms";

export default defineEventHandler(async () => {
	const config = useRuntimeConfig();
	const [contact, company] = await Promise.all([
		request<ContactPageQuery>(ContactPageDocument, {}, "contactPage", config),
		request<CompanyInfoQuery>(CompanyInfoDocument, {}, "company", config),
	]);

	return {
		page: contact.contactPage,
		company: company.company,
	};
});
