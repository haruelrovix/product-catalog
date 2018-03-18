import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Catalogue from '../../components/catalogue/Catalogue';

const App = (props) => {
  const { loading, catalogue } = props.data;
  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {!loading && catalogue && <Catalogue {...catalogue} />}
    </View>
  );
};

App.propTypes = {
  data: PropTypes.shape({
    catalogue: PropTypes.shape({
      title: PropTypes.string,
    }),
    loading: PropTypes.bool,
  }),
};

App.defaultProps = {
  data: {
    catalogue: {
      title: '',
    },
    loading: false,
  },
};

export default App;
