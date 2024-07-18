import type { ForsideRecord } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const activeMenuClass = useState("activeMenuClass");

		onBeforeMount(() => {
			activeMenuClass.value = false;
		});

		const { data } = await useFetch<ForsideRecord>("/api/frontpage");

		const hero = computed(() => {
			if (!data.value) {
				return null;
			}
			return {
				overskrift: data.value?.overskrift,
				text: data.value?.text,
				image: data.value?.image,
			} as ForsideRecord;
		});

		const salesPoints = computed(() => {
			if (!data.value || data.value?.usp.length === 0) {
				return null;
			}
			return {
				usp: data.value?.usp,
			} as ForsideRecord;
		});

		const seoMetaTags = data.value?._seoMetaTags ?? null;
		if (seoMetaTags) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			useSeoMeta(createSeoMeta(seoMetaTags as any));
		}

		return {
			data,
			hero,
			salesPoints,
		};
	},
});
