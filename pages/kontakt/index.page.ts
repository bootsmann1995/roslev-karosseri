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

		if (!data.value) {
			throw createError("Page Not Found");
		}

		return {
			data,
			isMobile,
		};
	},
});
