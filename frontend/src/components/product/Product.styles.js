import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const size = Platform.OS === 'web' ? 470 : width - 10;

export default {
  container: {
    borderColor: '#00000050',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
    marginTop: 20,
  },
  image: {
    marginTop: 5,
    height: size,
    width: size,
  },
  description: {
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
  },
  price: {
    color: '#4a4a4a',
    letterSpacing: -0.2,
  },
  markdownContainer: {
    borderColor: '#00000050',
    borderTopWidth: StyleSheet.hairlineWidth,
    width: size,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  markdown: {
    color: '#4a4a4a',
    fontSize: '80%',
  },
};
