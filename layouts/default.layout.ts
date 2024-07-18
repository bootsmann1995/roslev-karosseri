export default defineNuxtComponent({
	setup() {
		const router = useRouter();
		const lightMode = useState("lightMode");

		watch(
			router.currentRoute,
			() => {
				lightMode.value = false;
			},
			{ deep: true }
		);

		return {
			lightMode,
		};
	},
});
