import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import configureStore, { history } from './redux/store/configureStore';
import apolloClient from './services/apollo';
import App from './containers/app/App.container';

const store = configureStore();

const Root = () => (
  <div>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
            <Route path="/:id" component={App} />
          </Switch>
        </Router>
      </ApolloProvider>
    </Provider>
  </div>
);

export default Root;
