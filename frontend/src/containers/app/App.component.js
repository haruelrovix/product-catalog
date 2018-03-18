import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const App = (props) => {
  const { loading, catalogue } = props.data;
  return (
    loading ?
      <Text>Loading...</Text> :
      <Text>{catalogue.title}</Text>
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
