import type { DocumentNode } from "graphql";
import { GraphQLClient, type Variables } from "graphql-request";
import type { RuntimeConfig } from "nuxt/schema";

const cache: { [key: string]: unknown } = {};

export async function request<T>(
	query: DocumentNode,
	variables: Variables | null = null,
	key: string | null = null,
	config: RuntimeConfig
): Promise<T> {
	const host = config.public.GQL_HOST;
	const token = config.public.GQL_TOKEN;
	const client = new GraphQLClient(host, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
	if (key && cache[key] != null) {
		return cache[key] as T;
	}
	try {
		const response = await client.request(query, variables ?? undefined).catch((err) => {
			if (err) {
				throw err;
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
