import { HeaderMenu } from "interfaces/layout/header.interface";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as PropType<HeaderMenu>,
			default: null,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const colors = ref(["#60656F", "#C49991", "#0275bf", "#91C499", "#9991C4"]);
		const currentColor = ref("#F7F7FF");
		const watchProp = computed(() => {
			return props.isActive;
		});
		const socialLinks = ref([
			{ name: "ic:baseline-facebook", link: "/" },
			{ name: "mdi:twitter", link: "/" },
			{ name: "mdi:youtube", link: "/" },
			{ name: "mdi:linkedin", link: "/" },
		]);
		watch(watchProp, () => {
			if (props.isActive) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		});
		const setHoverColor = (index: number) => {
			if (index === -1) {
				currentColor.value = "#F7F7FF";
			} else {
				index = ((index % colors.value.length) + colors.value.length) % colors.value.length;
				currentColor.value = colors.value[index];
			}
		};

		return {
			setHoverColor,
			currentColor,
			socialLinks,
		};
	},
});
