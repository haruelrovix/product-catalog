import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

import Product from '../../components/product/Product';
import styles from '../app/App.styles';

const renderProduct = product => (
  <Product item={product} />
);

const renderProductWithBackButton = (product, history) => (
  <View style={{ flexDirection: 'column', marginTop: 20 }}>
    <TouchableOpacity onPress={() => history.goBack()}>
      <Text>Back</Text>
    </TouchableOpacity>
    {renderProduct(product)}
  </View>
);

const renderDetailProduct = (product, history) => (
  Platform.OS === 'web' ?
    renderProduct(product) :
    renderProductWithBackButton(product, history)
);

const DetailProduct = (props) => {
  const { data: { loading, product }, history } = props;
  return (
    <View style={styles.container}>
      {
        loading && <Text>Loading...</Text>
      }
      {
        !loading && product && renderDetailProduct(product, history)
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
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

DetailProduct.defaultProps = {
  data: {
    catalogue: {
      title: '',
    },
    loading: false,
  },
  history: {
    goBack: null,
  },
};

export default DetailProduct;
