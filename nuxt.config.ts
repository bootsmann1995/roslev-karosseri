// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	sourcemap: false,
	modules: ["@nuxtjs/tailwindcss", "nuxt-security", "nuxt-icons", "~/modules/robots"],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
	css: ["@/assets/styles/global.scss"],
	experimental: { payloadExtraction: true },
	nitro: {
		compressPublicAssets: true,
		routeRules: {
			"/*": { swr: true },
			// '/old-page': { redirect: '/new-page' },
		},
	},
	typescript: {
		strict: true,
	},
	security: {
		headers: {
			contentSecurityPolicy: {
				"base-uri": ["'self'"],
				"font-src": ["'self'", "https:", "data:"],
				"form-action": ["'self'"],
				"frame-ancestors": ["'self'"],
				"img-src": ["'self'", "data:"],
				"object-src": ["'none'"],
				"script-src-attr": ["'none'"],
				"style-src": ["'self'", "https:", "'unsafe-inline'"],
				"upgrade-insecure-requests": true,
			},
		},
	},
	laitRobots: {
		allowRobots: process.env.ROBOTS ?? "false",
		userAgent: "*",
	},
});
