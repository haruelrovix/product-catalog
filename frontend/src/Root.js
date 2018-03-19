/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { apolloReducer } from 'apollo-cache-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import createMemoryHistory from 'history/createMemoryHistory';
import { Router, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';

import apolloClient from './services/apollo';
import App from './containers/app/App.container';
import DetailProduct from './containers/DetailProduct/DetailProduct.container';

const store = createStore(
  combineReducers({
    apollo: apolloReducer,
  }),
  {}, // initial state
  composeWithDevTools(),
);

const history = createMemoryHistory();

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/product/:id" component={DetailProduct} />
        </Switch>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default Root;
