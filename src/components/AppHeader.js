import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { changeGender } from '../actions/gender';
import { withNavigation } from 'react-navigation';

export class AppHeader extends Component {
  state = {
    gender: ''
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerColumn}>
          <Picker
            onValueChange={(itemValue, itemIndex) =>
              this.props.changeGender(itemValue)
            }
            selectedValue={this.props.gender}
            style={{
              width: 130,
              height: 60,
              color: '#212224'
            }}
            itemStyle={{
              fontFamily: 'Montserrat-Bold',
              color: '#212224',
              fontSize: 16
            }}
            mode="dialog"
          >
            <Picker.Item label="WOMEN" value="women" color="#212224" />
            <Picker.Item label="MEN" value="men" color="#212224" />
          </Picker>
        </View>
        <View style={styles.headerColumn}>
          <Icon name="ios-heart-empty" size={26} color="#212224" />
          <Icon
            name="ios-cart"
            size={26}
            color="#212224"
            style={styles.cartIcon}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Search')}
          >
            <Icon
              name="ios-search"
              size={26}
              color="#212224"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    gender: state.gender.gender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGender: gender => {
      dispatch(changeGender(gender));
    }
  };
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  headerColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pickerItem: {
    fontFamily: 'Montserrat-Bold',
    color: 'blue'
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 15
  },
  cartIcon: {
    marginLeft: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(AppHeader));
