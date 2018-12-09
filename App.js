import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Featured from './src/screens/Home.js';
import Categories from './src/screens/Categories.js';
import Brands from './src/screens/Brands.js';
import AppHeader from './src/components/AppHeader.js';
import Search from './src/screens/Search.js';
import Product from './src/screens/Product.js';
import Favourites from './src/screens/Favourites'

import TabNavigator from './src/components/TabNavigator';

let Tabs = TabNavigator({
  Featured,
  Categories,
  Brands
});

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <Tabs />
      </View>
    );
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home
      },
      Search: {
        screen: Search
      },
      Product: {
        screen: Product
      },
      Favourites: {
        screen: Favourites
      }
    },
    {
      headerMode: 'none'
    }
  )
);
