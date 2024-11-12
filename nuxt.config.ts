// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	sourcemap: false,
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icons",
		"~/modules/robots",
		"@nuxt/image",
		"nuxt-icon",
		"nuxt-delay-hydration",
		"nuxt-swiper",
	],
	runtimeConfig: {
		public: {
			GQL_TOKEN: process.env.GQL_TOKEN,
			GQL_HOST: process.env.GQL_HOST,
			PREVIEW: process.env.PREVIEW,
		},
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
		prerender: {
			concurrency: 10,
			interval: 100,
			crawlLinks: false,
			routes: ["/"],
		},
		routeRules: {},
	},
	delayHydration: {
		// enables nuxt-delay-hydration in dev mode for testing
		debug: process.env.NODE_ENV === "development" ? false : "mount",
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
		allowRobots: process.env.ROBOTS === "true",
		userAgent: "*",
	},
});
