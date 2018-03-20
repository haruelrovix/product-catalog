import compose from 'recompose/compose';
import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

import App from './App.component';

const AppContainer = props => (
  <App {...props} />
);

const getCatalogQuery = gql`
  query GetCatalogue {
    catalogue(amount: 5, offset: 0) {
      id
      title
      metaTitle
      product {
        items {
          id
          slug
          title
          quantity
          price {
            amount
            currency
          }
          category
          images {
            fullUrl
          }
        }
      }
    }
  }
`;

export default compose(graphql(getCatalogQuery))(AppContainer);
