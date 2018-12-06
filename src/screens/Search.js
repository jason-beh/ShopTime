import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductCard from '../components/ProductCard';
import { withNavigation } from 'react-navigation';

let { data } = require('../data/data.json');

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
              alignItems: 'center',
              marginBottom: 30
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-round-back" size={44} color="#212224" />
            </TouchableOpacity>

            <Text style={styles.headerBackTitle}>Search</Text>
          </View>
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
          <Text style={styles.searchResultsText}>
            {data.length} Items found
            {this.state.searchTerm.length == 0
              ? ''
              : ` for "${this.state.searchTerm}"`}
          </Text>
          <View style={styles.searchResultsContainer}>
            {data.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.promo_price}
                />
              );
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
  searchResultsText: {
    color: '#999999',
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
    marginTop: 30
  },
  searchResultsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  }
});

export default withNavigation(Search);
