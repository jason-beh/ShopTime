import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

let marginContainer = 20;
let imageWidth = Dimensions.get('window').width - 2 * marginContainer;

function getImageHeight(imageWidth) {
  return imageWidth / 3;
}

const imagesNames = {
  'men-1': require('../assets/images/categories-men1.jpg'),
  'women-1': require('../assets/images/categories-women1.jpg')
};

export class Category extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.categoryImage}
          source={imagesNames[this.props.imageName]}
          resizeMode="cover"
        />
        <Text style={styles.categoryText}>
          {this.props.title.toUpperCase()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryImage: {
    margin: 20,
    borderRadius: 10,
    width: imageWidth,
    height: getImageHeight(imageWidth)
  },
  categoryText: {
    position: 'absolute',
    bottom: getImageHeight(imageWidth) / 2 + 5,
    left: marginContainer + 30,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  }
});

export default Category;
