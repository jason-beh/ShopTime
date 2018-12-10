import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';

export default class SizeChooser extends Component {
  state = {
    sizeChosen: 'S',
    sizes: this.props.sizes
  };

  render() {
    return (
      <View>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            marginTop: 40,
            textAlign: 'center'
          }}
        >
          Choose your size:
        </Text>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-around',
            flexDirection: 'row'
          }}
        >
          {Object.keys(this.state.sizes).map((size, index) => {
            if (size == this.state.sizeChosen) {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.sizeContainer, styles.containerActive]}
                >
                  <Text style={[styles.sizeLabel, styles.labelActive]}>
                    {this.state.sizeChosen}
                  </Text>
                  <Text style={[styles.quantityLabel, styles.labelActive]}>
                    {this.props.sizes[size]} Left
                  </Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.sizeContainer}
                  onPress={() => {
                    this.setState({
                      sizeChosen: Object.keys(this.state.sizes)[index]
                    });
                  }}
                >
                  <Text style={styles.sizeLabel}>{size}</Text>
                  <Text style={styles.quantityLabel}>
                    {this.props.sizes[size]} Left
                  </Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              `${this.props.productName} (${
                this.state.sizeChosen
              }) has been added to cart.`,
              `(Note: there is no actual cart in this project)`
            );
          }}
        >
          <Text style={styles.productCTA}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sizeContainer: {
    alignItems: 'center',
    padding: 10,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 50
  },
  sizeLabel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'black'
  },
  quantityLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    color: 'black'
  },
  containerActive: {
    backgroundColor: 'black'
  },
  labelActive: {
    color: 'white'
  },
  productCTA: {
    alignSelf: 'center',
    backgroundColor: '#212224',
    color: 'white',
    padding: 16,
    paddingLeft: 28,
    paddingRight: 28,
    borderRadius: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 20,
    marginTop: 20
  }
});
