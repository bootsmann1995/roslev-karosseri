import { useMediaQuery } from "@vueuse/core";
import type { ContactPageQuery, CompanyInfoQuery } from "~/generated-types";

export default defineNuxtComponent({
	async setup() {
		const lightMode = useState("lightMode");
		const isMobile = useMediaQuery("(max-width: 968px)") ?? ref(false);

		onBeforeMount(() => {
			lightMode.value = true;
		});

		const { data } = await useFetch<{
			page: ContactPageQuery["contactPage"];
			company: CompanyInfoQuery["company"];
		}>("/api/contact");
		const seoMetaTags = data.value?.page._seoMetaTags ?? null;
		if (seoMetaTags) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			useSeoMeta(createSeoMeta(seoMetaTags as any));
		}

		if (!data.value) {
			throw createError({ statusCode: 404, message: "Page not found", fatal: true });
		}

		return {
			data,
			isMobile,
		};
	},
});
