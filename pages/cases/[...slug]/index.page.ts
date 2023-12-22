import type { CaseItemQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const { params } = useRoute();
		const activeMenuClass = useState("activeMenuClass");
		onBeforeMount(() => {
			activeMenuClass.value = true;
		});
		const { data } = await useFetch<CaseItemQuery["allCases"][0]>("/api/case/" + params.slug);

		if (!data.value) {
			throw createError("Page Not Found");
		}

		return {
			data,
		};
	},
});
