export default defineNuxtComponent({
	props: {
		products: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		const linkMap = (link: any) => {
			return createLink(link);
		};

		return {
			linkMap,
		};
	},
});
