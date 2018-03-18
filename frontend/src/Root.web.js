import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from './redux/store/configureStore';
import apolloClient from './services/apollo';
import App from './containers/app/App.container';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <App />
          </Switch>
        </ConnectedRouter>
      </div>
    </ApolloProvider>
  </Provider>
);

export default Root;
