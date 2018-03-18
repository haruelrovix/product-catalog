import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const Product = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

Product.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
  }),
};

Product.defaultProps = {
  item: {
    id: '',
    title: '',
    category: '',
  },
};

export default Product;
