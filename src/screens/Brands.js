import React, { Component } from 'react';
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';

import Brand from '../components/Brand';

export class Brands extends Component {
  render() {
    return (
      <View style={styles.brandRow}>
        <Brand title="JD Sports" imageName="jd" />
        <Brand title="H&M" imageName="hm" />
        <Brand title="Jordan" imageName="jordan" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    margin: 20,
    flexWrap: 'wrap'
  }
});

export default Brands;
