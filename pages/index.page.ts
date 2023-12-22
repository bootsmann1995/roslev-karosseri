import type { ForsideRecord } from "~/generated-types";
import { useMediaQuery } from "@vueuse/core";

export default defineNuxtComponent({
	async setup() {
		const activeMenuClass = useState("activeMenuClass");
		const isLargeScreen = useMediaQuery("(min-width: 968px)") ?? ref(false);
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

		return {
			data,
			isLargeScreen,
			hero,
			salesPoints,
		};
	},
});
