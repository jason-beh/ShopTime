import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const brandImages = {
  jd: require('../assets/images/brands/jd.png'),
  hm: require('../assets/images/brands/hm.png'),
  jordan: require('../assets/images/brands/jordan.png')
};

export class Brand extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', width: 130, marginBottom: 20 }}>
        <Image
          style={styles.brandImage}
          source={brandImages[this.props.imageName]}
          resizeMode="center"
        />
        <Text style={styles.brandName}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandImage: {
    width: 120,
    height: 120,
    borderRadius: 1000
  },
  brandName: {
    fontFamily: 'Montserrat-Medium',
    marginTop: 4,
    color: 'black',
    fontSize: 14
  }
});

export default Brand;
