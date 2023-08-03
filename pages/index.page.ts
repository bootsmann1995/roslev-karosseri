import { ForsideRecord } from "generated-types";

export default defineNuxtComponent({
	async setup() {
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
			};
		});

		return {
			data,
			hero,
			salesPoints,
		};
	},
});
