import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import AppHeader from '../components/AppHeader.js';
import TabNavigator from '../components/TabNavigator';
import Featured from './Featured.js';
import Categories from '../screens/Categories.js';
import Brands from '../screens/Brands.js';

let Tabs = TabNavigator({
  Featured,
  Categories,
  Brands
});

class HomeTest extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <Tabs />
      </View>
    );
  }
}

export default withNavigation(HomeTest);
