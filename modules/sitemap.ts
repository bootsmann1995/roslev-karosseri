import { writeFile, unlink } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { defineNuxtModule, useNuxt } from "@nuxt/kit";
import { join } from "pathe";
import chalk from "chalk";

export default defineNuxtModule({
	meta: {
		name: "sitemap",
	},
	async setup() {
		const nuxt = useNuxt();
		const dir = "./public/";
		nuxt.hook("build:before", async () => {
			// const sitemap = await request<SitemapQuery>(
			// 	SitemapDocument,
			// 	{ locale: nuxt.options.runtimeConfig.public.LOCALE ?? "en" },
			// 	"sitemap",
			// 	nuxt.options.runtimeConfig
			// );

			const routes: string[] = [];

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
