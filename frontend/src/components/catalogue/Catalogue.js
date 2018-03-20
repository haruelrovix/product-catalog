import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatList from 'FlatList';
import { ActivityIndicator, Platform, View } from 'react-native';
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
  )

  renderFooter = () => (
    this.props.isLoadingMore &&
      <View style={styles.loader}>
        <ActivityIndicator size="small" />
      </View>
  )

  render() {
    const items = get(this, 'props.catalogue.product.items', []);

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index}
          renderItem={this.renderProduct}
          onEndReached={Platform.OS !== 'web' ? this.props.loadMore : null}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
          enableEmptySections
        />
      </View>
    );
  }
}

Catalogue.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loadMore: PropTypes.func,
  isLoadingMore: PropTypes.bool,
};

Catalogue.defaultProps = {
  history: {
    push: null,
  },
  loadMore: null,
  isLoadingMore: false,
};

export default Catalogue;
