export default defineNuxtComponent({
	async setup() {
		const router = useRouter();
		const lightMode = useState("lightMode");
		const { data } = await useFetch("/api/header");

		watch(
			router.currentRoute,
			() => {
				lightMode.value = false;
			},
			{ deep: true }
		);

		return {
			lightMode,
			data,
		};
	},
});
