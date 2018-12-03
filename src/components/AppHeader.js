import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class AppHeader extends Component {
  state = {
    gender: ''
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerColumn}>
          <Icon
            name="ios-menu"
            size={32}
            color="#212224"
            style={styles.menuIcon}
          />
          <Picker
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ gender: itemValue })
            }
            selectedValue={this.state.gender}
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
            name="ios-search"
            size={26}
            color="#212224"
            style={styles.searchIcon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
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
    marginLeft: 30
  },
  menuIcon: {
    marginRight: 20
  }
});

export default AppHeader;
