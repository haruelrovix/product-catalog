import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatList from 'FlatList';
import { View } from 'react-native';
import get from 'lodash.get';

import styles from './Catalogue.styles';
import Product from '../product/Product';

class Catalogue extends Component {
  onPressItem = item => () => {
    this.props.history.push({
      pathname: `/${item.slug}`,
      product: { id: item.id },
    });
  }

  renderProduct = ({ item }) => (
    <Product
      onPressItem={this.onPressItem}
      item={item}
    />
  );

  render() {
    const items = get(this, 'props.catalogue.product.items', []);

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={this.renderProduct}
        />
      </View>
    );
  }
}

Catalogue.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Catalogue.defaultProps = {
  history: {
    push: null,
  },
};

export default Catalogue;
