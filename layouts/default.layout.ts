import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export default defineNuxtComponent({
	setup() {
		const router = useRouter();
		const lightMode = useState("lightMode");
		onMounted(() => {
			gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
			// create the scrollSmoother before your scrollTriggers
			// ScrollSmoother.create({
			// 	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
			// 	effects: true, // looks for data-speed and data-lag attributes on elements
			// 	smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
			// });

			// window.addEventListener("resize", () => resetSmooth());
		});

		const resetSmooth = () => {
			// const smooth = ScrollSmoother.get();
			// setTimeout(() => {
			// 	smooth?.kill();
			// }, 100);
			// setTimeout(() => {
			// 	ScrollSmoother.create({
			// 		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
			// 		effects: true, // looks for data-speed and data-lag attributes on elements
			// 		smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
			// 	});
			// 	ScrollTrigger.normalizeScroll(true);
			// }, 500);
		};
		watch(
			router.currentRoute,
			() => {
				resetSmooth();
				lightMode.value = false;
			},
			{ deep: true }
		);

		return {
			lightMode,
		};
	},
});
