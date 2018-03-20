import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const size = Platform.OS === 'web' ? 470 : width - 10;

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    height: size,
    width: size,
  },
};
