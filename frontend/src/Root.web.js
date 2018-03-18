import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import apolloClient from './services/apollo';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <div>
            <ConnectedRouter history={history}>
              <Switch>
                <Text>Web!</Text>
              </Switch>
            </ConnectedRouter>
          </div>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Root;
