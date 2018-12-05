import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let { data } = require('../data/data.json');

let imageWidth = (Dimensions.get('window').width - 40 - 20) / 2;
function getImageHeight(imageWidth) {
  return (imageWidth * 523) / 392;
}

export class Search extends Component {
  state = {
    searchTerm: ''
  };

  render() {
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Product name"
              onChangeText={searchTerm => this.setState({ searchTerm })}
            />
            <TouchableOpacity>
              <Icon
                name="ios-search"
                size={28}
                color="#212224"
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.searchResults}>
            {data.length} Items found
            {this.state.searchTerm.length == 0
              ? ''
              : ` for "${this.state.searchTerm}"`}
          </Text>
          <View style={styles.productRow}>
            {data.map((product, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={styles.product}>
                    <Image
                      source={{ uri: product.imageUrl }}
                      style={styles.productImage}
                    />
                    <View style={styles.productPriceFavourite}>
                      <Text style={styles.productPrice}>
                        $ {product.promo_price}
                      </Text>
                      <TouchableOpacity>
                        <Icon
                          name="ios-heart-empty"
                          size={30}
                          color="#212224"
                          style={styles.searchIcon}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.productName}>{product.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            {data.map((product, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={styles.product}>
                    <Image
                      source={{ uri: product.imageUrl }}
                      style={styles.productImage}
                    />
                    <View style={styles.productPriceFavourite}>
                      <Text style={styles.productPrice}>
                        $ {product.promo_price}
                      </Text>
                      <TouchableOpacity>
                        <Icon
                          name="ios-heart-empty"
                          size={30}
                          color="#212224"
                          style={styles.searchIcon}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.productName}>{product.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 16
  },
  searchIcon: {
    marginLeft: 16,
    marginRight: 4
  },
  searchResults: {
    color: '#999999',
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
    marginTop: 30
  },
  product: {
    marginTop: 30
  },
  productImage: {
    width: imageWidth,
    height: getImageHeight(imageWidth),
    borderRadius: 10
  },
  productPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  productRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  productPriceFavourite: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  productName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginTop: 5
  }
});

export default Search;
