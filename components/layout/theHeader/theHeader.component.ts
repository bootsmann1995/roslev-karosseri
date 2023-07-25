import { HeaderMenu } from "interfaces/layout/header.interface";

export default defineNuxtComponent({
	async setup() {
		const { data } = await useFetch<HeaderMenu>("/api/header");

		return {
			data,
		};
	},
});
