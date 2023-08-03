import { ForsideRecord } from "generated-types";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as PropType<ForsideRecord>,
		},
	},
});
