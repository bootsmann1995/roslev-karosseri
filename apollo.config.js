// ./apollo.config.js

module.exports = {
	client: {
		service: {
			name: "datocms",
			localSchemaFile: "./schema.graphql",
		},
		includes: ["./queries/**/*.ts", "./queries/**/*.gql", "./queries/**/*.graphql"],
	},
};
