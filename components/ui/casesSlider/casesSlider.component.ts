export default defineNuxtComponent({
	props: {
		data: Object,
	},
	setup() {
		const linkMap = (link: any) => {
			return createLink(link);
		};
		const swiper = ref();
		const initSwiper = (el: Swiper) => {
			swiper.value = el;
		};
		return {
			initSwiper,
			swiper,
			linkMap,
		};
	},
});
