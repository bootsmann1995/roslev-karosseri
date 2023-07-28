// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	sourcemap: false,
	modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "~/modules/robots", "@nuxt/image"],
	app: {
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
	},
	css: ["@/assets/styles/global.scss"],
	image: {
		imgix: {
			baseURL: "",
		},
	},
	experimental: { payloadExtraction: true },
	nitro: {
		compressPublicAssets: true,
		routeRules: {
			// "/*": { swr: true },
			// '/old-page': { redirect: '/new-page' },
		},
	},
	typescript: {
		strict: true,
	},
	// security: {
	// 	headers: {
	// 		contentSecurityPolicy: {
	// 			"base-uri": ["'self'"],
	// 			"font-src": ["'self'", "https:", "data:"],
	// 			"form-action": ["'self'"],
	// 			"frame-ancestors": ["'self'"],
	// 			"img-src": ["'self'", "data:"],
	// 			"object-src": ["'none'"],
	// 			"script-src-attr": ["'none'"],
	// 			"style-src": ["'self'", "https:", "'unsafe-inline'"],
	// 			"upgrade-insecure-requests": true,
	// 		},
	// 	},
	// },
	laitRobots: {
		allowRobots: process.env.ROBOTS ?? "false",
		userAgent: "*",
	},
});
