import { useMediaQuery } from "@vueuse/core";

export default defineNuxtComponent({
	async setup() {
		const isMobile = useMediaQuery("(max-width: 968px)") ?? ref(false);
		const activeMenuClass = useState("activeMenuClass");
		onBeforeMount(() => {
			activeMenuClass.value = false;
		});
		const { data, error } = await useFetch("/api/cases-overview");

		if (!data.value || error.value) {
			throw createError("Page Not Found");
		}

		const seoMetaTags = data.value?.page?._seoMetaTags ?? null;
		if (seoMetaTags) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			useSeoMeta(createSeoMeta(seoMetaTags as any));
		}

		const linkMap = (link: any) => {
			return createLink(link);
		};

		return {
			linkMap,
			data,
			isMobile,
			activeMenuClass,
		};
	},
});
