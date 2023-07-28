import { ForsideRecord } from "generated-types";
import gsap, { Power3 } from "gsap";
import { PropType } from "vue";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as PropType<ForsideRecord>,
		},
	},
	setup() {
		const imageEl = ref<HTMLElement | null>(null);

		const animate = (el: HTMLElement | null) => {
			if (el) {
				gsap.fromTo(
					el,
					{
						y: 20,
						right: 10,
					},
					{
						y: window.innerWidth > 780 ? -20 : -10,
						delay: 2,
						duration: 3,
						ease: Power3.easeInOut,
					}
				);
			}
		};

		onMounted(() => {
			animate(imageEl.value);
		});
	},
});
