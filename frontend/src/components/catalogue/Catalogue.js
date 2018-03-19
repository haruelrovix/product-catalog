import React from 'react';
import PropTypes from 'prop-types';
import FlatList from 'FlatList';
import { View } from 'react-native';

import styles from './Catalogue.styles';
import Product from '../product/Product';

const renderProduct = props => (
  <Product {...props} />
);

const Catalogue = ({ items }) => (
  <View style={styles.container}>
    <FlatList
      data={items}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
    />
  </View>
);

Catalogue.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  })),
};

Catalogue.defaultProps = {
  items: [{
    title: '',
    category: '',
  }],
};

export default Catalogue;
