module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"@vue/prettier",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 2020,
		parser: {
			ts: "@typescript-eslint/parser",
			"<template>": "espree",
		},
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"no-console": 2,
		"no-debugger": 2,
		"vue/multi-word-component-names": 0,
		"@typescript-eslint/indent": ["error", "tab"],
		"interface-name-prefix": 0,
		"@typescript-eslint/no-unused-vars": ["error"],
		"vue/no-v-html": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
				useTabs: true,
			},
		],
	},
};
