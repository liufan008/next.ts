import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { onError } from "apollo-link-error";

const GRAPHQL_ENDPOINT_DEVELOPMENT = "http://localhost:4000";
const GRAPHQL_ENDPOINT_PRODUCTION = "http://ALIAS.USER.now.sh/API_ENDPOINT";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `GraphQL error: Message ${message}, Location: ${locations} Path: ${path}`
      )
    )
  if (networkError) console.log(`Network error: ${networkError}`)
});

const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? GRAPHQL_ENDPOINT_DEVELOPMENT
    : GRAPHQL_ENDPOINT_PRODUCTION;

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_ENDPOINT,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
