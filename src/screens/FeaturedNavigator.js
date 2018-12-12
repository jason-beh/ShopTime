import { createStackNavigator } from 'react-navigation';
import Product from './Product';
import Featured from './Featured';

export default createStackNavigator(
  {
    Featured,
    Product
  },
  {
    headerMode: 'none'
  }
);
