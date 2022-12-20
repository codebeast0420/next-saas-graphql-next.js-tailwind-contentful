import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const SPACE = process.env.NEXT_PUBLIC_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/ddgzaaogwqkq`;

const http = new HttpLink({
	uri: URL,
	headers: {
		Authorization: `Bearer oaqm7iiRl1HTUgQjvT_B7xYr36Aq3b36VlgCh4bKeeI`,
	},
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link,
	cache,
});

export default apolloClient;