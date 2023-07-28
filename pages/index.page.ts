import { ForsideRecord } from "generated-types";

export default defineNuxtComponent({
	async setup() {
		const { data } = await useFetch<ForsideRecord>("/api/frontpage");

		return {
			data,
		};
	},
});
