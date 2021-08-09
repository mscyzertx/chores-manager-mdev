import React from 'react';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, style, priceColor } = this.props;


    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback >
          <Block flex space="between" style={styles.productDescription}>
            <Text size={16} style={styles.productTitle}>{product.title}</Text>
            <Text size={12} color={priceColor}>Avg Rate:${product.price}/hours</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default Product;

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    color:'green',
    fontWeight:'bold',
    flexWrap: 'wrap'
  },
  productDescription: {
    padding: theme.SIZES.BASE,
  },
  
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});