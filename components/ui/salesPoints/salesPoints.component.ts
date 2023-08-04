import { ForsideRecord } from "generated-types";
import { PropType } from "vue";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as PropType<ForsideRecord>,
			default: null,
		},
	},
	setup() {
		const iconList = ref(["fluent:certificate-16-regular", "majesticons:coins-line", "solar:hand-stars-linear"]);

		const isMobile = ref(false);

		onMounted(() => {
			isMobile.value = window.innerWidth < 768;
		});

		return { iconList, isMobile };
	},
});
