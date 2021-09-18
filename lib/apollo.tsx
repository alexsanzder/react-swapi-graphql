import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

export const client = new ApolloClient({
  uri: process.env.NEXT_SWAPI_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
