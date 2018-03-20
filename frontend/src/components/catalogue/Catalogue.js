import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatList from 'FlatList';
import { ActivityIndicator, View } from 'react-native';
import get from 'lodash.get';

import styles from './Catalogue.styles';
import Product from '../product/Product';

class Catalogue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingMore: false,
    };
  }

  onPressItem = item => () => {
    this.props.history.push({
      pathname: `/${item.slug}`,
      product: { id: item.id },
    });
  }

  loadMore = () => {
    this.setState({ isLoadingMore: true });

    const remaining = get(this, 'props.catalogue.product.remaining', 0);
    if (remaining <= 0) {
      this.setState({ isLoadingMore: false });
      return;
    }

    this.props.loadMore().then(() => {
      this.setState({ isLoadingMore: false });
    });
  }

  renderProduct = ({ item }) => (
    <Product
      onPressItem={this.onPressItem}
      item={item}
    />
  )

  renderFooter = () => (
    this.state.isLoadingMore &&
      <View style={{ flex: 1, padding: 10 }}>
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
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
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
};

Catalogue.defaultProps = {
  history: {
    push: null,
  },
  loadMore: null,
};

export default Catalogue;
