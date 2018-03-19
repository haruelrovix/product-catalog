import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Product from '../../components/product/Product';
import styles from '../app/App.styles';

const DetailProduct = (props) => {
  const { loading, product } = props.data;
  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {
        !loading && product &&
        <Product item={product} />
      }
    </View>
  );
};

DetailProduct.propTypes = {
  data: PropTypes.shape({
    catalogue: PropTypes.shape({
      title: PropTypes.string,
    }),
    loading: PropTypes.bool,
  }),
};

DetailProduct.defaultProps = {
  data: {
    catalogue: {
      title: '',
    },
    loading: false,
  },
};

export default DetailProduct;
