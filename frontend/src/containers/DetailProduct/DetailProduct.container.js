import compose from 'recompose/compose';
import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

import DetailProduct from './DetailProduct.component';

const DetailProductContainer = props => (
  <DetailProduct {...props} />
);

const getProductQuery = gql`
  query GetProduct {
    product {
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
`;

export default compose(graphql(getProductQuery))(DetailProductContainer);
