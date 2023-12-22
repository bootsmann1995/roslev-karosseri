import { useConfirmDialog, useMediaQuery } from "@vueuse/core";
import type { PropType } from "vue";
import type { CaseItemQuery, ResponsiveImage } from "~/generated-types";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as PropType<CaseItemQuery["allCases"][0]["indhold"]>,
			default: () => ({}),
		},
	},
	setup() {
		const { isRevealed, reveal, cancel, confirm } = useConfirmDialog();
		const isMobile = useMediaQuery("(max-width: 968px)") ?? ref(false);
		const currentImage = ref<ResponsiveImage | null>(null);
		const openModal = (image: ResponsiveImage) => {
			currentImage.value = image;
			reveal();
		};
		const renderInlineRecord = (record: any) => {
			return record;
		};

		const renderLinkToRecord = (record: any) => {
			return record;
		};

		watch(isRevealed, (value) => {
			if (!value) {
				currentImage.value = null;
			}
		});

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

		watch(isMobile, () => {
			resetSmooth();
		});

		return {
			renderInlineRecord,
			renderLinkToRecord,
			openModal,
			currentImage,
			isRevealed,
			cancel,
			isMobile,
			confirm,
		};
	},
});
