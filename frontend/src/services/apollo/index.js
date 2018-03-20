import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { from } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import appConfig from '../../config';

const { networkInterface: uri } = appConfig.apollo;
const httplink = createHttpLink({
  uri,
});

const cache = new InMemoryCache();

const errorLink = onError(({ networkError }) => {
  // const errorLink = onError(({ graphQLErrors, networkError }) => {
  // console.log('error afterware, graphQLErrors: ', graphQLErrors);
  // console.log('error afterware, networkError: ', networkError);

  if (networkError && networkError.statusCode === 401) {
    throw new Error('Unauthorized');
  }
});

const link = from([errorLink, httplink]);
const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: true,
});

export default client;
