import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export default defineNuxtComponent({
	setup() {
		const router = useRouter();
		onMounted(() => {
			gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
			// create the scrollSmoother before your scrollTriggers
			ScrollSmoother.create({
				smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
				effects: true, // looks for data-speed and data-lag attributes on elements
				smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
			});
		});

		watch(
			router.currentRoute,
			() => {
				const smooth = ScrollSmoother.get();
				smooth?.kill();
				setTimeout(() => {
					ScrollSmoother.create({
						smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
						effects: true, // looks for data-speed and data-lag attributes on elements
						smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
					});
					// ScrollSmoother.get();
				}, 150);
			},
			{ deep: true }
		);
	},
});
