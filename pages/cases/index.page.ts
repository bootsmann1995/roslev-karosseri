import { useMediaQuery } from "@vueuse/core";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtComponent({
	async setup() {
		const isMobile = useMediaQuery("(max-width: 968px)") ?? ref(false);
		const activeMenuClass = useState("activeMenuClass");
		onMounted(() => {
			activeMenuClass.value = true;
		});
		const { data, error } = await useFetch("/api/cases-overview");

		if (!data.value || error.value) {
			throw createError("Page Not Found");
		}

		const resetSmooth = () => {
			const smooth = ScrollSmoother.get();
			smooth?.kill();
			setTimeout(() => {
				ScrollSmoother.create({
					smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
					effects: true, // looks for data-speed and data-lag attributes on elements
					smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
				});
				ScrollTrigger.normalizeScroll(true);
				// ScrollSmoother.get();
			}, 150);
		};

		const linkMap = (link: any) => {
			return createLink(link);
		};

		watch(isMobile, () => {
			resetSmooth();
		});

		return {
			linkMap,
			data,
			isMobile,
			activeMenuClass,
		};
	},
});
