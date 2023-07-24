import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";

const cache: { [key: string]: object } = {};

export async function request<T>(
	query: DocumentNode,
	variables: unknown | null = null,
	key: string | null = null
): Promise<T> {
	const host = process.env.GQL_HOST;
	const token = process.env.GQL_TOKEN;
	const client = new GraphQLClient(host, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
	if (key && cache[key] != null) {
		return cache[key] as T;
	}
	try {
		const response = await client.request(query, variables).catch((err) => {
			if (err) {
				console.log(err);
			}
		});
		if (key) {
			cache[key] = response;
		}
		return response as T;
	} catch (err) {
		throw new Error("DatoCMS client error: " + err);
	}
}
