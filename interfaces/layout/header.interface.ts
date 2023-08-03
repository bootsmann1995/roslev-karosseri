import { LinkItem } from "interfaces/utility/linkItem.interface";

export interface HeaderMenu {
	mainMenu: { link: LinkItem }[];
	productMenu: { menuLink: LinkItem; childMenuLinks: { link: LinkItem }[] }[];
}
