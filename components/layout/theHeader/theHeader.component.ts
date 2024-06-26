import { HeaderMenu } from "interfaces/layout/header.interface";

export default defineNuxtComponent({
	async setup() {
		const headerIsScrolledBy = useState("headerIsScrolledBy", () => false);
		const activeMenuClass = useState("activeMenuClass");
		const lightMode = useState("lightMode");

		const menuIsOpen = ref(false);
		const router = useRouter();

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

		watch(
			router.currentRoute,
			() => {
				menuIsOpen.value = false;
			},
			{ deep: true }
		);

		return {
			headerIsScrolledBy,
			openMenu,
			menuIsOpen,
			data,
			menu,
			activeMenuClass,
			lightMode,
		};
	},
});
