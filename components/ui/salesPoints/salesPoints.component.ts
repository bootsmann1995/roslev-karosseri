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
		const iconList = ref(["teenyicons:certificate-solid", "ph:coins-duotone", "solar:hand-stars-linear"]);

		return { iconList };
	},
});
