export default defineAppConfig({
	nuxtIcon: {
		size: "24px",
	},
	head: {
		htmlAttrs: {
			lang: "en",
		},
		link: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
				crossorigin: "anonymous",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossorigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
			},
		],
	},
	pageTransition: { name: "page", mode: "out-in" },
});
