import { MenuDocument, MenuQuery } from "../../generated-types";
import { request } from "../../ressources/datocms";

export default defineEventHandler(async () => {
	const data = await request<MenuQuery>(MenuDocument);
	const header = mapHeader(data);
	return { ...header };
});

const mapHeader = (data: MenuQuery) => {
	return {
		mainMenu: data.menu?.mainMenu,
		productMenu: data.menu?.productMenu,
	};
};
