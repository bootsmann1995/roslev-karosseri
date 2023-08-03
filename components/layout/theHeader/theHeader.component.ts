import { HeaderMenu } from "interfaces/layout/header.interface";

export default defineNuxtComponent({
	async setup() {
		const headerIsScrolledBy = ref(false);
		const menuIsOpen = ref(false);

		onBeforeMount(() => {
			checkScroll();
		});

		const { data } = await useFetch<HeaderMenu>("/api/header");

		const menu = computed(() => {
			return {
				mainMenu: data?.value?.mainMenu,
				productMenu: data?.value?.productMenu,
			};
		});

		const openMenu = () => {
			menuIsOpen.value = !menuIsOpen.value;
		};

		const checkScroll = () => {
			window.addEventListener("scroll", () => {
				headerIsScrolledBy.value = window.scrollY > 10;
			});
		};

		return {
			headerIsScrolledBy,
			openMenu,
			menuIsOpen,
			data,
			menu,
		};
	},
});
