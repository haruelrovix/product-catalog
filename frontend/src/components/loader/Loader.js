import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './Loader.styles';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loader;
