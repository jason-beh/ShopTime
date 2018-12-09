import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { addFavourite } from '../actions/addFavourite';
import { removeFavourite } from '../actions/removeFavourite';

import FavouriteButton from './FavouriteButton';

let imageWidth = (Dimensions.get('window').width - 40 - 20) / 2;
function getImageHeight(imageWidth) {
  return (imageWidth * 523) / 392;
}

class ProductCard extends Component {
  state = {
    favourite: this.props.favourites
  };

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
            source={{ uri: this.props.product.imageUrl }}
            style={styles.productCardImage}
          />
          <View style={styles.productCardPriceFavourite}>
            <Text style={styles.productCardPrice}>
              $ {this.props.product.promo_price}
            </Text>
            <FavouriteButton product_id={this.props.product.product_id} />
          </View>
          <Text style={styles.productCardName}>{this.props.product.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    favourites: state.favourites.favourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavourite: favourite => {
      dispatch(addFavourite(favourite));
    },
    removeFavourite: favourite => {
      dispatch(removeFavourite(favourite));
    }
  };
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ProductCard));
