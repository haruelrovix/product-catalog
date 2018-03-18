/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { apolloReducer } from 'apollo-cache-redux';

import App from './containers/app/App.container';
import apolloClient from './services/apollo';

const store = createStore(
  combineReducers({
    apollo: apolloReducer,
  }),
  {}, // initial state
  composeWithDevTools(),
);

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

export default Root;
