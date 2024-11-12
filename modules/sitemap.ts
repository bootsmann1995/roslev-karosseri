import { writeFile, unlink } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { defineNuxtModule, useNuxt } from "@nuxt/kit";
import { join } from "pathe";
import chalk from "chalk";
import { request } from "../ressources/datocms";
import { SitemapDocument, type SitemapQuery } from "../generated-types";
import { createLink } from "../utils/createLink";

export default defineNuxtModule({
	meta: {
		name: "sitemap",
	},
	async setup() {
		const nuxt = useNuxt();
		const dir = "./public/";
		nuxt.hook("build:before", async () => {
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

			const routes = pagesArray.map((x) => {
				return createLink(x);
			});

			const timestamp = new Date().toISOString();

			const mappedSitemap = [
				`<?xml version="1.0" encoding="UTF-8"?>`,
				`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
				...routes.map(
					(route) =>
						`<url><loc>${nuxt.options.runtimeConfig.public.BASE_URL}${route}</loc><lastmod>${timestamp}</lastmod></url>`
				),
				`</urlset>`,
			].join("");

			try {
				await writeFile(join(dir, "sitemap.xml"), mappedSitemap);
				await writeFile(join(dir, "sitemap.xml.gz"), gzipSync(mappedSitemap));
				console.log(chalk.green("√"), chalk(`sitemap.xml generated `));
			} catch (err) {
				console.log(chalk.bgRed.white(`SITEMAP ERR: ${err} `));
			}
		});
		nuxt.hook("close", async () => {
			try {
				await unlink(join(dir, "sitemap.xml"));
				await unlink(join(dir, "sitemap.xml.gz"));
			} catch (err) {
				console.log(chalk.bgRed.white(`ERR CLEANING FILES: ${err} `));
			}
		});
	},
});
