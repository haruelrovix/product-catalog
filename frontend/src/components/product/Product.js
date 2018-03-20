import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './Product.styles';

const renderDescriptionMarkdown = description => (
  <View style={styles.markdownContainer}>
    <Text style={styles.markdown}>{description}</Text>
  </View>
);

const Product = ({ item, onPressItem }) => (
  <View style={styles.container}>
    <TouchableOpacity
      disabled={!onPressItem}
      onPress={onPressItem && onPressItem(item)}
    >
      <Image source={{ uri: item.images[0].fullUrl }} style={styles.image} />
    </TouchableOpacity>
    <View style={styles.description}>
      <Text>{item.title}</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('id-ID').format(item.price.amount)}
      </Text>
    </View>
    {!onPressItem && renderDescriptionMarkdown(item.descriptionMarkdown)}
  </View>
);

Product.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    descriptionMarkdown: PropTypes.string,
    id: PropTypes.string,
  }),
  onPressItem: PropTypes.func,
};

Product.defaultProps = {
  item: {
    id: '',
    title: '',
    category: '',
    descriptionMarkdown: '',
  },
  onPressItem: null,
};

export default Product;
