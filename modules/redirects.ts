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
				{ from: "/mandskabsbiler", to: "/produker/mandskabsbiler" },
				{ from: "/sandwichkasser", to: "/produker/sandwichkasser" },

				{ from: "/ladbiler", to: "/produker/ladbiler" },

				{ from: "/varebiler", to: "/produker/varebiler" },

				{ from: "/handicapbiler", to: "/produker/handicap-biler" },

				{ from: "/institutions-og-taxabusser", to: "/produker/institutions-og-taxabusser" },

				{ from: "/lifteftersyn", to: "/produker/lifteftersyn" },

				{ from: "/ladbiler/traelad", to: "/produker/ladbiler/traelad" },

				{ from: "/ladbiler/aluknaeklad", to: "/produker/ladbiler/aluknaeklad" },

				{ from: "/varebiler/varebilslifte", to: "/produker/varebiler/varebilslifte" },

				{ from: "/varebiler/aluramper", to: "/produker/varebiler/aluramper" },

				{ from: "/handicapbiler/korestolslifte", to: "/produker/handicap-biler/korestolslifte" },

				{
					from: "/handicapbiler/specialsaeder-og-konsoller",
					to: "/produker/handicap-biler/specialsaeder-og-drejekonsoller",
				},

				{ from: "/handicapbiler/korestolskraner", to: "/produker/handicap-biler/korestolskraner" },

				{ from: "/handicapbiler/forerplads", to: "/produker/handicap-biler/forerplads" },

				{
					from: "/institutions-og-taxabusser/passagersaeder",
					to: "/produker/institutions-og-taxabusser/passagersaeder",
				},

				{ from: "/institutions-og-taxabusser/buslifte", to: "/produker/institutions-og-taxabusser/buslifte" },

				{
					from: "/institutions-og-taxabusser/drejeklapstole",
					to: "/produker/institutions-og-taxabusser/drejeklapstole",
				},

				{
					from: "/specialopgaver/klimastyrede-varebiler",
					to: "/produker/specialopgaver/klimastyrede-varebiler",
				},
				{ from: "/specialopgaver/bogbusser", to: "/produker/specialopgaver/bogbusser" },

				{ from: "/specialopgaver/kontorbusser", to: "/produker/specialopgaver/kontorbusser" },

				{ from: "/specialopgaver/sundhedsbusser", to: "/produker/specialopgaver/sundhedsbusser" },

				{
					from: "/specialopgaver/laboratoriebusser",
					to: "/produker/specialopgaver/laboratoriebus-til-koge-sygehus",
				},

				{ from: "/om-os", to: "/kontakt" },
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
