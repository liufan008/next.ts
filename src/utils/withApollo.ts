import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'

const { GRAPHQL_URL } = process.env

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  fetch: fetch,
  credentials: 'same-origin',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, httpLink])

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      ssrMode: true,
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
)
