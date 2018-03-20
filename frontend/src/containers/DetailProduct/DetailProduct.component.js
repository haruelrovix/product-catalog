import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform, Text, TouchableOpacity,
  ScrollView, View,
} from 'react-native';

import Loader from '../../components/loader/Loader';
import Product from '../../components/product/Product';
import styles from '../app/App.styles';

const renderProduct = product => (
  <Product item={product} />
);

const renderProductWithBackButton = (product, history) => (
  <ScrollView style={styles.backButtonContainer}>
    <TouchableOpacity onPress={() => history.goBack()}>
      <Text style={styles.backButton}>&lt; Back</Text>
    </TouchableOpacity>
    {renderProduct(product)}
  </ScrollView>
);

const renderDetailProduct = (product, history) => (
  <View>
    {
      Platform.OS === 'web' ?
        renderProduct(product) :
        renderProductWithBackButton(product, history)
    }
  </View>
);

const DetailProduct = (props) => {
  const { data: { loading, product }, history } = props;
  return (
    <View style={styles.container}>
      {
        loading && <Loader />
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
