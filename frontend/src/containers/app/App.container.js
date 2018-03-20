import compose from 'recompose/compose';
import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

import App from './App.component';

const AMOUNT = 10;
let OFFSET = 0;

const AppContainer = props => (
  <App {...props} />
);

const getCatalogQuery = gql`
  query GetCatalogue($amount: Int, $offset: Int) {
    catalogue(amount: $amount, offset: $offset) {
      id
      title
      metaTitle
      product {
        remaining
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

const loadMoreUpdateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  const items = [
    ...previousResult.catalogue.product.items,
    ...fetchMoreResult.catalogue.product.items,
  ];

  return Object.assign({}, previousResult, {
    catalogue: {
      ...previousResult.catalogue,
      product: {
        ...fetchMoreResult.catalogue.product,
        items,
      },
    },
  });
};

const getCatalogQueryOptions = {
  options: () => ({
    variables: {
      amount: AMOUNT,
      offset: 0,
    },
  }),
  props: ({ data }) => {
    const { fetchMore, catalogue, loading } = data;
    OFFSET += 1;

    return {
      catalogue,
      loading,
      loadMore: () => fetchMore({
        variables: {
          amount: AMOUNT,
          offset: OFFSET,
        },
        updateQuery: loadMoreUpdateQuery,
      }),
    };
  },
};

export default compose(graphql(getCatalogQuery, getCatalogQueryOptions))(AppContainer);
