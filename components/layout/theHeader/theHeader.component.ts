export default defineNuxtComponent({
	props: {
		data: {
			type: Object,
			default: null,
		},
	},
	async setup(props) {
		const headerIsScrolledBy = useState("headerIsScrolledBy", () => false);
		const activeMenuClass = useState("activeMenuClass");
		const lightMode = useState("lightMode");

		const menuIsOpen = ref(false);
		const router = useRouter();

		onBeforeMount(() => {
			checkScroll();
		});

		const menu = computed(() => {
			return {
				mainMenu: props.data?.mainMenu,
				productMenu: props.data?.productMenu,
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
			menu,
			activeMenuClass,
			lightMode,
		};
	},
});
