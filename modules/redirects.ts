import chalk from "chalk";
import { defineNuxtModule, useNuxt } from "@nuxt/kit";

export default defineNuxtModule({
	meta: {
		configKey: "redirects",
		compatibility: {
			nuxt: "^3.0.0",
		},
	},
	setup() {
		const nuxt = useNuxt();
		nuxt.hook("nitro:build:before", (nitroConfig) => {
			const redirects: { from: string; to: string }[] = [
				// {
				// 	from: "https://roslevkarosseri.dk/",
				// 	to: "https://www.roslev-karosseri.dk/",
				// },
				// {
				// 	from: "https://www.roslevkarosseri.dk/",
				// 	to: "https://www.roslev-karosseri.dk/",
				// },
				// {
				// 	from: "https://www.roslevkarosseri.dk/*",
				// 	to: "https://www.roslev-karosseri.dk/:splat",
				// },
				// {
				// 	from: "https://roslevkarosseri.dk/*",
				// 	to: "https://www.roslev-karosseri.dk/:splat",
				// },
				{ from: "/mandskabsbiler", to: "/produkter/mandskabsbiler" },
				{ from: "/sandwichkasser", to: "/produkter/sandwichkasser" },

				{ from: "/ladbiler", to: "/produkter/ladbiler" },
				{ from: "/specialopgaver", to: "/produkter/specialopgaver" },

				{ from: "/varebiler", to: "/produkter/varebiler" },

				{ from: "/handicapbiler", to: "/produkter/handicap-biler" },

				{ from: "/institutions-og-taxabusser", to: "/produkter/institutions-og-taxabusser" },

				{ from: "/lifteftersyn", to: "/produkter/lifteftersyn" },

				{ from: "/ladbiler/traelad", to: "/produkter/ladbiler/traelad" },

				{ from: "/ladbiler/aluknaeklad", to: "/produkter/ladbiler/aluknaeklad" },

				{ from: "/varebiler/varebilslifte", to: "/produkter/varebiler/varebilslifte" },

				{ from: "/varebiler/aluramper", to: "/produkter/varebiler/aluramper" },

				{ from: "/handicapbiler/korestolslifte", to: "/produkter/handicap-biler/korestolslifte" },

				{
					from: "/handicapbiler/specialsaeder-og-konsoller",
					to: "/produkter/handicap-biler/specialsaeder-og-drejekonsoller",
				},

				{ from: "/handicapbiler/korestolskraner", to: "/produkter/handicap-biler/korestolskraner" },

				{ from: "/handicapbiler/forerplads", to: "/produkter/handicap-biler/forerplads" },

				{
					from: "/institutions-og-taxabusser/passagersaeder",
					to: "/produkter/institutions-og-taxabusser/passagersaeder",
				},

				{ from: "/institutions-og-taxabusser/buslifte", to: "/produkter/institutions-og-taxabusser/buslifte" },

				{
					from: "/institutions-og-taxabusser/drejeklapstole",
					to: "/produkter/institutions-og-taxabusser/drejeklapstole",
				},

				{
					from: "/specialopgaver/klimastyrede-varebiler",
					to: "/produkter/specialopgaver/klimastyrede-varebiler",
				},
				{ from: "/specialopgaver/bogbusser", to: "/produkter/specialopgaver/bogbusser" },

				{ from: "/specialopgaver/kontorbusser", to: "/produkter/specialopgaver/kontorbusser" },

				{ from: "/specialopgaver/sundhedsbusser", to: "/produkter/specialopgaver/sundhedsbusser" },

				{
					from: "/specialopgaver/laboratoriebusser",
					to: "/produkter/specialopgaver/laboratoriebus-til-koge-sygehus",
				},

				{ from: "/om-os", to: "/kontakt" },
				{ from: "/handicapbiler/9-produkter", to: "/produkter/specialopgaver" },
				{ from: "/institutions-og-taxabusser/eksempler", to: "/produkter" },
				{ from: "/sidste-nyt", to: "/nyheder" },
			];

			if (redirects && redirects.length > 0) {
				redirects.forEach((redirect) => {
					nitroConfig.options.routeRules[redirect.from] = {
						redirect: { to: redirect.to, statusCode: 301 },
					};
				});
			}

			console.log(chalk.green("√"), chalk(`Redirect routes added.`));
		});
	},
});
