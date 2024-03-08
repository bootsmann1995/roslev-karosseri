import type { PropType } from "vue";
import type { StructuredTextDocument } from "vue-datocms";
import { createLink } from "~/utils/createLink";

export default defineNuxtComponent({
	props: {
		text: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			type: Object as PropType<{ links: Array<any>; value: StructuredTextDocument }>,
			default: null,
		},
		uniqueKey: {
			type: String,
			default: "",
		},
		openLinksInNewTab: {
			type: Boolean,
			default: false,
		},
		teaserSetting: {
			type: Boolean,
			default: false,
		},
	},
	async setup(props) {
		const { data } = await useAsyncData(props.uniqueKey, async () => {
			if (props.text.links && props.text.links.length > 0) {
				const links = props.text.links.map(async (link) => {
					const newSlug = await createLink(link);
					return {
						...link,
						slug: newSlug,
					};
				});
				const resolvedLinks = await Promise.all(links);
				return {
					value: props.text.value,
					links: resolvedLinks,
				};
			} else {
				return {
					value: props.text.value,
					links: [],
				};
			}
		});

		const renderInlineRecord = ({ record }: { record: { slug: string; overskrift: string } }) => {
			const link = resolveComponent("NuxtLink");
			return h(link, { to: `${record.slug}` }, { default: record.overskrift });
		};

		const renderLinkToRecord = ({
			record,
			children,
		}: {
			record: { slug: string; headline: string };
			children: string[];
		}) => {
			const link = resolveComponent("NuxtLink");
			const extraOptions: { target?: string } = {};
			if (props.openLinksInNewTab) {
				extraOptions.target = "_blank";
			}

			return h(link, { to: `${record.slug}`, ...extraOptions }, { default: children });
		};

		return {
			data,
			renderInlineRecord,
			renderLinkToRecord,
		};
	},
});
