import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {
  withNavigation,
  StackActions,
  NavigationActions
} from 'react-navigation';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Featured' })]
});

let marginContainer = 20;
let imageWidth = Dimensions.get('window').width - 2 * marginContainer;

function getImageHeight(imageWidth) {
  return (4 * imageWidth) / 3;
}

// const Featured = createAppContainer(
//   createStackNavigator({
//     Home: {
//       screen: FeaturedScreen
//     },
//     Product: {
//       screen: Product
//     }
//   })
// );

class Featured extends Component {
  render() {
    const { data } = require('../data/data.json');
    gender = this.props.gender;
    featured = data.filter(
      item => item.gender == gender && item.isFeatured == true
    );
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Product', {
                  data: featured[0]
                });
              }}
            >
              <Image
                style={[styles.imagePromo, styles.imageSinglePromo]}
                source={{ uri: featured[0].imageUrl }}
              />
              <Text style={styles.imageTextOverlay}>
                $ {featured[0].promo_price}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Product', {
                  data: featured[1]
                })
              }
            >
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoLeft
                ]}
                source={{ uri: featured[1].imageUrl }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Product', {
                  data: featured[2]
                })
              }
            >
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoRight
                ]}
                source={{ uri: featured[2].imageUrl }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    gender: state.gender.gender
  };
};

const styles = StyleSheet.create({
  imageTextOverlay: {
    position: 'absolute',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    bottom: 20,
    left: 50
  },
  imagePromo: {
    marginTop: 20,
    marginLeft: marginContainer,
    marginRight: marginContainer,
    borderRadius: 10
  },
  imageSinglePromo: {
    height: getImageHeight(imageWidth),
    width: imageWidth
  },
  imageHalfPromo: {
    height: getImageHeight((imageWidth - marginContainer) / 2),
    width: (imageWidth - marginContainer) / 2
  },
  imagePromoLeft: {
    marginRight: marginContainer / 2
  },
  imagePromoRight: {
    marginLeft: marginContainer / 2
  }
});

export default connect(
  mapStateToProps,
  null
)(withNavigation(Featured));
