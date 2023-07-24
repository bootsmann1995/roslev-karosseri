// ./apollo.config.js

module.exports = {
	client: {
		service: {
			name: "datocms",
			url: process.env.GQL_HOST,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.GQL_TOKEN}`,
			},
		},
		includes: ["./queries/**/*.ts", "./queries/**/*.gql", "./queries/**/*.graphql"],
	},
};
