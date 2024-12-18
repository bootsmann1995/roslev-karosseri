import type { ProductPageQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const lightMode = useState("lightMode");

		const { currentRoute } = useRouter();

		onMounted(() => {
			lightMode.value = true;
		});
		const { data, error } = await useFetch<ProductPageQuery["allProductPages"][0]>(
			`/api/product/${currentRoute.value.fullPath.replace(/\?.*$/, "")}`.replaceAll("//", "/")
		);
		if (!data.value || error.value) {
			throw createError({ statusCode: 404, message: "Page not found", fatal: true });
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
