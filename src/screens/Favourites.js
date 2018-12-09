import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import ProductCard from '../components/ProductCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { addFavourite } from '../actions/addFavourite';
import { removeFavourite } from '../actions/removeFavourite';

let { data } = require('../data/data.json');

class Favourites extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 30
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-round-back" size={44} color="#212224" />
            </TouchableOpacity>

            <Text style={styles.headerBackTitle}>Favourites</Text>
          </View>
          <View style={styles.searchResultsContainer}>
            {this.props.favourites.map((productId, index) => {
              return <ProductCard product={data[productId - 1]} key={index} />;
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerBackTitle: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: 30,
    fontSize: 18,
    color: '#212224'
  },
  searchResultsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  }
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Favourites));
