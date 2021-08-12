import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Block, Text, theme } from 'galio-framework';
import { View } from 'react-native';
import Product from '../../components/Service';

const { width } = Dimensions.get('screen');
import products from '../../constants/services';

export default class Home extends React.Component {
  renderView = () => {
    const { navigation } = this.props;
    return (


      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Payment</Text>
          <Text style={styles.text_subheader}>Please choose your payment method</Text>
        </View>
      </View>

    )
  }

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.container2}>
        <View style={styles.container21}>
          <Block card style={[styles.products_1]}>


            <Text style={styles.text_green_bold_2}> Cardtype: VISA </Text>

          </Block>
        </View>
        <View style={styles.container22}>
          <Block card style={[styles.products, styles.shadow]}>


            <Text style={styles.text_green_bold_2}> Cardholder Name: John DOE </Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin:10}}/>
            <Text style={styles.text_green}> Card Number: 123456789 </Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin:10}}/>
            <Text style={styles.text_black}> Expiration Date: 05/21 </Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin:10}}/>
            <Text style={styles.text_black}> CVV: 123 </Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin:10}}/>
            <Text style={styles.text_black}> Address: 497 Evergreen</Text>

          </Block>
        </View>
        <View style={styles.container23}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('ConfirmationScreen')}>
            <Text style={styles.text_button}>PROCESS PAYMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderView()}
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },

  products: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    width: "90%",
    borderWidth: 0,
    minHeight: "25%",
    justifyContent: "center"
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },

  products_1: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 1.5,
  },
  container1: {
    flex: 1,
    width: '100%',
    backgroundColor: '#96d459',
    alignItems: 'center'

  },

  container2: {
    flex: 4,
    width: '100%',
    alignItems: 'center'
  },

  container21: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    top: 20,
    justifyContent: "center"
  },

  container22: {
    flex: 2,
    width: '100%',
    alignItems: 'center'
  },

  container23: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 30
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10
  },

  text_subheader: {
    color: '#fff',
    fontSize: 20
  },

  text_green_bold: {
    color: '#77AA46',
    fontWeight: 'bold',
    fontSize: 16,
    left: 10,
    padding: 8
  },

  text_green_bold_2: {
    color: '#77AA46',
    fontWeight: 'bold',
    fontSize: 20,
    left: 10,
    padding: 8
  },

  text_green: {
    color: '#77AA46',
    fontSize: 16,
    left: 10,
    padding: 8
  },

  text_black: {
    color: '#000',
    fontSize: 16,
    left: 10,
    padding: 8
  },

  text_button: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#97D55A',
    alignItems: 'center',
    width: "80%",
    padding: 15,
    borderRadius: 10,
  }


});