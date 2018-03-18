import React from 'react';
import PropTypes from 'prop-types';
import FlatList from 'FlatList';

import Product from '../product/Product';

const renderProduct = props => (
  <Product {...props} />
);

const Catalogue = ({ items }) => (
  <FlatList
    data={items}
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
