import compose from 'recompose/compose';
import gql from 'graphql-tag';
import React from 'react';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';

import AppView from './App.component';

const AppContainer = props => (
  <AppView {...props} />
);

const getCatalogQuery = gql`
  query GetCatalogue {
    catalogue {
      id
      title
      metaTitle
      items {
        id
        title
        quantity
        price {
          amount
          currency
        }
        category
        images {
          id
          url
        }
      }
    }
  }
`;

export default compose(
  graphql(getCatalogQuery)
)(AppContainer);
