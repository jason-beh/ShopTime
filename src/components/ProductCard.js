import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

let imageWidth = (Dimensions.get('window').width - 40 - 20) / 2;
function getImageHeight(imageWidth) {
  return (imageWidth * 523) / 392;
}

class ProductCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Product', {
            data: this.props.product
          })
        }
      >
        <View style={styles.productCard}>
          <Image
            source={{ uri: this.props.imageUrl }}
            style={styles.productCardImage}
          />
          <View style={styles.productCardPriceFavourite}>
            <Text style={styles.productCardPrice}>$ {this.props.price}</Text>
            <TouchableOpacity>
              <Icon
                name="ios-heart-empty"
                size={30}
                color="#212224"
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.productCardName}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  productCard: {
    marginTop: 30
  },
  productCardImage: {
    width: imageWidth,
    height: getImageHeight(imageWidth),
    borderRadius: 10
  },
  productCardPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  productCardPriceFavourite: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  productCardName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginTop: 5
  }
});

export default withNavigation(ProductCard);
