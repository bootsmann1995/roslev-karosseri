import type { ProductPageQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const lightMode = useState("lightMode");

		const { fullPath } = useRoute();

		onMounted(() => {
			lightMode.value = true;
		});

		const { data, error } = await useFetch<ProductPageQuery["allProductPages"][0]>(
			`/api/product/${fullPath.replace(/\?.*$/, "")}`
		);
		if (!data.value || error.value) {
			throw createError("Page Not Found");
		}
		const seoMetaTags = data.value?._seoMetaTags ?? null;
		if (seoMetaTags) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			useSeoMeta(createSeoMeta(seoMetaTags as any));
		}

		return {
			data,
			lightMode,
		};
	},
});
