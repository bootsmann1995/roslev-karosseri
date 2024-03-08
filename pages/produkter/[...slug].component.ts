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

		return {
			data,
			lightMode,
		};
	},
});
