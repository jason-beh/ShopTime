import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class ProductInfo extends Component {
  render() {
    return (
      <View style={{ margin: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.productInfoTitle}>DESCRIPTION</Text>
          {this.props.screenProps.description.map((feature, index) => {
            return (
              <Text style={styles.productInfoText} key={index}>
                - {feature}
              </Text>
            );
          })}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.productInfoTitle}>WASH INSTRUCTION</Text>
          <Text style={styles.productInfoText}>
            {this.props.screenProps.washing_instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productInfoTitle: {
    color: '#212224',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginBottom: 10,
    letterSpacing: 1
  },
  productInfoText: {
    color: '#999999',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 22
  }
});

export default ProductInfo;
