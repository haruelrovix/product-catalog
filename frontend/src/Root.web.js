import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import configureStore, { history } from './redux/store/configureStore';
import apolloClient from './services/apollo';
import App from './containers/app/App.container';
import DetailProduct from './containers/DetailProduct/DetailProduct.container';

const store = configureStore();

const Root = () => (
  <div>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:slug" component={DetailProduct} />
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  </div>
);

export default Root;
