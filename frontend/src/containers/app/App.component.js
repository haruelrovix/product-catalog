import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Platform } from 'react-native';
import VisibilitySensor from 'react-visibility-sensor';
import get from 'lodash.get';

import Catalogue from '../../components/catalogue/Catalogue';
import Loader from '../../components/loader/Loader';
import styles from './App.styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingMore: false,
    };
  }

  onChange = (isVisible) => {
    if (isVisible) {
      this.loadMore();
    }
  };

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

  renderFooter = () => (
    !this.state.isLoadingMore ?
      <View /> :
      <ActivityIndicator style={styles.loader} size="small" />
  )

  render() {
    const { loading, catalogue } = this.props;
    const remaining = get(catalogue, 'product.remaining', 0);

    return (
      <View style={styles.container}>
        {
          loading && <Loader />
        }
        {
          !loading && catalogue &&
          <Catalogue
            catalogue={catalogue}
            loadMore={this.loadMore}
            isLoadingMore={this.state.isLoadingMore}
            {...this.props}
          />
        }
        {
          this.renderFooter()
        }
        {
          Platform.OS === 'web' && !loading && !this.state.isLoadingMore && remaining >= 0 ?
            <VisibilitySensor
              onChange={this.onChange}
              delayedCall
            /> :
            <View />
        }
      </View>
    );
  }
}

App.propTypes = {
  catalogue: PropTypes.shape({
    title: PropTypes.string,
  }),
  loading: PropTypes.bool,
  loadMore: PropTypes.func,
};

App.defaultProps = {
  catalogue: {
    title: '',
  },
  loading: false,
  loadMore: null,
};

export default App;
