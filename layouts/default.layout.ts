export default defineNuxtComponent({
	async setup() {
		const { data } = await useFetch("/api/header");

		return {
			data,
		};
	},
});
