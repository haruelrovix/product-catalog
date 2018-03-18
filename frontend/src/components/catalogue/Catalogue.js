import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Product from '../product/Product';

const renderProduct = props => (
  <Product {...props} />
);

const Catalogue = props => (
  <FlatList
    data={props.items}
    renderItem={renderProduct}
    keyExtractor={item => item.id}
  />
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
