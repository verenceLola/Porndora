import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQ_URL = "https://porn-dora.herokuapp.com";


const apolloClient = new ApolloClient({
	uri: GRAPHQ_URL,
	cache: new InMemoryCache({
		addTypename: false
	})
});

export default apolloClient;
