import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { addFavourite } from '../actions/addFavourite';
import { removeFavourite } from '../actions/removeFavourite';

class FavouriteButton extends Component {
  render() {
    if (this.props.favourites.indexOf(this.props.product_id) == -1) {
      return (
        <TouchableOpacity onPress={() => this.props.addFavourite(this.props.product_id)}>
          <Icon
            name="ios-heart-empty"
            size={30}
            color="#212224"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.props.removeFavourite(this.props.product_id)}>
          <Icon
            name="ios-heart"
            size={30}
            color="#212224"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      )
    }
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

const styles = StyleSheet.create({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(FavouriteButton));
