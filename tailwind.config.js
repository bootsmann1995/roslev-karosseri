// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["components/**/*.vue", "pages/**/*.vue", "layouts/**/*.vue"],
	corePlugins: {
		container: false,
	},
	theme: {
		fontFamily: {
			body: ["Quicksand", "sans-serif"],
			display: ["Quicksand", "sans-serif"],
			quicksand: ["Quicksand", "sans-serif"],
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
			xxxl: "1920px",
		},
		fontSize: {
			// Fonts - desktop
			d1: [
				"5.125rem",
				{
					lineHeight: "6.375rem",
					fontWeight: "750",
				},
			],
			d2: [
				"4.375rem",
				{
					lineHeight: "5.5rem",
					fontWeight: "750",
				},
			],
			d3: [
				"3.5rem",
				{
					lineHeight: "4.375rem",
					fontWeight: "800",
				},
			],
			h1: [
				"3rem",
				{
					lineHeight: "3.75rem",
					fontWeight: "750",
				},
			],
			h2: [
				"2.5rem",
				{
					lineHeight: "3.125rem",
					fontWeight: "750",
				},
			],
			h3: [
				"2rem",
				{
					lineHeight: "2.5rem",
					fontWeight: "750",
				},
			],
			t1: [
				"1.75rem",
				{
					lineHeight: "2.25rem",
					fontWeight: "650",
				},
			],
			t2: [
				"1.5rem",
				{
					lineHeight: "2.875rem",
					fontWeight: "650",
				},
			],
			"t2-light": [
				"1.5rem",
				{
					lineHeight: "2.875rem",
					fontWeight: "450",
				},
			],
			t3: [
				"1.125rem",
				{
					lineHeight: "1.375rem",
					fontWeight: "650",
				},
			],
			"t3-light": [
				"1.125rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "450",
				},
			],
			p1: [
				"1rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "500",
				},
			],
			"p1-button": [
				"1rem",
				{
					lineHeight: "1rem",
					fontWeight: "650",
				},
			],
			"p1-link": [
				"1rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "650",
				},
			],
			p2: [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					fontWeight: "450",
				},
			],
			"p2-strong": [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					fontWeight: "650",
				},
			],
			"p2-button": [
				"0.875rem",
				{
					lineHeight: "0.875rem",
					fontWeight: "650",
				},
			],
			p3: [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "450",
				},
			],
			"p3-strong": [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "650",
				},
			],
			c1: [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "750",
					letterSpacing: "0.04em",
				},
			],
			// Fonts - small
			"d1-sm": [
				"2.875rem",
				{
					lineHeight: "3.625rem",
					fontWeight: "750",
				},
			],
			"d2-sm": [
				"2.625rem",
				{
					lineHeight: "3.250rem",
					fontWeight: "750",
				},
			],
			"d3-sm": [
				"2.2250rem",
				{
					lineHeight: "2.875rem",
					fontWeight: "750",
				},
			],
			"h1-sm": [
				"2rem",
				{
					lineHeight: "2.5rem",
					fontWeight: "750",
				},
			],
			"h2-sm": [
				"1.75rem",
				{
					lineHeight: "2.225rem",
					fontWeight: "750",
				},
			],
			"h3-sm": [
				"1.625rem",
				{
					lineHeight: "2rem",
					fontWeight: "750",
				},
			],
			"t1-sm": [
				"1.5rem",
				{
					lineHeight: "1.875rem",
					fontWeight: "650",
				},
			],
			"t2-sm": [
				"1.25rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "650",
				},
			],
			"t2-light-sm": [
				"1.25rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "450",
				},
			],
			"t3-sm": [
				"1.125rem",
				{
					lineHeight: "1.375rem",
					fontWeight: "650",
				},
			],
			"t3-light-sm": [
				"1.125rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "450",
				},
			],
			"p1-sm": [
				"1rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "500",
				},
			],
			"p1-link-sm": [
				"1rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "650",
				},
			],
			"p1-button-sm": [
				"1rem",
				{
					lineHeight: "1rem",
					fontWeight: "650",
				},
			],
			"p2-sm": [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					fontWeight: "450",
				},
			],
			"p2-strong-sm": [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					fontWeight: "650",
				},
			],
			"p2-button-sm": [
				"0.875rem",
				{
					lineHeight: "0.875rem",
					fontWeight: "650",
				},
			],
			"p3-sm": [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "450",
				},
			],
			"p3-strong-sm": [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "650",
				},
			],
		},
		spacing: {
			0: "0",
			1: "0.5rem",
			2: "0.75rem",
			3: "1rem",
			4: "1.25rem",
			5: "1.5rem",
			6: "2rem",
			7: "2.5rem",
			8: "3rem",
			9: "3.75rem",
			10: "5rem",
			11: "5.25rem",
			12: "8.75rem",
		},
		borderRadius: {
			none: "0",
			sm: "0.125rem",
			DEFAULT: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.625rem",
			xxl: "0.75rem",
			full: "9999px",
		},
		extend: {
			colors: {
				white: "#F7F7FF",
				black: "#000000",
				"night-black": {
					500: "#131112",
				},
				success: {
					50: "#E9F6F2",
					500: "#21a179",
					800: "#164C41",
				},
				error: {
					50: "#FBEBEB",
					600: "#AE2928",
					800: "#571414",
				},
				warning: {
					100: "#FDF0DA",
					500: "#F4B446",
					800: "#62481C",
				},
				gray: {
					500: "#60656F",
				},
				brown: {
					500: "#C49991",
				},
				blue: {
					500: "#eff3f6",
				},
			},
			boxShadow: {
				"lait-shadow": "0px 12px 24px 12px rgb(74 74 73 / 10%)",
				custom: "6px 0px 15px 0px rgb(0 0 0 / 5%)",
			},
			backgroundImage: {},
			gridColumn: {
				"span-13": "span 13 / span 13",
				"span-14": "span 14 / span 14",
				"span-15": "span 15 / span 15",
				"span-16": "span 16 / span 16",
			},
			gridTemplateColumns: {
				13: "repeat(13, minmax(0, 1fr))",
				14: "repeat(14, minmax(0, 1fr))",
				15: "repeat(15, minmax(0, 1fr))",
				16: "repeat(16, minmax(0, 1fr))",
			},
			gridColumnStart: {
				13: "13",
				14: "14",
				15: "15",
				16: "16",
				17: "17",
			},
			transitionTimingFunction: {
				"lait-ease": "cubic-bezier(0.785, 0.135, 0.15, 0.86);",
				"locomotive-ease": "cubic-bezier(0.65, 0.05, 0.36, 1);",
				"locomotive-ease-2": "cubic-bezier(0.4, 0.15, 0, 1);",
			},
			aspectRatio: {
				"4/3": "4 / 3",
				"3/4": "3 / 4",
				"1/1": "1 / 1",
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				".container-row": {
					display: "grid",
					gridTemplateColumns: theme("gridTemplateColumns.4"),
					columnGap: ".5rem",
					"@media (min-width: 768px)": {
						gridTemplateColumns: theme("gridTemplateColumns.16"),
						columnGap: ".75rem",
					},
				},
				".container": {
					maxWidth: "100%",
					paddingLeft: "16px",
					paddingRight: "16px",
					marginLeft: "auto",
					marginRight: "auto",
					"@screen xxl": {
						maxWidth: `1440px`,
						paddingRight: "54px",
						paddingLeft: "54px",
					},
					"@screen xxxl": {
						maxWidth: "1920px",
					},
				},
			});
		}),
	],
	safelist: [],
};
