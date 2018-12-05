import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class Search extends Component {
  render() {
    return (
      <View style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              height: 40,
              flex: 1,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 16
            }}
            placeholder="Product name"
          />
          <TouchableOpacity>
            <Icon
              name="ios-search"
              size={28}
              color="#212224"
              style={{ marginLeft: 16, marginRight: 4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Search;
