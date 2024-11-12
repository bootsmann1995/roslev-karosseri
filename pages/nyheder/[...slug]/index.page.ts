import type { CaseItemQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const { currentRoute } = useRouter();
		const activeMenuClass = useState("activeMenuClass");
		onMounted(() => {
			activeMenuClass.value = true;
		});

		console.log(
			"/api/case/" +
				(typeof currentRoute.value.params.slug !== "string"
					? currentRoute.value.params.slug[0]
					: currentRoute.value.params.slug)
		);

		const { data } = await useFetch<CaseItemQuery["allCases"][0]>(
			"/api/case/" +
				(typeof currentRoute.value.params.slug !== "string"
					? currentRoute.value.params.slug[0]
					: currentRoute.value.params.slug)
		);

		if (!data.value) {
			throw createError({ statusCode: 404, message: "Page not found", fatal: true });
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
