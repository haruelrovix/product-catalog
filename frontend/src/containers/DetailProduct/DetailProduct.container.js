import compose from 'recompose/compose';
import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

import DetailProduct from './DetailProduct.component';

const DetailProductContainer = props => (
  <DetailProduct {...props} />
);

const getProductQuery = gql`
  query GetProduct($id: ID) {
    product(id: $id) {
      id
      title
      descriptionMarkdown
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
`;

const getProductQueryOptions = {
  options: ({ location }) => {
    const { product, pathname } = location;
    const id = product ? product.id : pathname;

    return {
      variables: {
        id,
      },
    };
  },
};

export default compose(graphql(getProductQuery, getProductQueryOptions))(DetailProductContainer);
