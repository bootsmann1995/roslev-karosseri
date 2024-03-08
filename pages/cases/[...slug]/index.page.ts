import type { CaseItemQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const { params } = useRoute();
		const activeMenuClass = useState("activeMenuClass");
		onMounted(() => {
			activeMenuClass.value = true;
		});
		const { data } = await useFetch<CaseItemQuery["allCases"][0]>("/api/case/" + params.slug);

		if (!data.value) {
			throw createError("Page Not Found");
		}

		const seoMetaTags = data.value?._seoMetaTags ?? null;
		if (seoMetaTags) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			useSeoMeta(createSeoMeta(seoMetaTags as any));
		}

		return {
			data,
		};
	},
});
