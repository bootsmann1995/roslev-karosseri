// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

module.exports = {
	client: {
		service: {
			name: "datocms",
			url: "https://graphql.datocms.com/",
			headers: {
				authorization: `Bearer ${process.env.GQL_TOKEN}`,
			},
		},
		includes: ["./queries/**/*.ts", "./queries/**/*.gql", "./queries/**/*.graphql"],
	},
};
