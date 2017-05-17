/**
 * 多肉记
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/home/';
import CategoryAdd from './src/page/category/add';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  CategoryAdd: {screen: CategoryAdd},
});

AppRegistry.registerComponent('Succulents', () => SimpleApp);
