import type { Swiper } from "swiper/types";

export default defineNuxtComponent({
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	setup() {
		const swiper = ref();
		const initSwiper = (el: Swiper) => {
			swiper.value = el;
		};
		return {
			initSwiper,
			swiper,
		};
	},
});
