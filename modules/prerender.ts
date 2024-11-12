import chalk from "chalk";
import { defineNuxtModule, useNuxt } from "@nuxt/kit";
import type { ModuleOptions } from "nuxt/schema";
import { SitemapDocument, type SitemapQuery } from "../generated-types";
import { request } from "../ressources/datocms";
import { createLink } from "../utils/createLink";

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "prerender",
	},
	async setup() {
		const nuxt = useNuxt();

		nuxt.hook("nitro:build:before", async (nitroConfig) => {
			const sitemap = await request<SitemapQuery>(
				SitemapDocument,
				{ locale: nuxt.options.runtimeConfig.public.LOCALE ?? "en" },
				"sitemap",
				nuxt.options.runtimeConfig
			);

			const pagesArray = [];

			for (const key in sitemap) {
				if (Object.prototype.hasOwnProperty.call(sitemap, key)) {
					const pageType = sitemap[key];
					if (pageType && pageType.length != null) {
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						pageType.forEach((page: any) => {
							pagesArray.push(page);
						});
					} else if (pageType && !pageType.length) {
						pagesArray.push(pageType);
					}
				}
			}

			const routesArr = pagesArray.map((x) => {
				return createLink(x);
			});

			if (routesArr && routesArr.length > 0) {
				nitroConfig.options.prerender.routes.push(...routesArr);
			}
			console.log(chalk.green("√"), chalk(`Routes added to prerender`));
		});
	},
});
