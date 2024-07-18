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
	emits: ["closeMenu"],
	setup(props, { emit }) {
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

		const closeMenu = () => {
			emit("closeMenu");
		};

		watch(
			() => props.isActive,
			() => {
				const nodeList = document.querySelectorAll(".navigation-link--accordion");

				if (props.isActive) {
					setTimeout(() => {
						nodeList.forEach((node) => {
							(node as HTMLElement).classList.add("!duration-300");
							(node as HTMLElement).classList.add("!delay-0");
						});
					}, 700);
				} else {
					nodeList.forEach((node) => {
						(node as HTMLElement).classList.remove("!duration-300");
						(node as HTMLElement).classList.remove("!delay-0");
					});
				}
			}
		);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const menuPrefix = (item: any) => {
			return createLink(item);
		};

		return {
			setHoverColor,
			currentColor,
			closeMenu,
			menuPrefix,
			socialLinks,
		};
	},
});
