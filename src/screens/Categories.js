import React, { Component } from 'react';
import { View } from 'react-native';
import Category from '../components/Category.js';

export class Categories extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Category title="What's New" imageName="men-1" />
      </View>
    );
  }
}

export default Categories;
