import chalk from "chalk";
import { defineNuxtModule, useNuxt } from "@nuxt/kit";
import type { ModuleOptions } from "nuxt/schema";

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "prerender",
	},
	async setup() {
		const nuxt = useNuxt();

		nuxt.hook("nitro:build:before", async (nitroConfig) => {
			// const sitemap = await request<SitemapQuery>(
			// 	SitemapDocument,
			// 	{ locale: nuxt.options.runtimeConfig.public.LOCALE ?? "en" },
			// 	"sitemap",
			// 	nuxt.options.runtimeConfig
			// );

			const routes: string[] = [];

			if (routes && routes.length > 0) {
				nitroConfig.options.prerender.routes.push(...routes);
			}
			console.log(chalk.green("√"), chalk(`Routes added to prerender`));
		});
	},
});
