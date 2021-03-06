/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import Root from './src/Root';

/* eslint no-undef: 0 */
/* eslint-disable global-require */

// Sets up offline caching for all assets (disabled by default)
// You can enable offline caching by changing
// `enableOfflinePlugin` at the top of web/webpack.config.js
if (__OFFLINE__) {
  require('offline-plugin/runtime').install();
}

AppRegistry.registerComponent('ExampleApp', () => Root);
AppRegistry.runApplication('ExampleApp', {
  rootTag: document.getElementById('react-root'),
});
