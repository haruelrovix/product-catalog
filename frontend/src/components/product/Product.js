import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './Product.styles';

const Product = ({ item, onPressItem }) => (
  <View style={styles.container}>
    <TouchableOpacity
      disabled={!onPressItem}
      onPress={onPressItem && onPressItem(item)}
    >
      <Image source={{ uri: item.images[0].url }} style={styles.image} />
    </TouchableOpacity>
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
  onPressItem: PropTypes.func,
};

Product.defaultProps = {
  item: {
    id: '',
    title: '',
    category: '',
  },
  onPressItem: null,
};

export default Product;
