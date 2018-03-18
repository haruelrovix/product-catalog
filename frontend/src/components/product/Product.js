import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import styles from './Product.styles';

const Product = ({ item }) => (
  <View style={styles.container}>
    <Image source={{ uri: item.images[0].url }} style={styles.image} />
    <View style={styles.description}>
      <Text>{item.title}</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('id-ID').format(item.price.amount)}
      </Text>
    </View>
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
