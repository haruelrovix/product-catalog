import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import apolloClient from './services/apollo';
import App from './containers/app/App.container';

const store = configureStore();

class Root extends Component {
  render() {
    return (
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
  }
}

export default Root;
