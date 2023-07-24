import * as fs from "node:fs";
import chalk from "chalk";
import { defineNuxtModule } from "@nuxt/kit";
import { Nuxt } from "@nuxt/schema/dist/index";
import { RobotsModuleOptions } from "interfaces/modules/robots.interface";

export default defineNuxtModule({
	meta: {
		configKey: "laitRobots",
		compatibility: {
			nuxt: "^3.0.0",
		},
	},
	async setup(moduleOptions: RobotsModuleOptions, nuxt: Nuxt) {
		const filePath = "./public/";
		let config = ``;

		//* Default config options */
		const defaultConfig: RobotsModuleOptions = {
			sitemapPath: "/sitemap.xml",
			userAgent: "*",
			filePath: "./public/",
		};

		//* creates public directory if it doesn't exist' */
		if (!fs.existsSync(filePath)) {
			fs.mkdirSync(filePath, { recursive: true });
		}

		//* Set User-Agent property */
		config = config + `User-agent: ${moduleOptions.userAgent ?? defaultConfig.userAgent}\n`;

		//* Set Disallow property */
		config =
			config +
			`Disallow: ${
				moduleOptions.allowRobots != null
					? moduleOptions.allowRobots === "true" || moduleOptions.allowRobots === true
						? ""
						: "/"
					: "/"
			}\n`;

		//* Set sitemap path */
		config = config + `Sitemap: ${moduleOptions.sitemapPath ?? defaultConfig.sitemapPath}\n`;

		nuxt.hook("build:before", async () => {
			//* Create robots.txt file */
			try {
				await fs.writeFileSync(`${filePath}robots.txt`, config, { encoding: "utf8" });
				// eslint-disable-next-line no-console
				console.log(chalk.green("√"), chalk(`Robots.txt generated `));
			} catch (err) {
				if (err) {
					// eslint-disable-next-line no-console
					console.log(chalk.bgRed.white(` ROBOTS ERR: ${err} `));
				}
			}
		});
	},
});
