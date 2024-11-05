<template>
	<div class="text-rte">
		<datocms-structured-text
			:class="{ 'first-p': teaserSetting }"
			:data="data"
			:render-inline-record="renderInlineRecord"
			:render-link-to-record="renderLinkToRecord"
		/>
	</div>
</template>
<script lang="ts" src="./structuredText.component.ts" />
<style lang="scss">
.text-rte {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply mb-5;
	}

	h1 {
		@apply text-h2-sm lg:text-h2;
	}
	h2 {
		@apply text-h2-sm lg:text-h2 mb-5;
	}

	h3 {
		@apply text-h3-sm lg:text-h3 mb-5;
	}

	p {
		@apply mb-5 lg:mb-3 last-of-type:mb-0 lg:last-of-type:mb-0;
	}

	a {
		@apply text-blue-500 underline;
	}
	subscript {
		@apply relative text-[0.7rem] top-[0.2rem];
	}
	superscript {
		@apply relative text-[0.7rem] top-[-0.4rem];
	}

	ul li {
		@apply list-disc ml-3;
	}
}
.first-p p ~ p {
	display: none !important;
}
</style>
