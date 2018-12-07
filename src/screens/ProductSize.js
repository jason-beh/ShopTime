import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class ProductSize extends Component {
  render() {
    return (
      <View style={{ margin: 20, marginBottom: 100 }}>
        <Text style={styles.productInfoTitle}>MEASUREMENTS</Text>
        {this.props.screenProps.size_description.map((description, index) => {
          if (index != 0) {
            return (
              <Text style={styles.productInfoText} key={index}>
                - {description}
              </Text>
            );
          } else {
            return (
              <Text
                style={[
                  styles.productInfoText,
                  {
                    fontFamily: 'Montserrat-Medium',
                    marginBottom: 4,
                    fontSize: 13
                  }
                ]}
                key={index}
              >
                {description}
              </Text>
            );
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  productSize: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold'
  },
  productSizeQuantity: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold'
  },
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

export default ProductSize;
