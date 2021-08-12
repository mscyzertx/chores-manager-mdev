import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Block, Text, theme } from 'galio-framework';
import { View } from 'react-native';
import Product from '../../components/Service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width } = Dimensions.get('screen');
import products from '../../constants/services';

export default class MapScreen extends React.Component {

  renderView = () => {
    const { navigation } = this.props;
    return (

      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Cleaning</Text>
          <Text style={styles.text_subheader}>Please choose your service</Text>
        </View>
      </View>



    )
  }

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.container2}>
        <View style={styles.container3}>
          <MapView style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} />
        </View>
        <View style={styles.container4}>
          <Button onPress={() => navigation.navigate('MatchingScreen')} />
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
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
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

  container3: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },

  container4: {
    flex: 1.5,
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

  map: {
    width: "100%",
    height: "100%",
  },


});