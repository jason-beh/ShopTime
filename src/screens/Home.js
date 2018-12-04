import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

let marginContainer = 20;
let imageWidth = Dimensions.get('window').width - 2 * marginContainer;

function getImageHeight(imageWidth) {
  return (4 * imageWidth) / 3;
}

export class Home extends Component {
  render() {
    if (this.props.gender == 'women') {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={[styles.imagePromo, styles.imageSinglePromo]}
                source={require('../assets/images/home-women1.jpg')}
              />
              <Text style={styles.imageTextOverlay}>Autumn '18</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoLeft
                ]}
                source={require('../assets/images/home-women2.jpg')}
              />
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoRight
                ]}
                source={require('../assets/images/home-women3.jpg')}
              />
            </View>
          </ScrollView>
          <Icon name="ios-cart" color="#212224" style={styles.cartButton} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={[styles.imagePromo, styles.imageSinglePromo]}
                source={require('../assets/images/home-men1.jpg')}
              />
              <Text style={styles.imageTextOverlay}>Autumn '18</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoLeft
                ]}
                source={require('../assets/images/home-men2.jpg')}
              />
              <Image
                style={[
                  styles.imagePromo,
                  styles.imageHalfPromo,
                  styles.imagePromoRight
                ]}
                source={require('../assets/images/home-men3.jpg')}
              />
            </View>
          </ScrollView>
          <Icon name="ios-cart" color="#212224" style={styles.cartButton} />
        </View>
      );
    }
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
    color: 'white',
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
  },
  cartButton: {
    fontSize: 36,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#0070D6',
    color: 'white',
    padding: 16,
    borderRadius: 50,
    bottom: 30,
    right: 20,
    width: 64,
    height: 64
  }
});

export default connect(
  mapStateToProps,
  null
)(Home);
