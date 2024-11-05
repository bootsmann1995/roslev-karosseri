import { useConfirmDialog, useMediaQuery } from "@vueuse/core";
import type { PropType } from "vue";
import type { CaseItemQuery } from "~/generated-types";
import { createLink } from "~/utils/createLink";

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
		const currentImage = ref<number | null>(null);
		const currentIndex = ref<number | null>(null);
		const imagesArr = ref([]);
		const swiper = ref();
		const swiperEl = ref();

		const openModal = (image: number, index: number, images: []) => {
			currentImage.value = image;
			currentIndex.value = index;
			imagesArr.value = images;
			reveal();
		};
		const renderInlineRecord = (record: any) => {
			return record;
		};

		const renderLinkToRecord = (record: any) => {
			return record;
		};

		const setSwiper = (swiperEl: unknown) => {
			swiper.value = swiperEl;
		};

		watch(isRevealed, (value) => {
			if (!value) {
				currentImage.value = null;
			}
		});

		return {
			renderInlineRecord,
			renderLinkToRecord,
			openModal,
			currentImage,
			imagesArr,
			swiper,
			setSwiper,
			swiperEl,
			isRevealed,
			cancel,
			currentIndex,
			isMobile,
			createLink,
			confirm,
		};
	},
});
